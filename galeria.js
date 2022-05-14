window.addEventListener('load', init)
function $(elem) {
  return document.querySelectorAll(elem)
}

const kepek = [];

function init() {
    let galeria = "galeria.json";
    fetch(galeria)
        .then((res) => res.json())
        .then((data) => {
        
             data.galeria.forEach((elem) => {
                 kepek.push(elem);
             });
            
            feldolgoz(galeria)
        })
        .catch((err) => {
            console.log(err);
        }) 
}

function feldolgoz(kepek) {
    console.log(kepek)
    var txt = "";
       kepek.forEach(function (kepek){
           console.log(galeria)
           txt += "<br>";
           for (const key in galeria) {
               if(key.includes("Szerző")){
                   txt += `<div><h1>${galeria[key]}</h1></div>`
               }else if (key.includes("Fotós")){
                   txt += `<div><p>${galeria[key]}</p></div>`
               }else if (key.includes("Modell")){
                   txt += `<div><h3>${galeria[key]}</h3></div>`
               }else if(key.includes("main_kép1")){
                   txt += `<img src="${galeria[key]}" alt="">`

               }                
           }
       })
    $("article")[0].innerHTML = txt
}