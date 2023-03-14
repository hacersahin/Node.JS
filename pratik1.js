//kullanıcı bana bilgiyi gönderecek 
//bilgi parse edilip yeni dosyaya yazılacak

var http = require('http');
var url = require('url');
var fs = require('fs');




http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    var bilgi = url.parse(req.url, true).query;
    

    fs.appendFile("text.txt", 'Username: '+ bilgi.username + ' Sifre:' + bilgi.password,function (err) {
        if (err) throw err;
        console.log("eklendi");

        fs.readFile("text.txt", function (err, data) {
          if (err) throw err;
          res.write(data);

          res.end();
        });
      });
    
  })
  .listen(8080);
