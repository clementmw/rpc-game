function getComputerChoice (){
    let values = ['rock','paper','scissors'];
    return values;
}
//console.log(getComputerChoice())

const buttons = document.querySelector('.container')

buttons.addEventListener('click',
function playRound(playerSelection, computerSelection){
    alert ('clicked')

//   playerSelection = playerSelection. toLowerCase();
        
    
//         if(playerSelection === computerSelection){
//             return  'Its a TIE! play again'
//         }
//         else if( (playerSelection === 'paper' && computerSelection === 'rock')){
//             return `you win ${playerSelection .toUpperCase()} beats ${computerSelection .toUpperCase()}` 
//         }
//         else if (playerSelection === 'scissors' && computerSelection === 'paper'){
//             return `you win ${playerSelection .toUpperCase()} beats ${computerSelection .toUpperCase()}` 
//         }
//         else if (playerSelection === 'rock' && computerSelection === 'scissors'){
//             return `you win ${playerSelection .toUpperCase()} beats ${computerSelection .toUpperCase()}` 
//         }
//        else {
//         return  `you loose ${computerSelection} beats ${playerSelection .toUpperCase()}! better luck next time.`
//        }
    
     

})









