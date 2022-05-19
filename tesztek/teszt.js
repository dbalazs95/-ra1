window.addEventListener("load", init);
function $(elem) {
  return document.querySelectorAll(elem);
}


const kerdesek = [];
var txt = ""
function init() {
  var valasztas = "";
  var gombok = document.getElementsByClassName('button');
  var gomb = Array.from(gombok)
  for (let index = 0; index < gomb.length; index++) {
      gomb[index].addEventListener("click", kattint);
  }

  //teszt(kerdesek)
}

function teszt(tomb){
    console.log(tomb);
    var txt = '<form id="teszt>'
    tomb.forEach(function (kerdes){
      console.log(kerdes)
      for (const key in kerdes) {
        if (key.includes("kerdes")) {
          txt += `<h3 id="kerdes">${kerdes[key]}</h3>`
        }else if (key.includes("valasz")) {
          txt += `<input id="valasz" type="radio" name="1" value="${key}">${kerdes[key]}<br>`
        }else if (key.includes("helyes")) {
          txt+= `<input id="valasz" type="radio" name="1" value="${key}">${kerdes[key]}<br>`
        }       
      }
      txt += '<input type="submit" value="Submit"></form>'
      $("article")[0].innerHTML = txt
    })
}

function kattint(event){

  if (event.target.nodeName === "BUTTON") {
    valasztas = event.target.id
  }
console.log(valasztas)

let kerdes = "tesztkerdesek.json"
  fetch(kerdes)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      data[valasztas].forEach((elem) => {
        kerdesek.push(elem);
      });
      console.log(kerdesek);
      txt += '<div><form id="teszt>'
    console
    kerdesek.forEach(function (kerdes){
      console.log(kerdes)
      for (const key in kerdes) {
        if (key.includes("kerdes")) {
          txt += `<h3 id="kerdes">${kerdes[key]}</h3>`
        }else if (key.includes("valasz")) {
          txt += `<input id="valasz" type="radio" name="1" value="${key}">${kerdes[key]}<br>`
        }
      }
      
    })
    txt += '<input type="submit" value="Submit"></form></div>'
      $("article")[0].innerHTML = txt
    })
    .catch((err) => {
      console.log(err);
    });

     
}
