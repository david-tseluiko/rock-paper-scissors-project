const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", (e) =>
    playRound(e.target.textContent, getComputerChoice())
);
paperButton.addEventListener("click", (e) =>
    playRound(e.target.textContent, getComputerChoice())
);
scissorsButton.addEventListener("click", (e) =>
    playRound(e.target.textContent, getComputerChoice())
);

let humanScore = 0;
let computerScore = 0;

playRound();

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie. You both chose ${humanChoice}`);
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
