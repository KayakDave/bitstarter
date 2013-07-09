var express = require('express'),
    fs= require('fs'),
    buf=require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html');
  console.log(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);


});
