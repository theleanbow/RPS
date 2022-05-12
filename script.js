//generate rock, paper, scissors randomly
function computerPlay() {
  choices = ["ROCK", "paper", "scissors"];
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
let computer = 0;
let player = 0;
const computerSelection = computerPlay();
const container = document.querySelector(".container");
const div = document.createElement("div");
const scoreCards = document.createElement("div");
const buttons = document.querySelectorAll(".buttons");
const button = document.querySelector(".buttons");
buttons.forEach((button) => {
  const playerSelection = button.innerHTML;
  button.addEventListener("click", function returned() {
    value = playRound(playerSelection, computerSelection);
    div.innerText = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`;
    if (player < 5 && computer < 5) {
      container.appendChild(div);
      if (value === "win") computer++;
      else if (value === "lose") player++;
    }
    const scoreCards = document.createElement("div");
    scoreCards.innerText = `${computer} vs ${player}`;
    div.appendChild(scoreCards);
    if (player === 5 || computer === 5) {
      const winner = document.createElement("div");
      winner.innerText = `GameOver`;
      scoreCards.appendChild(winner);
    }
  });
});
