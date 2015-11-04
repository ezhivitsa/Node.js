var http = require('http');

var fileGet = require('./lib/file_get.js'),
	requestType = require('./lib/requset_type.js'),
	app = require('./lib/app.js');

var server;

server = http.createServer();
server.on('request', function (request) {
	if ( requestType(request) === app.requestType.getFile ) {
		// get file from the filesystem
		fileGet.get();
	}
});
server.listen(9999);