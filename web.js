var express = require('express'),
    fs= require('fs'),
    buf=require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
response.send("Hello");
   var data= fs.readFileSync('./index.html');
   var buffer = buf.toString(data);
   console.log('string');
   console.log(data);
   response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);

  var data = fs.readFileSync('index.html');
  console.log(data.toString());

});
