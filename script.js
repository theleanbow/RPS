//generate rock, paper, scissors randomly
function computerPlay() {
  choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//compare the win and loose and return the value
function playRound(playerSelect, computerSelection) {
  playerSelection = playerSelect.toLowerCase();
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    return "lose";
  } else {
    return "win";
  }
}
//display the result
function result(player, computer) {
  const scoreCards = document.createElement("div");
  scoreCards.innerText = `${player} vs ${computer}`;
  div.appendChild(scoreCards);
  if (player === 5) {
    const winner = document.createElement("div");
    winner.innerText = "GameOver. You Win!!!";
    scoreCards.appendChild(winner);
  } else if (computer === 5) {
    const winner = document.createElement("div");
    winner.innerText = "GameOver. You Lose!!!";
    scoreCards.appendChild(winner);
  }
}

let computer = 0;
let player = 0;
const container = document.querySelector(".container");
const score = document.querySelector(".score");
const div = document.createElement("div");
const scoreCards = document.createElement("div");
const buttons = document.querySelectorAll(".buttons");
const button = document.querySelector(".buttons");
buttons.forEach((button) => {
  const playerSelection = button.innerHTML;
  button.addEventListener("click", function returned() {
    const computerSelection = computerPlay();
    value = playRound(playerSelection, computerSelection);
    div.innerText = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`;
    if (player < 5 && computer < 5) {
      score.appendChild(div);
      if (value === "win") player++;
      else if (value === "lose") computer++;
    }
    result(player, computer);
  });
});
