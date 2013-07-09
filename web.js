var express = require('express'),
    fs= require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
response.send("Hello");
   fs.readFileSync('index.html', function(err,data) {
      if (err) throw err;
   var buffer = buf.toString(data);
   response.send(buffer));
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
