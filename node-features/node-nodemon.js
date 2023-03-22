const http = require("http");
const hostname = "127.0.0.1";
const port = 8080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain"); //plain= sade
  res.end("Hello Word");
});

server.listen(port, hostname, () => {
  console.log(`Server http://${hostname}:${port}/' da calisiyor`);
  
});

// http.createServer(function(req, res, ) {

//     res.writeHead(200, {'content-type': 'text/html'})
//     res.end('Hello world!');
// }).listen(8080);
