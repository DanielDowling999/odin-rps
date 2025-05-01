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



function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    const gameButtons = document.querySelectorAll(".rps");
    const result = document.querySelector("#result");
    const cScore = document.querySelector("#cScore");
    const pScore = document.querySelector("#pScore");
    const restart = document.querySelector(".restart")
    const victory = document.querySelector("#victory")
    const msg = document.querySelector("#msg");
    
    gameButtons.forEach(button => {
        button.addEventListener('click', () => {
            playRound(button.id);
        });
    });

    restart.addEventListener('click', () => {
        restartGame();
    });

    function playRound(playerHand){
        let compHand = getComputerChoice();
        if (compHand == playerHand){
            result.textContent = "It's a Tie!";
            console.log("It's a Tie!");
        }
        else if ((compHand == "Rock" && playerHand == "Scissors") || (compHand == "Paper" && playerHand == "Rock") || (compHand == "Scissors" && playerHand == "Paper")){
            computerScore += 1;
            result.textContent = `Computer wins! ${compHand} beats ${playerHand}!`;
            cScore.textContent = `${computerScore}`;
            console.log(`Computer wins! ${compHand} beats ${playerHand}`);
        }
        else{
            playerScore += 1;
            result.textContent = `Player wins! ${playerHand} beats ${compHand}!`;
            pScore.textContent = `${playerScore}`;
            console.log(`Player wins! ${playerHand} beats ${compHand}`);
        }
    function gameOver(winner){
        msg.textContent = `The ${winner} wins!`;
        victory.style.visibility = 'visible';
    }

    if (playerScore >= 5){
        gameOver("Player");
    }
    else if (computerScore >= 5){
        gameOver("Computer");
    }
    
    }
    function restartGame(){
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = 0;
        cScore.textContent = 0;
        result.textContent = "";
        victory.style.visibility = 'hidden';
    }
}




document.addEventListener("DOMContentLoaded", playGame);


