const background = document.getElementById("background");
const password = document.getElementById('password');

password.addEventListener('input',(e) => {
    const input = e.target.value;
    const length = input.length;
    const blueValue = 20 - length
    background.style.filter =  `blur(${blueValue}px)`;
})