var http = require('http');
var port = process.env.PORT ||1337;

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var content = '<html><head><title>A sample page served in Node.js</title></head>';
  content = content + '<body>Some content</body></html>';
  res.end(content);
}).listen(port);

console.log('Server running on port http:127.0.0.1:1337 /')