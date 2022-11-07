const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = "./rsp.png";
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = "auto 200px";

const rspX = {
  scissors: "0",
  rock: "-220px",
  paper: "-440px",
};

const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

let computerChoice = "scissors";
const changeComputerHand = () => {
  if (computerChoice === "rock") {
    computerChoice = "scissors";
  } else if (computerChoice === "scissors") {
    computerChoice = "paper";
  } else if (computerChoice === "paper") {
    computerChoice = "rock";
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = `auto 200px`;
};

let intervalId = setInterval(changeComputerHand, 50);

let clickable = true;
let count = 0;
let my_score = 0;
let computer_score = 0;
const clickButton = () => {
  count += 1;
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;

    const myChoice =
      event.target.textContent === "바위"
        ? "rock"
        : event.target.textContent === "가위"
        ? "scissors"
        : "paper";
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;
    let message;
    if ([2, -1].includes(diff)) {
      my_score += 1;
      message = "승리";
    } else if ([-2, 1].includes(diff)) {
      computer_score += 1;
      message = "패배";
    } else {
      message = "무승부";
    }
    if (my_score === 3) {
      $score.textContent = `나의 승리 나: ${my_score} 컴퓨터: ${computer_score} `;
    } else if (computer_score === 3) {
      $score.textContent = `컴퓨터의 승리 나: ${my_score} 컴퓨터: ${computer_score} `;
    } else {
      $score.textContent = `${message} 나 : ${my_score} 컴퓨터: ${computer_score}`;
      setTimeout(() => {
        clickable = true;
        intervalId = setInterval(changeComputerHand, 50);
      }, 1000);
    }
  }
};

$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);
