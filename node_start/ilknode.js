var http = require("http");
var x = require("./ilkmodule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello Word!</h1> "); //içeriye gönderdiğimiz fonksiyon
    res.write("<p id='saat'></p>");
    
    setInterval(function () {
      res.write(
        "<script> document.getElementById('saat').innerHTML= '" +
          x.Zaman() +
          "'; </script>"
      );
    }, 1000);
  })
  .listen(8080); //8080 standart port
