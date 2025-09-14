const results = document.querySelector(".results");
const score = document.querySelector(".score");
const playingButtons = document.querySelectorAll(".rock, .paper, .scissors");

let humanScore = 0;
let computerScore = 0;

playingButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        results.textContent = `It's a tie. You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        results.textContent = `You won. You have ${humanChoice} which beats ${computerChoice}`;
        humanScore++;
    } else {
        results.textContent = `You lost. You have ${humanChoice} which loses to ${computerChoice}`;
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
