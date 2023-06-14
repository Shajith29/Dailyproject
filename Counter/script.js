const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

let count = 0;


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count --;
            if(count < 0){
                value.style.color = `red`;
            }
        }

        else if(style.contains('increase')){
            count ++;
            if(count > 0){
                value.style.color = `green`;
            }
        }

        else{
            count  = 0;
        }
        
        count === 0 ? value.style.color = `#000`: '';
            

        value.innerText = count;
        

    })
})
