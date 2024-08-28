/* Rock Paper Scissors Game */

/* Initialize variables */
let humanScore = 0;
let computerScore = 0;

/* Find what button the user pressed */
let buttonContainer = document.querySelector("#buttonContainer");

buttonContainer.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound('rock');
            break;
        case 'paper':
            playRound('paper');
            break;
        case 'scissors':
            playRound('scissors');
            break;
        default:
            alert('Click a button to play.');
    }
});

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return 'rock';
    } else if (randomNumber >= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function displayScore() {
    let scoreDisplay = document.querySelector("#scoreDisplay");
    let winnerDisplay = document.querySelector("#winnerDisplay");

    if (humanScore <= 5 && computerScore <= 5){
        scoreDisplay.textContent = `${humanScore} to ${computerScore}`;
        scoreDisplay.parentElement.appendChild(scoreDisplay);
    } else {
        alert("Reload the page to play again.");
    }

    if (humanScore == 5 | computerScore == 5){        
        if (humanScore > computerScore) {

            winnerDisplay.textContent = 'Human player wins! Congrats!';
        } else {
            winnerDisplay.textContent = 'Sad trombone. Computer player wins.';
        }

    } else {
        winnerDisplay.textContent = '';
    }
}

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        alert("It's a tie!");
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
        } else {
            humanScore++;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++;
        } else {
            computerScore++;
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
        } else {
            humanScore++;
        }
    } else {
        console.log("Select 'rock', 'paper', or 'scissors' to continue");
    }

    displayScore();
}