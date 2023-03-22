//1. Öğrencileri Listele

// 2. Öğrencilerden belli bir notun üzerinde olanları listele (Not env. Değişken olarak verilmeli)

// 3. Öğrencilerin not ortalamasını bul

// 4. Belirli bir öğrencinin bilgilerini göster (Öğrenci ismi "env. Değişken" olarak verilmeli

// B. Kullanıcı bu programı çalıştırırken önceden tanımlanmış olan "environment değeri" olarak kullancını adı vermeli. Eğer kullanıcı adı eşleşmiyorsa program girişin başarısız olduğunu söylemeli.

// C. Tüm süreçlerde doğabilecek error'lar uygun uyarılar tasarlanarak kullanıcıya bildirilmeli (console.error())

const ogrenciler = [
  { isim: "mert", not: 96 },
  { isim: "ayse", not: 100 },
  { isim: "ali", not: 65 },
  { isim: "zaynep", not: 84 },
  { isim: "deniz", not: 87 },
  { isim: "hakan", not: 72 },
];
const kullanicilar = [
  { kullanici_adi: "back-end" },
  { kullanici_adi: "testers" },
];

var not = process.env.NOT;
var ogr = process.env.OGR;
var user = process.env.USER;

var user_chek = false;

kullanicilar.map(function (kullanici) {
  if (kullanici.kullanici_adi == user) {
    user_chek = true;
  }
});

if (user_chek == true) {
    try{
        console.log("OGRENCI LISTESI");
        console.log("---------------------");
        ogrenciler.map(function(ogrenci, index){
            console.log((index+1)+". Isim: " + ogrenci.isim + " / Not: " + ogrenci.not);
        });
        
    
        console.log("---------------------");
        console.log(not +" PUANIN UZERINDEKI OGRENCILER");
        console.log("---------------------");
        var filtreliListe = ogrenciler.filter(function(ogrenci){
            return ogrenci.not >= not;
        });
        filtreliListe.map(function(ogrenci, index){
            console.log((index+1)+". Isim: " + ogrenci.isim + " / Not: " + ogrenci.not);
        });
    
        console.log("---------------------");
        console.log("TUM OGRENCILER ORTALAMASI");
        console.log("---------------------");
        var ortalama = ogrenciler.reduce(function(orta_top, ogrenci){
            return orta_top+(ogrenci.not/ogrenciler.length);
        }, 0);
        console.log("Tum ogrencilerin notlarinin ortalamasi: "+ ortalama.toFixed(2));
    
        console.log("---------------------");
        console.log("SECILEN "+ ogr + " ISIMLI OGRENCININ BILGILERI");
        console.log("---------------------");
        var secilmis = ogrenciler.filter(function(ogrenci){
            return ogrenci.isim == ogr;
        });
     
        console.log("İsim :" + secilmis[0].isim);
        console.log("Not: " + secilmis[0].not);
        console.log("---------------------");
    
    } catch {
        console.error("Bilinmeyen bir hata olustu.");
    }
    
    
    
    
    }else{
        console.error("Bu kullanici adi ile işlem yapamazsiniz.");
    }
    
// function ogrencileriListele(ogrenciler) {
//   for (let ogrenci of ogrenciler) {
//     console.log(ogrenci.isim + ": " + ogrenci.not);
//   }
// }

// ogrencileriListele(ogrenciler);
