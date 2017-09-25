var http = require('http');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('hello world');
  response.end();

}

// TODO: change to actual server
http.createServer(onRequest).listen(8000);
