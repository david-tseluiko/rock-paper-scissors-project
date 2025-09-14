const results = document.querySelector(".results");
const score = document.querySelector(".score");
const combination = document.querySelector(".combination");
const playingButtons = document.querySelectorAll(".rock, .paper, .scissors");

let humanScore = 0;
let computerScore = 0;

playingButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
        displayWinner();
    });
});

function displayWinner() {
    if (humanScore === 5) {
        results.textContent = `You won!`;

        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        results.textContent = `You lost!`;

        humanScore = 0;
        computerScore = 0;
    }
}

function capitalize(string)
{
    return String(string[0]).toUpperCase() + String(string).slice(1);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        results.textContent = `It's a tie`;
        combination.textContent = `${capitalize(humanChoice)} ties ${computerChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        results.textContent = `You won`;
        combination.textContent = `${capitalize(humanChoice)} beats ${computerChoice}`;
        humanScore++;
    } else {
        results.textContent = `You lost`;
        combination.textContent = `${capitalize(humanChoice)} is beaten by ${computerChoice}`;
        computerScore++;
    }

    score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
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
