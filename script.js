console.log("Rock Papers Scissors")

function computerPlay(){
    choices=["rock", "paper", "scissors"];
    return (choices[Math.floor (Math.random()*3)]);
}

function playRound (playerSelection, computerSelection){
    if (choices.includes (playerSelection.toLowerCase())){
        console.log(playerSelection, computerSelection);
        if (playerSelection===computerSelection){
            return `Its a draw!!   ${playerSelection} vs ${computerSelection}` ;
        }    
        else if ( playerSelection=='rock'&& computerSelection=='paper' || playerSelection=='paper'&& computerSelection=='scissors' || playerSelection=='scissors'&& computerSelection=='rock' ) {
            return `You lose!! ${computerSelection} beats ${playerSelection}`;
        }
        else{
            return `You win!! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else{
    console.log(playerSelection);
    return "Invalid input";
}
}

function game(){
    for (let i =0; i<5;i++){
        const playerSelection= (prompt("Rock, paper or scissors")).toLowerCase();
        const computerSelection= computerPlay();

   console.log(playRound(playerSelection, computerSelection));
}
}
game();