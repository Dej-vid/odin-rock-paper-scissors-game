// Function to return rock, paper or scissors

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        console.log("Rock");
    } else if (choice === 2) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

getComputerChoice();

// Function to get human choice

function getHumanChoice() {
    const validChoices = ["Rock", "Paper", "Scissors"];
    let humanChoice = prompt("Enter your choice! (Rock, Paper, Scissors)");

    if (!validChoices.includes(humanChoice)) {
        console.log("Please choose a valid option");
    } else 
    console.log(humanChoice);
}

getHumanChoice();

