//belli bir koşulda eleman çekmemizi sağlar.

// const sayilar = [1, 2, 3, 4, 5];
// const ciftler = sayilar.filter(function (sayi) {
//   return sayi % 2 === 0;
// });

// console.log(ciftler);
/////////////////////////////////////////
//notu 90 dan büyük öğrencileri alma

const ogrenciler = [
  { isim: "mert", not: 96 },
  { isim: "ayse", not: 100 },
  { isim: "ali", not: 65 },
  { isim: "zaynep", not: 84 },
  { isim: "deniz", not: 87 },
  { isim: "hakan", not: 72 },
];

// const doksanuzeri = ogrenciler.filter(function ({not}) {
//return not >= 90;

// }, {});
//console.log(doksanuzeri);

//notu 70 dan büyük notortalması almma

const filitreliste = ogrenciler.filter((ogrenciler) => ogrenciler.not > 70);

const toplamNot = filitreliste.reduce(function (toplam, ogrenciler) {
  return toplam + ogrenciler.not;
},0);

const ortalama = toplamNot/filitreliste.length;
console.log(ortalama);



//başharf büyük yazma alıştırması
//.charAt()
//.toUpperCase()
//.slice()

const buyukharfListe = ogrenciler.map( function(ogrenci){

    return{
        isim: ogrenci.isim.charAt(0).toUpperCase()+ ogrenci.isim.slice(1),
        not: ogrenci.not

    }
});
console.log(buyukharfListe); 