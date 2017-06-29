var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/public'));

// var port = 80;
var port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log('Express server listening on port: ' + port);
});

app.setMaxListeners(20);

app.use(function(req, res, next) {
var index = path.join(__dirname, "/public", "index.html");
res.sendFile(index);
});
