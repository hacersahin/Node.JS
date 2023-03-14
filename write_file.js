//dosya yazma


var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile("yazi.html", function (err, data) {

        if (err) throw err;
        res.write(data);

        fs.writeFile('yazi.html', '<p> bu degistirilmis  yazidir.</p>', function (err) {

            if (err) throw err;
            console.log('degistirildi');

        });
    
    
    
    })

    

  }).listen(8080);
