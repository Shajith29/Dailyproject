const title = document.querySelector('.title h1');
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline h4');
console.log(deadline)



function getRemainingTime(){
    const reopenDate = new Date(2023,6,24,8,0,0).getTime();

    const currentTime = new Date().getTime();
    
    const diff = reopenDate - currentTime;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    const days = Math.floor(diff / oneDay);
    const hours = Math.floor(( diff % oneDay ) / oneHour);
    const minute = Math.floor((diff % oneHour) / oneMinute);
    const seconds = Math.floor((diff % oneMinute) / 1000)

    const values = [days,hours,minute,seconds];

    items.forEach((item,index) => {
        item.innerHTML = values[index];
    })

    if(diff < 0){
        clearInterval(interval);
        deadline.classList.add('over');
        title.innerHTML = "Holidays are Over College has Reopened"
        
    }
    
}

const interval = setInterval(getRemainingTime,1000)
getRemainingTime();