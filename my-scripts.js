function getComputerChoice () {
    const randomNumber = Math.random() * 3;
    return randomNumber <= 1 ? "rock" : randomNumber <=2 ? "paper" : "scissors";
}

// console.log (`Computer choice : ${getComputerChoice()} \n`);


function getHumanChoice() {
    let choice = prompt ("Enter one of the following : (rock, paper, scissors)");
    choice.toLowerCase();
    return choice;
}
// console.log (`Human choice : ${getHumanChoice()} \n`);

var humanScore = 0, computerScore = 0;

//to play the game
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (computerChoice === humanChoice) {
        console.log (`It's a tie!, both used ${computerChoice}`);
    } else if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            console.log (`You Win!, computer used ${computerChoice} and you used ${humanChoice}`);
            humanScore++;
        } else {
            console.log (`You Lose!, computer used ${computerChoice} and you used ${humanChoice}`);
            computerScore++;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            console.log (`You Win!, computer used ${computerChoice} and you used ${humanChoice}`);
            humanScore++;
        }
        else {
            console.log (`You Lose!, computer used ${computerChoice} and you used ${humanChoice}`);
            computerScore++;
        }
    } else {
        if (humanChoice === "rock") {
            console.log (`You Win!, computer used ${computerChoice} and you used ${humanChoice}`);
            humanScore++;
        }
        else {
            console.log (`You Lose!, computer used ${computerChoice} and you used ${humanChoice}`);
            computerScore++;
        }
    }
}

//function to play the rounds
function playGame() {
    for (let i=0; i<5; i++) {
        playRound();
    }
}

playGame();