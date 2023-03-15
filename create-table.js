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

  var sql =
    "CREATE TABLE user (id_num INT NOT NULL AUTO_INCREMENT, username VARCHAR(255) NOT NULL, password VARCHAR(50) NOT NULL , PRIMARY KEY (id_num))";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tablo oluşturuldu!");
  });
});
