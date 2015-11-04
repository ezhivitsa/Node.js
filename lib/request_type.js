var app = require('./app.js');

var requestType = {};

requestType.getType = function (request) {
	if ( request.method  === 'GET' ) {
		return app.requestType.getFile;
	}
};

module.exports = requestType;