//function for computer choice by Math.random in 3 even division
function getComputerChoice() {
    let rps = ["rock", "paper", "scissor"];
    let computerOutput = rps[Math.floor(Math.random()*rps.length)]
    return computerOutput;
}

//function for human choice using prompt
function getHumanChoice() {
    let humanOutput = '';
    let input = prompt('Rock, Paper or Scissor?');
    let inputToLowerCase = input.toLowerCase();
    if (inputToLowerCase == 'rock') {
        humanOutput = 'rock';
    } else if(inputToLowerCase == 'paper') {
        humanOutput = 'paper';
    } else if(inputToLowerCase == 'scissor') {
        humanOutput = 'scissor';
    } else {
        console.log("Type Error");
        getHumanChoice();
    }
    return humanOutput;
}

//Declaration of the players score variables
let humanScore = 0;
let computerScore = 0;

//Single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('Suprise, suprise!! It\'s even...');
    } else if(humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose...')
        computerScore += 1;
    } else if(humanChoice == 'rock' && computerChoice == 'scissor') {
        console.log('You win...')
        humanScore += 1;
    } else if(humanChoice == 'paper' && computerChoice == 'scissor') {
        console.log('You lose...')
        computerScore += 1;
    } else if(humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win...')
        humanScore += 1;
    } else if(humanChoice == 'scissor' && computerChoice == 'rock') {
        console.log('You lose...')
        computerScore += 1;
    } else if(humanChoice == 'scissor' && computerChoice == 'paper') {
        console.log('You win...')
        humanScore += 1;
    } else {
        console.log('System Error')
    }
    return humanChoice, computerChoice, humanScore, computerScore;
}

//Loop round
while(true) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if(humanScore == 5){
        console.log("Human winss the game!!!")
        break;
    } else if(computerScore == 5){
        console.log("Computer wins the game..!!")
        break;
    } else {
        console.log(humanChoice, computerChoice);
        console.log(humanScore, computerScore)
        playRound(computerChoice, humanChoice);
    }
}



playRound(humanChoice, computerChoice);
console.log(humanChoice, computerChoice);
console.log(humanScore, computerScore);


const body = document.querySelector("#body");

const container = document.createElement("container");
container.classList.add("boxes");

const rockScreen = document.createElement("rockScreen");
rockScreen.textContent = "Rock";
rockScreen.addEventListener("click", () => {
    humanChoice = "rock"
});

const scissorScreen = document.createElement("scissorScreen");
scissorScreen.textContent = "Scissor";
scissorScreen.addEventListener("click", () => {
    humanChoice = "scissor"
});

const paperScreen = document.createElement("paperScreen");
paperScreen.textContent = "Paper";
paperScreen.addEventListener("click", () => {
    humanChoice = "paper"
});

container.appendChild(rockScreen, scissorScreen, paperScreen);

const div = document.createElement("div");
const display = 
