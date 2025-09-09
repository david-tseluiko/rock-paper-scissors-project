let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let userChoice;

    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt("Pick rock, paper, or scissors").toLowerCase();
    }

    return userChoice;
}