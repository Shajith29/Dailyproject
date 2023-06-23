//date

const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

//nav-togggle

const navToggle = document.querySelector('.nav-toggle');
const linksContanier = document.querySelector('.links-container')
const links = document.querySelector('.links');


navToggle.addEventListener('click',() => {
    const containerHeight = linksContanier.getBoundingClientRect().height;
    let linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContanier.style.height = `${linksHeight}px`;
    }else{
        linksContanier.style.height = 0;
    }
})

//fixed nav

const navbar = document.querySelector('.navbar');
const toplink = document.querySelector('.top-link');

window.addEventListener("scroll", () => {
    const navHeight = navbar.getBoundingClientRect().height;
    let minHeight = window.pageYOffset;
    if(minHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav")
    }

    if(minHeight > 500){
        toplink.classList.add('show')
    }else{
        toplink.classList.remove('show')
    }
})


//smoot scroll

const scrollLinks = document.querySelectorAll('.scroll-links')


scrollLinks.forEach((link) => {
    link.addEventListener('click',(e) => {
        e.preventDefault()
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navbar = document.querySelector('.navbar');
        const navHeight = navbar.getBoundingClientRect().height;

        let position = element.offsetTop - navHeight;
        
        const linksContanierHeight = linksContanier.getBoundingClientRect().height;

        if(linksContanierHeight > 80){
            position += linksContanierHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContanier.style.height = 0;
    })
})