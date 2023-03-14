var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function(req, res) {


    var sayfa = url.parse(req.url, true);
    var dosyaismi ="." + sayfa.pathname;

    fs.readFile(dosyaismi, function(err,data){

        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end("404 Dosyaniz bulunamadi");
        }

        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();

    });
    

}).listen(8080);