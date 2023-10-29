
const values = ['rock','paper','scissors'];
const buttons = document.querySelectorAll('.buttons')

function getComputerChoice (){
    return values;
}

let playerScore = 0;
let computerScore = 0;



function playRound(playerSelection, computerSelection){
   computerSelection === getComputerChoice()


        if(playerSelection === computerSelection){
            console.log( 'Its a TIE! play again')
        }
        else if( (playerSelection === 'paper' && computerSelection === 'rock')){
           console.log(`you win ${playerSelection } beats ${computerSelection }`) 
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            console.log (`you win ${playerSelection } beats ${computerSelection}` )
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            console.log (`you win ${playerSelection } beats ${computerSelection }` )
        }
       else {
        console.log ( `you loose ${computerSelection} beats ${playerSelection}! better luck next time.`)
       }

       getResults()
    
}

function getResults (){
  let results = document.querySelector('#displayResults') 
    results.innerHTML = ''
    let resultdiv = document.createElement('div')
    resultdiv.classList.add('game')
    results.appendChild(resultdiv); 
        
}

// function updateScore() {
//     const scoreDisplay = document.querySelector('#score');
//     scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
// }
       
buttons.forEach(button => {
    button.addEventListener('click', function (event) {
     event.preventDefault()
        playRound(button.dataset.selection);
    });
});

// Initialize the game
getResults();



// function updateScore() {
//     const scoreDisplay = document.querySelector('#score');
//     scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
// }

// function announceWinner() {
//     if (playerScore === 5) {
//         displayResult('Congratulations! You are the winner!');
//     } else if (computerScore === 5) {
//         displayResult('Computer wins. Better luck next time.');
//     }
// }












