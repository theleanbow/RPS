console.log("Welcome to Rock, Papers, Scissors Console-based Game!!!");

//generate rock, paper, scissors randomly
function computerPlay() {
  choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//compare the win and loose and return the value
function playRound(playerSelect, computerSelection) {
  playerSelection = playerSelect.toLowerCase();
  if (playerSelection === computerSelection) {
    // return `Its a draw!!   ${playerSelection} vs ${computerSelection}`;
    return "draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    // console.log(`You lose!! ${computerSelection} beats ${playerSelection}`);
    // return `You lose!! ${computerSelection} beats ${playerSelection}`;
    return "lose";
  } else {
    // console.log(`You win!! ${playerSelection} beats ${computerSelection}`);
    //   return `You win!! ${playerSelection} beats ${computerSelection}`;
    return "win";
  }
}
let computer = 0;
let player = 0;
const computerSelection = computerPlay();
const container = document.querySelector(".container");
const div = document.createElement("div");
const buttons = document.querySelectorAll(".buttons");
const button = document.querySelector(".buttons");
buttons.forEach((button) => {
  const playerSelection = button.innerHTML;
  button.addEventListener("click", function returned() {
    value = playRound(playerSelection, computerSelection);
    div.innerText = value;
    container.appendChild(div);
    if (value === "win") computer++;
    if (value === "lose") player++;
    const result = document.createElement("div");
    result.innerText = `${computer} vs ${player}`;
    div.appendChild(result);
    if (player === 5 || computer === 5) {
      const winner = document.createElement("div");
      winner.innerText = `GameOver`;
      result.appendChild(winner);
    }
  });
});
