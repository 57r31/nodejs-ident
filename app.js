var net = require("net");
var userId	= process.argv[2] || "username";
var system	= process.argv[3] || "UNIX";
var ipAddr	= process.argv[4] || "127.0.0.1";
var port	= 113;

var server 	= net.createServer(function(socket) {
	console.log("Ident request from: " + socket.remoteAddress);
	socket.end("23, 23 : USERID : " + system + " : " + userId);
});

server.on("listening", function() {
	console.log("Ident server running on: " + ipAddr + ":" +  port);
});

server.listen(port, ipAddr);
