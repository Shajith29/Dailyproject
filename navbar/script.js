const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

console.log(toggle)
toggle.addEventListener('click',() => {
    if(links.classList.contains('show')){
        links.classList.remove('show')
    }else{
        links.classList.add('show')
    }

    ///links.classList.toggle('show');
})