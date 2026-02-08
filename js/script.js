'use strict'


let humanScore = 0;
let computerScore = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let randomNumber = generateRandomNumber();

    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let choice;

    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt('Rock, Paper or Scissors:').toLowerCase();
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    let round;
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const winWithRock = humanChoice === 'rock' && computerChoice === 'scissors';
    const winWithPaper = humanChoice === 'paper' && computerChoice === 'rock';
    const winWithScissors = humanChoice === 'scissors' && computerChoice == 'paper';

    if (humanChoice === computerChoice) {
        round = 'Tie';
    } else {
        const humanChoiceFormatted = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        const computerChoiceFormatted = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

        if (winWithRock || winWithPaper || winWithScissors) {
            round = `You win! ${ humanChoiceFormatted } beats ${ computerChoiceFormatted }`;
            humanScore++;
        } else {
            round = `You lose! ${ computerChoiceFormatted } beats ${ humanChoiceFormatted }`;
            computerScore++;
        }
    }

    return round;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const round = playRound(getHumanChoice(), getComputerChoice());
        console.log(round);
    }

    if (humanScore === computerScore) {
        console.log('==== Tie ====');
    } else if (humanScore > computerScore) {
        console.log('==== You win ====');
    } else {
        console.log('==== Computer win ====');
    }
}

playGame();
