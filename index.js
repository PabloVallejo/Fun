var http = require('http')
,	port = process.env.PORT || 5000;

// Server
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('hello, i know Heroku\n');

}).listen( port, function() {

	console.log("Listening on " + port);
});