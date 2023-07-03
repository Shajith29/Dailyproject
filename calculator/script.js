const buttonsEl = document.querySelectorAll('button')
const inputEl = document.getElementById('result');

buttonsEl.forEach((button) => {

    button.addEventListener('click',(e) => {
        
        const buttonValue = e.currentTarget.innerText;
        
        if(buttonValue === "AC"){
            AllclearResult()
        }

        else if(buttonValue === "="){
            calculateResult()
        }

        else if(buttonValue === "C"){
            clearResult()

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


function AllclearResult(){
    inputEl.value = ''
}

function clearResult(){
    let value = inputEl.value;
    value = value.substring(0,value.length - 1);
    inputEl.value = value;
}