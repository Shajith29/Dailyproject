const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');
const uResult  = document.getElementById('user-score')
const cResult = document.getElementById('computer-score');
const resetBtn = document.getElementById('reset')




let playerScore = 0;
let computerScore = 0;

function ComputerChoice(){

    const choices = ['Rock','Paper','Scissors'];

    return choices[Math.floor(Math.random() * choices.length)]

}


function playGame(user,computer){
    
    if(user === computer){
        return "It is a tie"
    }

    else if(user === 'Rock' && computer === 'Scissors' ||
            user === 'Paper' && computer === 'Rock'    ||
            user === 'Scissors' && computer === 'Paper')
            
            {
                playerScore++
                return `You win !!! <br> ${user} beats ${computer}`
            }

    
    else{
        computerScore++
        return `Computer wins !!! <br> ${computer} beats ${user}`
    }
}


function reset(){
    playerScore = 0;
    computerScore = 0;

     result.innerText = '';
     cResult.innerText = 0;
     uResult.innerText = 0;


}


buttons.forEach((button) => {
    button.addEventListener('click',() => {
        const userInput = button.id;
        const computerInput = ComputerChoice();

        result.innerHTML = playGame(userInput,computerInput)
        uResult.innerText = playerScore;
        cResult.innerText = computerScore
    })
})

resetBtn.addEventListener('click',reset)


