var http = require('http');

var fileGet = require('./lib/file_get.js'),
	requestType = require('./lib/request_type.js'),
	app = require('./lib/app.js');

var server;

server = http.createServer();
server.on('request', function (request, responce) {
	if ( requestType.getType(request) === app.requestType.getFile ) {
		// get file from the filesystem
		fileGet.get(request, responce);
	}
});
server.listen(9999);