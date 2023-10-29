function getComputerChoice (){
    let values = ['rock','paper','scissors'];
    return values;
}
//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection. toLowerCase();
    

    if(playerSelection === computerSelection){
        return  'Its a TIE! play again'
    }
    else if( (playerSelection === 'paper' && computerSelection === 'rock')){
        return `you win ${playerSelection .toUpperCase()} beats ${computerSelection .toUpperCase()}` 
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return `you win ${playerSelection .toUpperCase()} beats ${computerSelection .toUpperCase()}` 
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return `you win ${playerSelection .toUpperCase()} beats ${computerSelection .toUpperCase()}` 
    }
   else {
    return  `you loose ${computerSelection} beats ${playerSelection .toUpperCase()}! better luck next time.`
   }

 }


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 2; round++) {
        const playerSelection = prompt('Enter rock, paper, or scissors:'); // You can use any method to get user input
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result === 'player') {
            playerScore++;
            console.log(`You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
        } else if (result === 'computer') {
            computerScore++;
            console.log(`Computer wins! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
        } else {
            console.log('It\'s a TIE!');
        }
    }

    if (playerScore > computerScore) {
        console.log('You win the game!');
    } else if (playerScore < computerScore) {
        console.log('Computer wins the game!');
    } else {
        console.log('It\'s a TIE in the game!');
    }
}

// Call the game function to play the game
game();



