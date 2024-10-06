function getComputerChoice () {
    let computerChoice = "";
    let num = Math.floor(Math.random())+1;
    if (num>0 && num<=33) {
        console.log("Computer: Rock");
        computerChoice = "rock";
        return;

    } else if (num>33 && num<=67) {
        console.log("Computer: Paper");
        computerChoice = "paper";
        return;

    } else {
        console.log("Computer: Scissor");
        computerChoice = "scissor";
        return;
    }
}

function getHumanChoice() {
    let humanChoice = prompt(/"Let's play! Please enter: scissor or paper or rock"/i);
    if (humanChoice === null || NaN || !"scissor" || !"rock" || !"paper") {
        console.log("Please restart the game again...");
    } else {
        return humanChoice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Suprise, suprise!! Nobody wins, and nobody loses!!!")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Buhuuu, you loseee...")
        computerScore = computerScore + 1;
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("Horayyyyy, you win!!!!")
        humanScore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Horayyyyy, you win!!!!")
        humanScore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log("Buhuuu, you loseee...")
        computerScore = computerScore + 1;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log("Buhuuu, you loseee...")
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("Horayyyyy, you win!!!!")
        humanScore = humanScore + 1;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


for (let i = 0; i<=5; i++) {
     playRound(computerSelection, humanSelection);
     console.log(computerChoice, humanChoice)
     console.log(humanScore)
}
