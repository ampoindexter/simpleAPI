'use strict';

var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');


});

server.listen(port);