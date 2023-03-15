var mysql = require("mysql"); //bağlantı kimliği

var con = mysql.createConnection(
  //veritabanına giriş kimliği bu bilgilerle sağlanır
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb", //bağlantı bu veritabanı için
  }
);


con.connect(function (err) {
  if (err) throw err;

  console.log("Bağlandı!");

  var sql = "DELETE FROM user WHERE  id_num= '6'";


    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Kayıt Silindi!", result);
    });

});
