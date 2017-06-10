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