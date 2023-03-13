var fs = require('fs');

fs.rename('deneme.html','Deneme2.html', function(err){

if (err) throw err;
console.log('dosya ismi degistirildi');


});
