console.log("Hello World");

let playerScore = 0;
let computerScore = 0;

/*psuedocode logic 
The player will be prompted to play rock, paper or scissors.
The computer will randomly play rock, paper or scissors
The winner will be displayed*/


function getComputerChoice(){
    //Rock will be 1, paper will be 2, scissors will be 3.

    let choice = Math.floor(Math.random()*3 + 1); //+1 for 1-3 instead of 0-2

    return choice == 1 ? "Rock"
     : choice == 2 ? "Paper" 
     : "Scissors";

}

function getPlayerChoice(){
    let hand  = prompt("Rock, Paper, Scissors? ", "Rock");
    return hand;
}


function updateScore(){
    
}


function playRound(){
    let compHand = getComputerChoice();
    let playerHand = getPlayerChoice().toLowerCase();
    playerHand = playerHand[0].toUpperCase() + playerHand.slice(1);
    if (compHand == playerHand){
        return "It's a tie!";
    }
    else if ((compHand == "Rock" && playerHand == "Scissors") || (compHand == "Paper" && playerHand == "Rock") || (compHand == "Scissors" && playerHand == "Paper")){
        computerScore += 1;
        return `Computer wins! ${compHand} beats ${playerHand}`;
    }
    else{
        return `Player wins! ${playerHand} beats ${compHand}`;
    }

}



console.log(playRound());