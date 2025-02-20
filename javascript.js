console.log("Hello World");


/*psuedocode logic 
The player will be prompted to play rock, paper or scissors.
The computer will randomly play rock, paper or scissors
The winner will be displayed*/


function computerChoice(){
    //Rock will be 1, paper will be 2, scissors will be 3.

    let choice = Math.floor(Math.random()*3 + 1); //+1 for 1-3 instead of 0-2

    return choice == 1 ? "Rock"
     : choice == 2 ? "Paper" 
     : "Scissors";

}

console.log(computerChoice());