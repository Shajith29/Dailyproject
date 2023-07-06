const rollBtn = document.getElementById('roll-dice')
const diceEl = document.getElementById('dice')
const rollHistoryEl = document.querySelector('.roll-history')
const clearBtn = document.getElementById('clear')

let diceHistory  = []




function rollDice(){
    const DiceNum = Math.ceil(Math.random() * 6);
    diceEl.innerHTML = changeDiceFace(DiceNum)
    diceHistory.push(changeDiceFace(DiceNum))
    updateRollHistory()

    if(rollHistoryEl.children.length !== 0){
        clearBtn.classList.remove('hide')
    } 
}

function updateRollHistory(){
    rollHistoryEl.innerHTML = "";

    diceHistory.forEach((item,index) => {
        const itemEl = document.createElement('li');
        itemEl.innerHTML = `Roll ${index + 1}: <span>${diceHistory[index]}</span>`
        rollHistoryEl.appendChild(itemEl)
    })

}



function changeDiceFace(num){

    switch(num){

        case 1: 
            return '&#9856'
        case 2: 
            return '&#9857'
        case 3: 
            return '&#9858'
        case 4: 
            return '&#9859'
        case 5:
            return '&#9860'
        case 6: 
            return '&#9861'
    }
}


rollBtn.addEventListener('click',() => {

    diceEl.classList.add('dice-animate')

    setTimeout(() => {
        diceEl.classList.remove('dice-animate')
    },1000)

    rollDice()

})

clearBtn.addEventListener('click',() => {
    rollHistoryEl.innerHTML = '';
    diceHistory = []
    clearBtn.classList.add('hide')
})