var request = require("http");
var port = 1337;
var s = http.createServer();
s.on('request', function(request, response) {

request({
  url: "some url ",
  method: "POST",
  
  }
}, 
function(error, response, body) {
  console.log(body);