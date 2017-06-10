/**
 * Created by apoorvmittal on 6/9/17.
 */
var socketio= require('socket.io');
var io;
var guestNumber=1;
var nickName={};
var namesUsed=[];
var currentRoom={};

//establish connection or starting up the socket.io server
exports.listen = function (server) {
    io=socketio.listen(server);
    io.set('log level',1);

    //defining how each user message will be handled
    io.sockets.on('connection', function (socket) {
        guestNumber = assignGuestName(socket, guestNumber, nickName, namesUsed);//assign user a guest name when they connect
        joinRoom(socket, 'Lobby');//place user in lobby when they connect

        //handle messages, names changes and room joing requests
        handleMessageBroadcast(socket, nickName);
        handleNameChangeAttempts(socket, nickName, namesUsed);
        handleRoomJoining(socket);

        //provide user list of occupied rooms when user connects
        socket.on('rooms', function () {
            socket.emit('rooms', io.sockets.manager.rooms);
        });

        //define cleanup logic when user disconnects
        handleClientDisconnect(socket, nickName, namesUsed);
    });
};


//assiging guest names
function assignGuestName(socket, guestNumber, nickName, namesUsed) {
    var name= 'Guest' +guestNumber;//generate new guest name
    nickName[socket.id]= name;//associate name with client connection id
    socket.emit('nameResult', { //let the user know there guest name
        success:true,
        name:name
    });
    namesUsed.push(name);
    return guestNumber+1;//increament counter used to generate unique guest names
}

//joining rooms
function joinRoom(socket, room) {
    socket.join(room);//make user join the room
    //user is now in this room
    currentRoom[socket.id] = room;
    socket.emit('joinResult', {room:room});//let user know they are in the room
    //leet other user know who has joined
    socket.broadcast.to(room).emit('message', {
        text:nickName[socket.id]+' has joined '+ room +'.'
    });
    var usersInRoom= io.sockets.clients(room);
    //if other users exists summarize who they are
    if ( usersInRoom.length>1){
        var usersInRoomSummary = 'User currently in '+room+': ';
        for (var index in usersInRoom){
            var userSocketId = usersInRoom[index].id;
            if( userSocketId != socket.id){
                if (index>0){
                    usersInRoomSummary+=', ';
                }
                usersInRoomSummary+= nickName[userSocketId];
            }
        }
        usersInRoomSummary+='.';
        socket.emit('message',{text: usersInRoomSummary}); //send the summary of the room to the user
    }
}

//handling name change requests
function handleNameChangeAttempts(socket, nickName, namesUsed) {
    //ad listner for nameAttempt event
    socket.on('nameAttempt', function (name) {
        if(name.indexOf('Guest')==0){
            socket.emit('nameResult',{
                success:false,
                message:'Names cannot begin with "Guest".'
            });
        }
        else{
            //if name isnt already registered, register it
            if (namesUsed.indexOf(name)==-1){
                var previousName =nickName[socket.id];
                var preciousNameIndex= namesUsed.indexOf(previousName);
                namesUsed.push(name);
                nickName[socket.id]= name;
                delete namesUsed[preciousNameIndex];//remove previous name to make it available for other clients
                socket.emit('nameResult', {
                    success:true,
                    name:name
                });
                socket.broadcast.to(currentRoom[socket.id].emit('message',{
                    text: previousName+' is now known as '+ name+'.'
                }));
            }
            //sending error if the name is already taken
            else{
                socket.emit('nameResult',{
                    success:false,
                    message:'That name is already Taken.'
                });
            }
        }
    });
}

//sending chat message
function handleMessageBroadcasting(socket) {
    socket.on('message', function (message) {
        socket.broadcast.to(message.room).emit('message',{
            text:nickName[socket.id]+ ': '+message.text
        });
    });
}

//create rooms
function handleRoomJoining(socket) {
    socket.on('join', function (room) {
        socket.leave(currentRoom[socket.id]);
        joinRoom(socket, room.newRoom);
    });
}

//handling user disconnections
function handleClientDisconnection(socket) {
    socket.on('disconnect', function () {
        var nameIndex = namesUsed.indexOf(nickName[socket.id]);
        delete namesUsed[nameIndex];
        delete nickName[socket.id];
    });
}