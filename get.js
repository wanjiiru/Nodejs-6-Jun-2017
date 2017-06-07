var http = require('http');
 
var port = 1337;
 
var s = http.createServer();
s.on('request', function(request, response) {
    response.writeHead(200);
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);
    response.write("hello, learning nodejs http module");
    response.end();
});
 
s.listen(port);
console.log('Go to http://127.0.0.1:' + port);
