var http = require("http");
var url = require("url");
var fs = require("fs");

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb",
});

http
  .createServer(function (req, res) {
    fs.readFile("kayit_form.html", function (err, data) {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        return res.end("404 Dosyaniz bulunamadi");
      }

      res.writeHead(200, { "content-type": "text/html" });

      res.write(data);
      return res.end();
    });

    var bilgi = url.parse(req.url, true).query;

    if (bilgi.ad && bilgi.sifre) {
        
      var yeniKayit = { username: bilgi.ad, password: bilgi.sifre };

      con.query("INSERT INTO user SET ?", yeniKayit, function (err, result) {
        if (err) throw err;
        console.log("Bilgiler Kaydedildi.", bilgi.ad, bilgi.sifre, result);
      });
    }
  })
  .listen(8080);
