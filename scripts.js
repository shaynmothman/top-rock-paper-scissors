/* Rock Paper Scissors Game */

// Initialize variables for player selections
// Collect user input (string)
// Assign user input to Player 1 variable
// Randomly select Player 2 value
// Compare values
// If Player 1 === rock
    // If Player 2 === paper
        // Return 'Player 2 wins'
    // Else if Player 2 === scissors
        // Return 'Player 1 wins'
    // Else
        // Return "It's a tie"
// Else if Player 1 === paper
    // If Player 2 === rock
        // Return 'Player 1 wins'
    // Else if Player 2 === scissors
        // Return 'Player 2 wins'
    // Else 
        // Return "it's a tie"
// Else if Player 1 === scissors
    // If Player 2 === rock
        // Return 'Player 2 wins'
    // Else if Player 2 === paper
        // Return 'Player 1 wins
    // Else
        // Return "It's a tie"
// Else 
    // Return 'Select rock, paper, or scissors'


let humanScore = 0;
let computerScore = 0;


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

function getHumanChoice() {
    return prompt("Select 'rock', 'paper', or 'scissors' to continue",'').toLowerCase();
}

function displayScore() {
    console.log("Score is " + humanScore + " to " + computerScore);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        //console.log("It's a tie");
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            //console.log("Computer wins");
        } else {
            humanScore++;
            //console.log("You win");
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++;
            //console.log("You win");
        } else {
            computerScore++;
            //console.log("Computer wins");
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            //console.log("Computer wins");
        } else {
            humanScore++;
            //console.log("You win");
        }
    } else {
        console.log("Select 'rock', 'paper', or 'scissors' to continue");
    }

    displayScore();
}

function playGame() {
    for (i = 0; i < 6; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins");
    } else {
        console.log("It's a tie");
    }
}