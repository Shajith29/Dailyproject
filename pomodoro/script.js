const timer = document.getElementById('timer')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset');
const repeatBtn = document.getElementById('repeat');

let timeLeft = 1500;
let interval


function startTime(){

    interval = setInterval(() => {
        timeLeft--;
        updateTimer()

        if(timeLeft === 0){
            clearInterval(interval)
            timer.classList.add('hidden');
            repeatBtn.classList.remove('hidden');
        }

    },1000)
    
}

function updateTimer(){

    const minutes = Math.floor(timeLeft / 60)
    const seconds = Math.floor(timeLeft % 60)

    let formatTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
    timer.innerHTML = formatTime
}

function stopTimer(){
    clearInterval(interval)
}

function resetTime(){
    clearInterval(interval)
    timeLeft = 1500
    updateTimer()
}

function repeatTime(){
    clearInterval(interval)
    timeLeft = 1500;
    timer.classList.remove('hidden')
    repeatBtn.classList.add('hidden')

    startTime()
}




startBtn.addEventListener('click',startTime)
stopBtn.addEventListener('click',stopTimer)
resetBtn.addEventListener('click',resetTime)
repeatBtn.addEventListener('click',repeatTime)