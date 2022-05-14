window.addEventListener("load", init);
function $(elem) {
  return document.querySelectorAll(elem);
}
var valasztas = ";"
const kerdesek = [];

function init() {
    valaszt();
  beolvas(kerdesek, valasztas);
}

function beolvas(tomb, kulcs) {
  fetch("tesztkerdesek.json")
    .then((res) => res.json())
    .then((data) => {
      data[kulcs].forEach((elem) => {
        tomb.push(elem);
      });
      console.log(tomb);
    })
    .catch((err) => {
      console.log(err);
    });
}
function valaszt(){
    var gombok = document.querySelectorAll('button');
    console.log(gombok)
    gombok.onclick = function() {
        gombok.forEach(function(gomb){
            if (gomb.getelementbyID.includes("alt")) {
                valasztas = "alt_isk"
                return valasztas
            }
            else if (gomb.getelementbyID.includes("kozep")) {
                valasztas = "kozep_isk"
                return valasztas
            }
            else if (gomb.getelementbyID.includes("felnott")) {
                valasztas = "felnott"
                return valasztas
            }
    })
}
}