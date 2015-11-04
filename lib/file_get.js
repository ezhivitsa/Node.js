var fs = require('fs');

var app = require('./app.js');
var returnResponce = require('./responce');

var fileGet = {};

fileGet.get = function (request, responce) {
	var path = app.staticFilePath + request.url;
	fs.exists(path, function (exists) {
		if ( exists ) {
			fs.readFile(path, function (err, data) {
				returnResponce.sendData(responce, data, path);
			});
		}
		else {
			// file doesn't exist
			returnResponce.notFound(responce);
		}
	});
};

module.exports = fileGet;