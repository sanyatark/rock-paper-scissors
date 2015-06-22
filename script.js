var userChoice = prompt("Input Rock, paper or scissors!");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
     if (userChoice === comuterChoice) {
         return "The result is a tie!";
    }
    else if (userChoice === "rock") { 
        if (comuterChoice === "paper") {
             return "paper wins";
        }
        else  {
             return "rock wins";
        }
    }
    else if (userChoice === "paper") {
        if (comuterChoice === "rock") {
             return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (userChoice === "scissors") {
         if (comuterChoice === "rock") {
             return "rock wins";
         }
         else {
            return "scissors wins";
         }
    }
 }
