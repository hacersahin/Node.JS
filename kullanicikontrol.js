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

http.createServer(function (req, res) {

  fs.readFile("girisform.html", function (err, data) {
    if (err) {
      res.writeHead(404, { "content-type": "text/html" });
      return res.end("404 Dosyaniz bulunamadi");
    }

    res.writeHead(200, { "content-type": "text/html" });

    res.write(data);

    return res.end();
  });

  var bilgi = url.parse(req.url, true).query;

  con.connect(function (err) {

    if (err) throw err;
    
    console.log("Bağlandı");

    var sorgu = "SELECT * FROM user";

    con.query(sorgu, function (err, result) {
      if (err) throw err;
      console.log("Gelen------");
      console.log(result);
      console.log("Eldeki------");
      console.log(bilgi);
    });
  });
}).listen(8080);


