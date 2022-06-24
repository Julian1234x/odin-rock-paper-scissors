var playerWins = 0;
var computerWins = 0;
var ties = 0;
var choicesNode = document.querySelector('.choices')
var messageNode = document.createElement('div')

choicesNode.appendChild(messageNode);

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    messageNode.textContent = ''
}

function updateScores() {
    document.querySelector('#player-wins').textContent = playerWins
    document.querySelector('#computer-wins').textContent = computerWins
    document.querySelector('#ties').textContent = ties
}


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
        ties++;
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
        playerWins++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerWins++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

const choiceButtons = Array.from(document.querySelectorAll('.choice'))
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        var roundResult = playRound(button.textContent,computerPlay());
        messageNode.textContent = roundResult
        updateScores()
    })
})

const resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', () => {
    resetGame()
    updateScores()
})