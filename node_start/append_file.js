var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    

    fs.appendFile("yazi.html","<h1>Sonradan eklenen yazi</h1>",function (err) {
        if (err) throw err;
        console.log("eklendi");

        fs.readFile("yazi.html", function (err, data) {
          if (err) throw err;
          res.write(data);

          res.end();
        });
      });
    
  })
  .listen(8080);
