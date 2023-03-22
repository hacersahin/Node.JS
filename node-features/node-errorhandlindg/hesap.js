const hesapForm = document.querySelector("#hesap_form");
const sonucDiv = document.querySelector("#sonuc");

hesapForm.addEventListener("submit", (event) => {

  event.preventDefault(); //varsayılanı yapma benim dediğimi yap!

  const bolenInput = document.querySelector("#bolen");
  const bolunenInput = document.querySelector("#bolunen");

  const bolen = parseFloat(bolenInput.value);
  const bolunen = pardeFloat(bolunenInput.value);

  fetch('/bol', {

    method: 'post',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({bolen,bolunen}),



  }).then((response) => response.json())
  .then((data) => {
    if(data.error){

        sonucDiv.innerText = `Error: ${ data.error}`;

    }else{
        sonucDiv.innerText = `Sonuc: ${ data.sonuc}`;
    }
  })
  .catch((error) => {
    sonucDiv.innerText = `Error: ${ data.message}`;
  });
});
