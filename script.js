
/* =================================
   ROCK PAPER SCISSORS GAME
================================= */

// 1. Store choices in an array
const choices = ["rock", "paper", "scissors"];

// 2. Create score object
const score = {
    player: 0,
    computer: 0
};

// 3. Get HTML elements
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

const turnMessage = document.getElementById("turn-message");
const resultMessage = document.getElementById("result-message");
const moves = document.getElementById("moves");

const choiceButtons = document.querySelectorAll(".choice");
const restartButton = document.getElementById("restart-button");


// 4. Computer randomly selects a choice
function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


// 5. Play the game
function playGame(playerChoice) {

    // Computer's turn
    const computerChoice = getComputerChoice();

    // Display both choices
    moves.textContent =
        `You: ${playerChoice} | Computer: ${computerChoice}`;

    // Show whose turn it is
    turnMessage.textContent = "Round completed!";

    // 6. Decide the winner using if/else
    if (playerChoice === computerChoice) {

        resultMessage.textContent = "It's a Draw! 🤝";

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {

        resultMessage.textContent = "You Win! 🎉";
        score.player++;

    } else {

        resultMessage.textContent = "Computer Wins! 🤖";
        score.computer++;

    }

    // 7. Update score on the page
    updateScore();

    // 8. Update turn message
    turnMessage.textContent = "Your turn! Choose again.";
}


// 9. Update score display
function updateScore() {

    playerScore.textContent = score.player;

    computerScore.textContent = score.computer;

}


// 10. Add click events to choices
choiceButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const playerChoice = button.dataset.choice;

        playGame(playerChoice);

    });

});


// 11. Restart the game
restartButton.addEventListener("click", () => {

    score.player = 0;
    score.computer = 0;

    updateScore();

    resultMessage.textContent = "Let's Play!";

    moves.textContent = "You: - | Computer: -";

    turnMessage.textContent = "Your turn! Choose your move.";

});
