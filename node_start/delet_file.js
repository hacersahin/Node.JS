var fs = require('fs');

fs.unlink('sil.js', function(err){
    if (err) throw err;
    console.log('dosya silindi');
});