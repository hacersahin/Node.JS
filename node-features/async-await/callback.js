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

function yeniYapilacak(is, callback) {
  setTimeout(() => {
    yapilacaklar.push(is);//push eleman eklemek için kullanıyor.
    callback();
  }, 1000);
}

var yeniIs = {
  baslik: "yapilacak 4",
  aciklama: "Esinin Doğumgünü kutla...",
};

yeniYapilacak(yeniIs, listYazdir);

// yeniYapilacak(

//     {
//         baslik: "yapilacak 4", aciklama:"Esinin Doğumgünü kutla..."
//     }
// );

listYazdir();
