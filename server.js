var express = require("express");//,
	//passport = require("passport");

var	app = express();
var server = require('http').Server(app);
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/mentor', function(req, res) {
	res.sendFile(__dirname + '/public/index-mentor.html');
});

app.get('/student', function(req, res) {
	res.sendFile(__dirname + '/public/index-student.html');
});

var port = process.env.PORT || 8080;
server.listen(port,
	function(){
		console.log("Node app is running at localhost: "+port);
	});