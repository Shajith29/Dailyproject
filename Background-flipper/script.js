const btn = document.getElementById("btn");

const colorCode = document.getElementById('color-code')

const hexColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',() => {
    let randomColor = getColor();
    colorCode.innerHTML = randomColor;
    document.body.style.backgroundColor = randomColor;

})


function getColor(){
    let color = '#';
    for(let i =0; i< 6;i ++){
        color += hexColor[randomNumber()];
    }

    return color;
}


function randomNumber(){
    return Math.floor(Math.random() * hexColor.length);
}




