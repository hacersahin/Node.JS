var mysql = require('mysql');

var con = mysql.createConnection( //veritabanına giriş kimliği bu bilgilerle sağlanır
    {
        host: 'localhost',
        user: 'root',
        password: '',
    }
);

con.connect(function(err){
    if(err) throw err;
    console.log("Bağlandi!");
})