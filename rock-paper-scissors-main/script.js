const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const choice = options [ Math.floor(Math.random() * options.length )];
    return choice;
}


function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "tie"
    } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
       ){ 
        return "Player" 
    } 
    else {
        return "Computer"
    }
}
    
function playRound (playerChoice, computerChoice) {
    let result = checkWinner(playerChoice, computerChoice) 
        if (result === "tie") {
            return `Tie! ${playerChoice} and ${computerChoice} cancel each other!`
        } else if ( result === "Player"){
            return `You Win, ${playerChoice} beats ${computerChoice}!`
        } else if (result === "Computer") {
            return `You Lose, ${computerChoice} beats ${playerChoice} ...`
        }
}
 function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            return choiceInLower;
        }
    }
 }

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Its Time To Play The Game!")
    console.log("---------")
 for (let i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    if(checkWinner(playerChoice, computerChoice) == "Player"){
        playerScore++
    } 
    else if (checkWinner(playerChoice, computerChoice) == "Computer"){
        computerScore++
    }
 }
 console.log("-----------")
 console.log("Game Over")
 console.log("------------")
 if (computerScore > playerScore){
    console.log( "You Lose!");
 } else if (playerScore > computerScore){
    console.log("You Win!");
 } else {
    return "Tie!"
 }
    }
game()
