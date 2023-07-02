const buttonsEl = document.querySelectorAll('button')
const inputEl = document.getElementById('result');

buttonsEl.forEach((button) => {

    button.addEventListener('click',(e) => {
        
        const buttonValue = e.currentTarget.innerText;
        
        if(buttonValue === "C"){
            clearResult()
        }

        else if(buttonValue === "="){
            calculateResult()
        }

        else{
            appendValue(buttonValue)
        }
    })
    
})


function appendValue(buttonValue){
    inputEl.value += buttonValue
}


function calculateResult(){
    inputEl.value = eval(inputEl.value)
}


function clearResult(){
    inputEl.value = ''
}