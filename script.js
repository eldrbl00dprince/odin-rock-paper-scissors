function getComputerChoice() {
    let num = Math.random();
    if (num < 1/3) {
        return 'rock'
    }
    else if (num < 2/3) {
            return 'paper'
    }
    else return 'scissors'
}

// Track scores
let humanScore = 0;
let computerScore = 0;

// Emoji map
const emojiMap = {
  rock: '🪨',
  paper: '🧻',
  scissors: '✂️'
};

// Play a round
function playRound(humanChoice, computerChoice) {
    let roundMessage = '';
    // tie
    if (humanChoice == computerChoice) {
        roundMessage = "It's a tie..."
    }

    // human wins
    else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore += 1;
        roundMessage = 'You win!'
    }

    // computer wins
    else {
        computerScore += 1;
        roundMessage = 'You lose.'
    }
    
    function updateDisplay() {
        // Show plays
        humanPlayed.textContent = emojiMap[humanChoice];
        computerPlayed.textContent = emojiMap[computerChoice];
        // Show scores
        humanScoreDisplay.textContent = humanScore.toString();
        computerScoreDisplay.textContent = computerScore.toString();
        // Show message
        roundOutcome.textContent = roundMessage;
    }

    // check for game end
    if (humanScore + computerScore == 5) {
        if (humanScore > computerScore) {
            gameOutcome.textContent = 'You won the game!';
            body.classList.remove('wonGame', 'lostGame');
            requestAnimationFrame(() => {
                body.classList.add('wonGame');
            });

        }
        else {
            gameOutcome.textContent = 'You lost the game.';
            body.classList.remove('wonGame', 'lostGame');
            requestAnimationFrame(() => {
                body.classList.add('lostGame');
            });
        }
        updateDisplay();
        humanScore = 0;
        computerScore = 0;
    }
    else { 
        updateDisplay();
    };
}

const body = document.querySelector('body');
const container = document.querySelector('#container');
const display = container.querySelector('.display');
const roundOutcome = display.querySelector('.round-outcome'); 
const gameOutcome = display.querySelector('.game-outcome')
const humanScoreDisplay = display.querySelector('.human-score');
const computerScoreDisplay = display.querySelector('.computer-score');
const humanPlayed = display.querySelector('.human-played');
const computerPlayed = display.querySelector('.computer-played');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.getAttribute("data-choice"), getComputerChoice());
    });
});
