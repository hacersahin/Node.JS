const yapilacaklar = [
  {
    baslik: "yapilacak 1",
    aciklama: "kedilerin kumunu temizle",
  },
  {
    baslik: "yapilacak 2",
    aciklama: "Derse git",
  },
  {
    baslik: "yapilacak 3",
    aciklama: "vakit kalırsa evi temizle",
  },
];
let yapilacakEleman = document.getElementById("yapilacakList");

function listYazdir() {
  var yapilacakSey = "";

  setTimeout(() => {
    yapilacaklar.forEach((yapilacak) => {
      yapilacakSey += `<li>
              
                  <b>${yapilacak.baslik}</b>
                  <p>${yapilacak.aciklama}</p>
              
            </li>`;
    });

    yapilacakEleman.innerHTML = yapilacakSey;
  }, 800);
}
function yeniYapilacak(is) {
    
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      yapilacaklar.push(is);
      const err = false;
      if (!err) {
        resolve(yapilacaklar);
      } else {
        reject("Bir hata oluştu...");
      }
    }, 1000);
  });
}

var yeniIs = {
  baslik: "yapilacak 4",
  aciklama: "Esinin Doğumgünü kutla...",
};

yeniYapilacak(yeniIs)
  .then((response) => {
    console.log("yeni liste", response);
    listYazdir();
  })
  .catch((hata) => {
    console.log(hata);
  });

listYazdir();

// promise ALL kullanımı

const p1 = Promise.resolve("p1");
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Sonuc");
  }, 2000);
});

const p3 = 123456;
const p4 = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json());
   //eğer bir veri sitesinden json veya xmal almak istersek bunu kullanıcaz


  Promise.all([p1,p2,p3,p4]).then(promises => {console.log ("Promise",promises)});
