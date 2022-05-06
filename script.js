console.log("Welcome to Rock, Papers, Scissors Console-based Game!!!")

//generate rock, paper, scissors randomly
function computerPlay(){
    choices=["rock", "paper", "scissors"];
    return (choices[Math.floor (Math.random()*3)]);
}

//compare the win and loose and return the value
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

//main game
function game(){
    for (let i =0; i<5;i++){
        const playerSelection= (prompt("Rock, paper or scissors")).toLowerCase();
        const computerSelection= computerPlay();

   console.log(playRound(playerSelection, computerSelection));
}
}

//function call 
game();