var http = require("http");
var fs = require("fs"); //başka bir dosya üzerinde işlem yapıcaz. fs.readFile()=> dosyayı oku

http
  .createServer(function (req, res) {
    fs.readFile("deneme.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });

      res.write(data);

      res.write(
        "<script> document.getElementById('yazi').innerHTML= 'Hacer';</script>"
      );

      return res.end();
    });
  })
  .listen(8080);
