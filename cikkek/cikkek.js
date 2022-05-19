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
     var txt = '<div id="cikk">';
        cikkek.forEach(function (cikk){
            console.log(cikk)
            for (const key in cikk) {
                if(key.includes("cim")){
                    txt += `<h1>${cikk[key]}</h1>`
                }else if (key.includes("szov")){
                    txt += `<p>${cikk[key]}</p>`
                }else if (key.includes("al")){
                    txt += `<h3>${cikk[key]}</h3>`
                }else if(key.includes("kep")){
                    txt += `<img src="${cikk[key]}" alt="">`

                }                
            }
        })
    txt += "</div>"
     $("article")[0].innerHTML = txt
 }

