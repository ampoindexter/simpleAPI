'use strict';

var http = require('http');
var md5 = require('md5');
var math = require('./math');
var port = 3000;

var server = http.createServer(function(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');

  var params = req.url.split('/');
  var route = params[1];

  switch(route) {
    case '':
      res.write('<h1>Hello</h1>' + '\n');
      res.end();
      break;
    case 'gravatar':
      var array = params.slice(2);
      var hash = md5(array[0]);
      res.write('http://www.gravatar.com/avatar/' + hash + '\n');
      res.end();
      break;
    case 'math':
      switch(params[2]){
        case 'square':
          var num = params[3];
          res.write('The square of ' + num + ' is: ' + math.square(num).toString() + '\n');
          res.end();
          break;
        case 'add':
          var nums = params.slice(3);
          res.write('The sum is: ' + math.add(nums).toString() + '\n');
          res.end();
          break;
        case 'double':
          var num = params[3];
          res.write(num + ' doubled is: ' + math.double(num).toString() + '\n');
          res.end();
          break;
        case 'cube':
          var num = params[3];
          res.write('The cube of ' + num + ' is: ' + math.cube(num).toString() + '\n');
          res.end();
          break;
        case 'multiply':
          var nums = params.slice(3);
          res.write('The product is: ' + math.multiply(nums).toString() + '\n');
          res.end();
          break;
        }
        break;
    case 'sentence':
      var string = decodeURI(params.slice(2));
      var superCounter = function(string) {
        var words = string.split(" ").length;
        var spaces = words - 1;
        var letters = string.length - spaces;
        return {letters: letters, spaces: spaces, words: words};
      }
      res.write(JSON.stringify(superCounter(string)) + '\n');
      res.end();
      break;
    default:
      res.write("You are out of bounds!!!\n");
      res.end();
  }
});

server.listen(port);