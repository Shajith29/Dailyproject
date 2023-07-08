const bill = document.getElementById('bill')
const tip = document.getElementById('tip')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const noOfPeople = document.querySelector('.no-of-people')
const result = document.getElementById('result')

let people = 1;

function increment(){
    people++;
    calculate()
    noOfPeople.innerHTML = people
}

function decrement(){

    people--;
    if(people <= 1){
        people = 1
    }

    calculate()

    noOfPeople.innerHTML = people
}





function calculate(){
    const billAmount = Number(bill.value)
    const tipPercent = Number(tip.value)
    const tipAmount = billAmount * (tipPercent/100)
    const totalAmount = ((billAmount + tipAmount) / people).toFixed(2);
    result.innerText = `$${totalAmount}`
    
}

bill.addEventListener('keyup',calculate)
tip.addEventListener('keyup',calculate)
incrementBtn.addEventListener('click',increment)
decrementBtn.addEventListener('click',decrement)