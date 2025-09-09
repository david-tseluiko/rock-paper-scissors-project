let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie. You both chose ${humanChoice}`);
        humanScore++;
        computerScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(
            `You won. You have ${humanChoice} which beats ${computerChoice}`
        );
        humanScore++;
    } else {
        console.log(
            `You lost. You have ${humanChoice} which loses to ${computerChoice}`
        );
        computerScore++;
    }
}

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

    while (
        userChoice !== "rock" &&
        userChoice !== "paper" &&
        userChoice !== "scissors"
    ) {
        userChoice = prompt("Pick rock, paper, or scissors").toLowerCase();
    }

    return userChoice;
}
