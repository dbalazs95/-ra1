window.addEventListener("load", init);
function $(elem) {
  return document.querySelectorAll(elem);
}

var i = 0;
const kerdesek = [];
var txt = ""


function init() {
  var valasztas = "";
  var gombok = document.getElementsByClassName('button');
  var gomb = Array.from(gombok)
  for (let index = 0; index < gomb.length; index++) {
      gomb[index].addEventListener("click", kattint);
  }
}

function kattint(event){

  if (event.target.nodeName === "BUTTON") {
    valasztas = event.target.id
  }

  let kerdes = "tesztkerdesek.json"
    fetch(kerdes)
      .then((res) => res.json())
      .then((data) => {
        data[valasztas].forEach((elem) => {
          kerdesek.push(elem);
        });
        txt += '<div><form id="teszt>'
      kerdesek.forEach(function (kerdes){
        
        for (const key in kerdes) {
          if (key.includes("kerdes")) {
            txt += `<h3 id="kerdes">${kerdes[key]}</h3><br>`
            i++;
          }else if (key.includes("valasz")) {
            txt += `<input id="valasz" type="radio" name="${i}.kerdes" value="${key}">${kerdes[key]}<br>`
          }
        }
        
      })
      txt += '<button onclick="return kiertekel()">Értékelés</button></form></div>'
        $("article")[0].innerHTML = txt
      })
      .catch((err) => {
        console.log(err);
      });

      
}

function kiertekel() {
  var joValasz = 0;
for (var index = 0; index < kerdesek.length; index++) {
    var radios = document.getElementsByName(i+"kerdes");
    for (var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      console.log(radio)
      if (radio.value == kerdesek[index][4] && radio.checked) {
        joValasz ++;
      }
    }
  }
  alert("Jó válaszok: "+joValasz);
}
