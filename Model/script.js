const openBtn = document.getElementById('open-btn');
const closeBtn = document.querySelector('.close-btn');
const container = document.querySelector('.overlay-container');


openBtn.addEventListener('click',() => {
    container.classList.add('open-modal');
})

closeBtn.addEventListener('click',() => {
    container.classList.remove('open-modal')
})