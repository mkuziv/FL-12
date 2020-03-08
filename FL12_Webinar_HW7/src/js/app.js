/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import '../scss/style.scss';
import './func.js'


const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const btnReset = document.querySelector('#btn-reset');
let playerChoice = null;
let computerChoice = null;
let pScore = 0;
let cScore = 0;
const winner = document.querySelector(".winner");
const result = document.querySelector('.result');
btnRock.addEventListener('click', function(){
  playerChoice = 'rock';
  computerChoice = getComputerChoice()
  compareHands(playerChoice, computerChoice);
});

btnPaper.addEventListener('click', function(){
  playerChoice = 'paper';
  computerChoice = getComputerChoice()
  compareHands(playerChoice, computerChoice);
});

btnScissors.addEventListener('click', function(){
  playerChoice = 'scissors';
  computerChoice = getComputerChoice()
  compareHands(playerChoice, computerChoice);
});
btnReset.addEventListener('click', function(){
  pScore = 0;
  cScore = 0;
  winner.textContent = '';
  result.textContent = '';
});

const getComputerChoice = () => {
  let randomNum = Math.random();
  if (randomNum < 0.34) {
    return "rock";
  } else if (randomNum <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

const compareHands = (playerChoice, computerChoice) => {
  if (pScore === 3 || cScore === 3) {    
    result.textContent = `Score: Player ${pScore} Computer ${cScore}`;
    if(pScore > cScore ){
      alert('Player won');
    } else {
      alert('Computer won');
    }
    
    return
  }
  
  //Checking for a tie
  if (playerChoice === computerChoice) {
    winner.textContent = `Round   ${playerChoice} vs. ${computerChoice}, It's draw! `;
    console.log("draw")
    return;
  }
  //Check for Rock
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      winner.textContent = `Round   ${playerChoice} vs. ${computerChoice},Player Wins`;
      pScore++;
      
      return;
    } else {
      winner.textContent = `Round   ${playerChoice} vs. ${computerChoice},Computer Wins`;
      cScore++;
      
      return;
    }
  }
  //Check for Paper
  if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      winner.textContent = `Round   ${playerChoice} vs. ${computerChoice},Computer Wins`;
      cScore++;
      
      return;
    } else {
      winner.textContent = `Round   ${playerChoice} vs. ${computerChoice},Player Wins`;
      pScore++;
      
      return;
    }
  }
  //Check for Scissors
  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      winner.textContent = `Round   ${playerChoice} vs. ${computerChoice}, Computer Wins`;
      cScore++;
      
      return;
    } else {
      winner.textContent = `Round   ${playerChoice} vs. ${computerChoice}, Player Wins`;
      pScore++;
      
      return;
    }
  }
};