/**
 * Created by apoorvmittal on 4/10/17.
 */
var http= require('http'); //provides HTTP server and client functionality
var fs= require('fs');
var path=require('path');//provides filesystem ppath-related functionality
var mime= require('mime');//derive a mime typed based on a filename extension
var cache={};//contents of cache files are stored
var chatServer= require('./lib/chat_server');//loads socket-io to handle server side functionality
chatServer.listen(server);//starts the server side functionality

//error helper function
function send404(response) {
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
}

//function to serve file data
function sendFile(response, filePath, fileContents) {
    response.writeHead(
        200,
        {"content-type": mime.lookup(path.basename(filePath))}
    );
    response.end(fileContents);
}

//check if a file is cached or not, if it is serve it
function serveStatic( response, cache, absPath) {
    //check if the file is cached
    if(cache[absPath]){
        sendFile(response, absPath, cache[absPath]);//serve file from memory
    }
    else {
        //check if the file exists
        fs.exists(absPath,function (exists) {
           if(exists) {
               //read the file from the disk
               fs.readFile(absPath, function (err, data) {
                   if (err) {
                       send404(response);
                   }
                   else {
                       cache[absPath] = data;
                       sendFile(response, absPath, data);//serve file from disk
                   }
               });
           }
               else{
                   send404(response);//send http 404 response
               }

        });
    }
}

//creating a http server
var server= http.createServer(function (request, response) {
    var filepath= false;

    //determine html file to be served by default
    if (request.url =='/'){
        filepath='public/index.html';
    }
    //translate URL path to relative file path
    else{
        filepath='public'+request.url;
    }
    //serve static file
    var absPath ='./'+filepath;
    serveStatic(response,cache, absPath);
})

//starting the server
server.listen(3000,function () {
    console.log("server listening on port 3000.")
})