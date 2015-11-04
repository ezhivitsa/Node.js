var mime = require('mime'),
	path = require('path');

var sendResponce = {};

sendResponce.notFound = function (responce) {
	responce.writeHead(404, {
		'Content-Type': 'text/plain'
	});
	responce.write('Error 404: resource not found.');
	responce.end();
};

sendResponce.sendData = function (responce, data, filePath) {
	responce.writeHead(200, {
		'Content-Type': mime.lookup(path.basename(filePath))
	});
	responce.end(data);
};

module.exports = sendResponce;