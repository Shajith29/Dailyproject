const resultEl = document.getElementById('result')
const lengtEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const buttonEl = document.getElementById('button');
const clipboardEl = document.getElementById('clipboard')

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;

    if(!password){
        return;
    }

    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard')
})





const randomFun = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


buttonEl.addEventListener('click', () => {
    const length = lengtEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbols,length)
})
function generatePassword(lower,upper,number,symbol,length){
    let password = '';
    const typecount = lower + upper + number + symbol;
    const typeArr = [{lower} ,{upper} ,{number} , {symbol}].filter(item => Object.values(item)[0]);
    if(typecount === 0){
        return ''
    }

    for(let i = 0; i < length; i += typecount){
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            password += randomFun[funcName]()
        })
    }


    const finalpassword = password.slice(0,length);
    return finalpassword;
}


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}


function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)]
}