var events = require ('events');
var fs = require ('fs');

var dosyaOku = fs. createReadStream('a.html');

dosyaOku.on('open', function(){
     console.log("Dosya açık!")
});

