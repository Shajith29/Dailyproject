const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next')

slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`;
})

let currentIndex = 0;


prev.addEventListener('click',() => {

    currentIndex--;
    carasouel()
})

next.addEventListener('click',() => {

    currentIndex ++;
    carasouel()

})


function carasouel(){

    if(currentIndex >= slides.length - 1){
        next.classList.add('hide');
    }else{
        next.classList.remove('hide')
    }


    if(currentIndex > 0){
        prev.classList.remove('hide');
    }else{
        prev.classList.add('hide')
    }


    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`
    })
}