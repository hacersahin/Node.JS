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
// birden fazla veriyi girmek için for döngüsü kullanıyoruz.
var kullanici_list = [ 
  {
    username: "kullanici3@gmail.com",
    password: "145",
  },
  {
    username: "kullanici4@gmail.com",
    password: "963",
  },
  {
    username: "kullanici5@gmail.com",
    password: "789",
  },
  {
    username: "kullanici6@gmail.com",
    password: "456",
  },
];

con.connect(function (err) {
  if (err) throw err;

  console.log("Bağlandı!");

  var sql = "INSERT INTO user (username, password) VALUES (?,?)";

  for (var i = 0; i < kullanici_list.length; i++) {

    var degerler = [kullanici_list[i].username, kullanici_list[i].password];

    con.query(sql, degerler, function (err, result) {
      if (err) throw err;
      console.log("Kayıt oluşturuldu!");
    });
  }
});
