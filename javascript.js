console.log("Hello World");



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



function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    function playRound(){
        let compHand = getComputerChoice();
        let playerHand = getPlayerChoice().toLowerCase();
        playerHand = playerHand[0].toUpperCase() + playerHand.slice(1);
        if (compHand == playerHand){
            console.log("It's a tie!");
        }
        else if ((compHand == "Rock" && playerHand == "Scissors") || (compHand == "Paper" && playerHand == "Rock") || (compHand == "Scissors" && playerHand == "Paper")){
            computerScore += 1;
            console.log(`Computer wins! ${compHand} beats ${playerHand}`);
        }
        else{
            playerScore += 1;
            console.log(`Player wins! ${playerHand} beats ${compHand}`);
        }
    
    }

    for(let i = 0; i< 5; i++){
        playRound();
        console.log(`Player Points: ${playerScore}, Computer Points: ${computerScore}`);
    }
    if (playerScore > computerScore){
        console.log("Player wins!");
    }
    else if (playerScore < computerScore){
        console.log("Computer wins!");
    }
    else{
        console.log("It's a tie...");
    }
}

playGame();


