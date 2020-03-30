import '../scss/style.scss';
import {ceil, reset, newGame, message, scoreX, scoreY} from './variable.js';

let pointX = 0;
let pointY = 0;
let player = "X";

let stepCount = 0;
let winCombinations = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9]
];

let dataX = [];
let dataO = [];

for (let i = 0; i < ceil.length; i++) {
  ceil[i].addEventListener("click", currentStep);
}

const startNewGame = () => {
  for (let i = 0; i < ceil.length; i++) {
    ceil[i].innerText = "";
  }

  dataO = [];
  dataX = [];
  let random = Math.random();
  random > 0.5 ? player = "O": player = "X" ;

  stepCount = 0;
  message.innerText = "Turn " + player;

  for (let i = 0; i < ceil.length; i++) {
    ceil[i].addEventListener("click", currentStep);
    ceil[i].classList.remove("x", "o");
  }
};

const changePlayer = () => {
  player === "X" ? (player = "O") : (player = "X");
}

const checkWin = (arr, number) => {
  for (let w = 0, wLen = winCombinations.length; w < wLen; w++) {
    let someWinArr = winCombinations[w],
      count = 0;

    if (someWinArr.indexOf(number) !== -1) {

      for (let k = 0, kLen = someWinArr.length; k < kLen; k++) {

        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++;

          if (count === 3) {
            return true;
          }
        }
      }
      count = 0;
    }
  }
}

function currentStep() {
  let num = +this.getAttribute("data-ceil");

  if (!this.textContent) {
    this.innerText = player;
    player === "X"
      ? dataX.push(num) && this.classList.add("x")
      : dataO.push(num) && this.classList.add("o");

    if ( (dataO.length > 2 || dataX.length > 2) &&
        (checkWin(dataO, num) || checkWin(dataX, num)) ) {

      for (let i = 0; i < ceil.length; i++) {
        ceil[i].removeEventListener("click", currentStep);
      }

      if(player === "X") {
        pointX++;
        scoreX.innerHTML = pointX;
      } else {
        pointY++;
        scoreY.innerHTML = pointY;
      }

      return (message.innerText = "Winner is " + player);
    }
    changePlayer();
    stepCount++;

    if (stepCount === 9) {
      message.innerText = "Drow";
      pointX++;

      scoreX.innerHTML = pointX;
      pointY++;
      scoreY.innerHTML = pointY;
    } else {
      message.innerText = "Turn " + player;
    }
  }
}


reset.addEventListener("click", function() {

  startNewGame();

  pointX = 0;
  pointY = 0;
  scoreX.innerHTML = "0";
  scoreY.innerHTML = "0";
});

newGame.addEventListener("click", startNewGame);