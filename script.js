const pieces = ['Rock', 'Paper', 'Scissors'];

// randomly choose a piece for the computer to play
function computerPlay() {
    return pieces[Math.floor(Math.random() * pieces.length)];
}

// choose a piece based on player input
function playerPlay() {
    // ask player what piece to play
    let input = prompt("Rock, paper or scissors?").toLowerCase();
    
    // keep asking for input if player gives non-existent input
    let index = pieces.findIndex(piece => piece.toLowerCase() === input) 
    while (index < 0) {
        input = prompt("Rock, paper or scissors?").toLowerCase();
    }
    
    return pieces[index];
}

// evaluate round winner. Returns name of round winner ('player', 'computer')
function playRound(playerSelection, computerSelection) {
    // player draws
    if (playerSelection === computerSelection) {
        console.log(`Draw! Both players selected ${playerSelection}`);
        return "draw";
    }

    // player wins the round
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "player";
    }

    // player loses the round
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computer";
    }
}

function play() {
    // initialize player and cpu score
    let playerScore = 0;
    let computerScore = 0;

    // play for 5 rounds
    for (let i = 0; i < 5; i++) {
        // show current scores
        console.log(`Player: ${playerScore} CPU: ${computerScore}`)

        // let both players choose
        let computerSelection = computerPlay().toLowerCase();
        let playerSelection = playerPlay().toLowerCase();
        
        // determine round winner
        let winner = playRound(playerSelection, computerSelection);
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
    }

    // show final score
    console.log(`Player: ${playerScore} CPU: ${computerScore}`);

    // determine overall winner
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("Tie!")
    }
}

play();