// Score keeping

let humanScore = 0;
let computerScore = 0;

console.log(humanScore);
console.log(computerScore);

// Function to return rock, paper or scissors

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "rock"
    } else if (computerChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Function to get human choice

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice! (Rock, Paper, Scissors)");
    let humanChoiceLower= humanChoice.toLowerCase();
    return humanChoiceLower;
}

// Function to play game

}

// Function to play round

function playRound (humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You Win! Rock beats Scissors.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You Win! Paper beats Rock.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You Win! Scissors beat Paper.");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You Lose! Paper beats Rock"); 
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You Lose! Scissors beat Paper");  
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You Lose! Rock beats Scissors");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);