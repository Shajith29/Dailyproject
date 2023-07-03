const timerEl = document.getElementById('timer')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const reset = document.getElementById('reset');

let start = 0;
let elapsedTime = 0;
let timeInterval



function formatTime(time){
    
    const milliseconds = Math.floor((time % 1000) / 10)
    const seconds = Math.floor((time % (1000 * 60))/1000)
    const minutes = Math.floor((time % (1000 * 60 * 60))/ (1000* 60));
    const hours = Math.floor((time / (1000 * 60 * 60)))


    return(
        (hours ? (hours > 9 ? hours : "0" + hours): "00") + ":" +
        (minutes ? (minutes > 9 ? minutes :"0"+ minutes): "00") + ":" +
        (seconds ? (seconds > 9 ? seconds: "0" + seconds): "00") + ":" +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds))
}



function startTime(){
    start = Date.now() - elapsedTime;

    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - start;
        timerEl.textContent = formatTime(elapsedTime);
    },10)

    startBtn.disabled = true;
    stopBtn.disabled = false;

}



function stopTime(){

    clearInterval(timeInterval)

    startBtn.innerText = 'resume'

    startBtn.disabled = false;
    stopBtn.disabled = true;

}

function resetTime(){
    clearInterval(timeInterval)
    
    elapsedTime = 0;
    startBtn.disabled = false
    startBtn.innerText = 'start'
    stopBtn.disabled = true
    timerEl.innerText = "00:00:00:00"
}

startBtn.addEventListener('click',startTime);
stopBtn.addEventListener('click',stopTime)
reset.addEventListener('click',resetTime)