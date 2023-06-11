const openBtn = document.querySelector('.open-btn');
const closeBtn  = document.querySelector('.close-btn');
const navEls = document.querySelectorAll('.nav');

console.log(navEls)

openBtn.addEventListener('click',() => {
    navEls.forEach(nav => nav.classList.add('visible'));
})

closeBtn.addEventListener('click',() => {
    navEls.forEach(nav => nav.classList.remove('visible'));
})