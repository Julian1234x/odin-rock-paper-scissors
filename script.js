function computerPlay() {
    var choice = Math.floor(Math.random() * 3); //Random integer between 0 and 2
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    var playerWin = false;

    if (playerSelection === computerSelection) {
        return "Tie! You both chose " + playerSelection;
    }
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                playerWin = true;
            }
            break;
        case "Paper":
            if (computerSelection == "Rock") {
                playerWin = true;
            }
            break;
        default:
            if (computerSelection == "Paper") {
                playerWin = true;
            }
            break;
    }
    if (playerWin === true) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    var playerWins = 0;
    var computerWins = 0;
    var ties = 0;
    var validInputs = new Set(["Rock", "Paper", "Scissors"])
    
    for (let index = 0; index < 5; index++) {
        var userInput = new(String);
        InputNeedsValidation = true;
        while (InputNeedsValidation) {
            userInput = prompt("Enter your selection (Rock, Paper, Scissors):").toLowerCase();
            userInput = userInput[0].toUpperCase() + userInput.substring(1);
            if (validInputs.has(userInput)) {
                InputNeedsValidation = false;
            } else {
                alert("Your selection was invalid. Please renter your selection.");
            }
        }
        var outcome = playRound(userInput, computerPlay());
        alert(outcome);
        if (outcome.slice(0, 8) === "You win!") {
            playerWins++;
        } else if (outcome.slice(0, 8) === "You lose") {
            computerWins++;
        } else {
            ties++;
        }
    }
    
    console.log("Game over! Final score:");
    console.log("Player wins: " + playerWins);
    console.log("Computer wins: " + computerWins);
    console.log("Ties: " + ties);
    if (playerWins > computerWins) {
        console.log("~~~Congratulations! You won the tournament!~~~")
    }
}

game();