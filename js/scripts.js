// first attempt was using an array to store values, later rgb function worked better
// function getRandomInt(min, max) {
//   return Math.random() * (max - min) + min;
// }

// let randomValues = randomizer();

// function randomizer() {
//   let r = getRandomInt(0,255) 
//   let g = getRandomInt(0,255)
//   let b = getRandomInt(0,255)
//     return [r, g, b,]
// }

function rgb(){
  min = Math.ceil(0);
  max = Math.floor(255);
  let r = Math.random() * (max-min) + (min);
  let g = Math.random() * (max-min) + (min);
  let b = Math.random() * (max-min) + (min);
  return "rgb("+r+","+g+","+b+")";
}

let body = document.querySelector("body");
let img = document.querySelector("img");

body.onmouseover = function(){
  body.style.backgroundColor = rgb();
  body.style.color = rgb();
}

img.onclick = function(){
  window.scrollBy(0,500);
}