const pieces = ['Rock', 'Paper', 'Scissors'];

// randomly choose a piece for the computer to play
function computerPlay() {
    return pieces[Math.floor(Math.random() * pieces.length)];
}

// process round after player picks a piece
// returns round summary with both player's picks
function processRound(playerSelection) {
    const computerSelection = computerPlay().toLowerCase(); // let cpu play

    // player draws
    if (playerSelection === computerSelection) {
        return `Draw! Both players selected ${playerSelection}`;
    }

    // player wins the round
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    // player loses the round
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}

// takes a string, returns it as a <p>
// used to append round results to its container
function stringToParagraph(string) {
    const paragraph = document.createElement('p');
    paragraph.textContent = string;
    return paragraph;
}

// changes the result text to the specified string
function updateScore(string) {
    results.textContent = string;
}

// handle game end
function finishGame() {
    // disable the buttons
    buttons.forEach(button => button.disabled = true);

    results.appendChild(stringToParagraph("GAME OVER!"));

    // declare overall winner
    if (playerScore > computerScore) {
        results.appendChild(stringToParagraph("You win!"));
    } else if (playerScore < computerScore) {
        results.appendChild(stringToParagraph("You lose!"));
    } else {
        results.appendChild("It's a draw!");
    }
}

// process round play
function playRound(playerSelection) {
    const roundResult = stringToParagraph(processRound(playerSelection));

    results.appendChild(roundResult);
    scoreboard.textContent = `YOU ${playerScore} - ${computerScore} CPU`;

    // end game if a player reaches 5 points
    if (playerScore === 5 || computerScore === 5) {
        finishGame();
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const scoreboard = document.querySelector('.scoreboard')
const results = document.querySelector('.results');

buttons.forEach(button => button.addEventListener('click', function() {
        const playerSelection = button.textContent.toLowerCase();
        playRound(playerSelection);
    })
);