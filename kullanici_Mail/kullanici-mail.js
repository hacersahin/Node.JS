var http = require("http");
var url = require("url");
var fs = require("fs");
var nodemailer = require("nodemailer");
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb",
});
con.connect(function (err) {
  if (err) throw err;

  console.log("Bağlandı");
});

http
  .createServer(function (req, res) {
    fs.readFile("kayitform.html", function (err, data) {
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

      var Kayit = { username: bilgi.ad, password: bilgi.sifre };

     var KayitDurum= false;

      if(KayitDurum= true){


      var gonderen = nodemailer.createTransport({
        service: "outlook",
        auth: {
          user: "av.hacer@outlook.com",
          pass: "8991hacer.",
        },
      });

      var alici = {
        from: "av.hacer@outlook.com",
        to: bilgi.ad,
        subject: " kaydınız oluşturuluyor",
        text: "sifreniz: "+ bilgi.sifre,
      };

      gonderen.sendMail(alici, function (err, info) {
        if (err) throw err;
        console.log("mail gönderildi" + info);

             con.query("INSERT INTO user SET ?", Kayit, function (err, result) {
            if (err) throw err;
            console.log("Bilgiler Kaydedildi.", bilgi.ad, bilgi.sifre, result);
         });
      });

    }

        
    }
  })
  .listen(8080);
