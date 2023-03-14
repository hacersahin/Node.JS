//kullanıcıdan input alma ve bilgileri yeni dosyaya kaydetme örneği:

var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    

    fs.readFile("form.html", function (err, data) {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        return res.end("404 Dosyaniz bulunamadi");
      }

      res.writeHead(200, { "content-type": "text/html" });

      res.write(data);
      res.end();
    });

    

    var bilgi = url.parse(req.url, true).query;


    if (req.url.length > 1) {
      console.log(bilgi.name);
      console.log(bilgi.lastname);
      console.log(bilgi.yiyecek);

      fs.appendFile("formicerigi.txt","Ad:"+bilgi.name +"\n"+"Soyad:" + bilgi.lastname +"\n"+ "Fovari Yiyecek:" + bilgi.yiyecek+"\n\n", function(err,data){

          if (err) throw err;
          
          console.log("Bilgiler Kaydedildi.");
  
         return res.end();
  
         
  
      })
    }
    
  })
  .listen(8080);
