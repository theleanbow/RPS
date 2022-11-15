let playerWin = 0;
let computerWin = 0;
let count = 0;
function getComputerChoice() {
  arr = ["rock", "paper", "scissors"];
  let val = Math.floor(Math.random() * 3);
  return arr[val];
}
function getPlayerSelection() {
  return (playerSelection = prompt("Enter your choice:").toLowerCase());
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  if (playerSelection === computerSelection)
    console.log(`${playerSelection} vs ${computerSelection} It's a draw`);
  else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    playerWin++;
  } else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    computerWin++;
  } else {
    alert("Invalid Input, try again");
    count--;
  }
}

function game() {
  for (count = 0; count < 5; count++)
    playRound(getPlayerSelection(), getComputerChoice());
  if (playerWin > computerWin)
    console.log(`You: ${playerWin} Computer:  ${computerWin}\nYou won`);
  else if (playerWin < computerWin)
    console.log(`You: ${playerWin} Computer:  ${computerWin}\nYou lost`);
  else console.log(`You: ${playerWin} Computer:  ${computerWin}\nIt's a draw`);
}
game();
