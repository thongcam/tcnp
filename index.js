const button = document.getElementById('button');
const input = document.getElementById('max-number');
const number = document.getElementById('big-number');

var clicked = false;
var maxNumber = 0;
var doRunNormal = false;
var doRunSlow = false;
var timesRun = 0;
var finNum = 0;
var delay = 200;
var prevNum = 0;

var runNormal = setInterval(() => {
  if (doRunNormal) {
    do {
      var num = Math.floor(Math.random() * maxNumber) + 1;
    } while (num === prevNum)
    prevNum = num;
    number.innerHTML = num.toString();
  }
},200,doRunNormal);

var runSlow = setInterval(() => {
  if (timesRun === 7 && doRunSlow) {
    do {
      var num = Math.floor(Math.random() * maxNumber) + 1;
    } while (num === prevNum)
    number.innerHTML = '>>>' + num.toString() + '<<<';
    delay = 200;
    doRunSlow = false;
    button.innerHTML = "Again";
    timesRun = 0;
    button.disabled = false;
  } else if (doRunSlow) {
    do {
      var num = Math.floor(Math.random() * maxNumber) + 1;
    } while (num === prevNum)
    prevNum = num;
    number.innerHTML = num.toString();
    timesRun += 1;
  }
},500,doRunSlow,finNum);

const clickOrEnter = () => {
  if (button.innerHTML === "START" && input.value > 0 && clicked === false) {
    clicked = true;
    maxNumber = Number(input.value);
    doRunNormal = true;
    button.innerHTML = "Stop";
  } else if (button.innerHTML === "Stop" && clicked) {
    doRunNormal = false;
    doRunSlow = true;
    button.disabled = true;
  } else if (button.innerHTML === "Again" && clicked) {
    button.innerHTML = "START";
    number.innerHTML = "";
    clicked = false;
  }
}

button.addEventListener("click", clickOrEnter);
document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName === "Enter") {
      clickOrEnter();
    }
})
