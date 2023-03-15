var mysql = require('mysql'); //bağlantı kimliği

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

    con.query("CREATE DATABASE nodedb", function(err,result){
        if(err) throw err;
        console.log("DB oluşturuldu!")
    })


})