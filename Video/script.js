
const button = document.querySelector('.btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');



window.addEventListener('load',() => {
    preloader.classList.add("hide");
})

console.log(preloader);

button.addEventListener('click',() => {
    if(!button.classList.contains('slide')){
        button.classList.add('slide');
        video.pause()
    }else{
        button.classList.remove('slide');
        video.play();
    }
})