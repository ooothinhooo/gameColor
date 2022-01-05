var button = document.querySelector('.btn-button')
const select = document.querySelector('#select')
const select_div = document.querySelector('.select')
const abc = document.querySelector('.abc')

const arr = [18, 6, 8, 10, 12, 16];

function makeColor() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  ra = Math.random();
  x = ra;

  //return "rgb(" + r + ", " + g + ", " + b + ")"; 
  const color = "rgb(" + r + ", " + g + ", " + b + ")";
  const color2 = "rgb(" + r + ", " + g + ", " + b + "," + x + ")";

  loop = Math.floor(Math.random() * 11);
  random = Math.floor(Math.random() * 22);

  if (loop > 6) {
    loop = Math.floor(Math.random() * 11);
  }

  if (arr[loop] > random) {
    random = Math.floor(Math.random() * 22);
  }
  const htmlObj = document.getElementById('game');
  for (let i = 0; i < arr[loop]-1; i++) {

    htmlObj.innerHTML = htmlObj.innerHTML + `<div class="select" id="select" style="background:` + color + `;"></div>`;

    if (i == arr[loop]/2 -3) {
      const htmlObj = document.getElementById('game');
      htmlObj.innerHTML = htmlObj.innerHTML + `<div class="select abc " id="select abc" style="background:` + color2 + `;"  onclick=" gameWin(); "></div>`;

    }
  }

}

$(document).ready(function () {

  gameWin();
});

function gameWin() {
  $("#game").children().remove();
  makeColor();
}  
button.addEventListener('click', function () {
    makeColor();
    
  });