let rps = ["rock", "paper", "scissors"];

function computerPlay(){
    let randomNum = Math.floor(Math.random() * rps.length);
    return rps[randomNum];
}

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        return "Draw! Play another round!"
    }

    else {
        switch(playerSelection){
            case "rock":
                if (computerSelection == "paper"){ 
                    return "Player lose! Paper beats Rock!"
                }

                else {
                    return "Player win! Rock beats Scissors!"
                }
            
            case "paper":
                if (computerSelection == "scissors"){
                    return "Player lose! Scissors beats Paper!"
                }

                else{
                    return "Player win! Paper beats Rock!"
                }
    
            case "scissors":
                if (computerSelection == "rock"){
                    return "Player lose! Rock beats Scissors"
                }

                else{
                    return "Player win! Scissors beats Paper!"
                }
    
        }

    };

}

function cleanPlayerInput(){
    validInput = false;
    playerSelection = prompt("Enter your selection: rock, paper, or scissors.").toLowerCase();
    
    while (validInput == false){
        if (rps.includes(playerSelection)){
            validInput = true;
        }
        else{
            playerSelection = prompt("Invalid input. Please enter your selection: rock, paper, or scissors.").toLowerCase();
        }
    }

    return playerSelection
};

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let matchLimit = 5
    
    for (let i = 1; i <= matchLimit; i++){
        let computerSelection = computerPlay();
        

        let playerSelection = cleanPlayerInput();
        console.log(`Computer selected ${computerSelection}`);
        console.log(`Player selected ${playerSelection}`);
        
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")){
            playerScore++;
            console.log(`Player wins Round ${i}!`);
        }
        else if (result.includes("lose")){
            computerScore++;
            console.log(`Computer wins Round ${i}!`);
        }
        else{
            matchLimit++;
        }
        console.log(`Score after Round ${i}: Player ${playerScore} - Computer ${computerScore}`);

        if (playerScore == 3 || computerScore == 3){
            break;
        }
    }

    console.log(playerScore>computerScore ? "Player won the match!":"Computer won the match!");
}

game();