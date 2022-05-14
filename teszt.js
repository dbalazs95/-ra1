window.addEventListener('load', init)
function $(elem) {
  return document.querySelectorAll(elem)
}

const alt_kerdesek = [];
const kozep_kerdesek = [];
const felnott_kerdesek = [];

function init() {
    beolvas()
    }

function beolvas(){
    fetch("tesztkerdesek.json")
        .then((res) => res.json())
        .then((data) => {
            data.alt_isk.forEach((elem) => {
                 alt_kerdesek.push(elem);
            data.kozep_isk.forEach((elem) => {
                kozep_kerdesek.push(elem);
            data.felnott.forEach((elem) => {
                felnott_kerdesek.push(elem);
            })
            })
             });
            console.log(alt_kerdesek)
            console.log(kozep_kerdesek)
            console.log(felnott_kerdesek)
        })
        .catch((err) => {
            console.log(err);
        })
}