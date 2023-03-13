var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    
    var user_id ="hacer";
    var pass = "123";
    var bilgi = url.parse(req.url, true).query;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if(bilgi.username==user_id && bilgi.password==pass){
        res.write("Gonderilen bilgiler dogru!");
    }else{
        res.write("Gonderilen bilgiler hatali!");
    }
 
   
    res.end();
  }).listen(8080);
