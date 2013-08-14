var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var inputdata = fs.readFileSync("index.html");
app.get('/', function(request, response) {
var buf = new Buffer(inputdata);
var input = buf.toString();
  response.send(input);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
