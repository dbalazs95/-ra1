window.addEventListener('load', init)
function $(elem) {
  return document.querySelectorAll(elem)
}

const cikkek = [];

function init() {
    let cikk = "cikkek.json";
    fetch(cikk)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data.cikk)
             data.cikk.forEach((elem) => {
                 cikkek.push(elem);
             });
            //console.log(cikkek)
            feldolgoz(cikkek)
        })
        .catch((err) => {
            console.log(err);
        })

    
}
 function feldolgoz(cikkek) {
     console.log(cikkek)
     var txt = "";
        cikkek.forEach(function (cikk){
            console.log(cikk)
            txt += "<br>";
            for (const key in cikk) {
                if(key.includes("cim")){
                    txt += `<div><h1>${cikk[key]}</h1></div>`
                }else if (key.includes("szov")){
                    txt += `<div><p>${cikk[key]}</p></div>`
                }else if (key.includes("al")){
                    txt += `<div><h3>${cikk[key]}</h3></div>`
                }else if(key.includes("kep")){
                    txt += `<img src="${cikk[key]}" alt="">`

                }                
            }
        })
     $("article")[0].innerHTML = txt
 }

