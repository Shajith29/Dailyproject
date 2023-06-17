const sidebarToggle = document.getElementById('sidebar-toggle');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.querySelector('.sidebar')

sidebarToggle.addEventListener('click',() => {
    sidebar.classList.toggle('show-links');

    if(sidebar.classList.contains('show-links')){ 
        sidebarToggle.style.right = `-4rem`;
     }
    
})

closeBtn.addEventListener('click',() => {
    sidebar.classList.remove('show-links')
    if(sidebar.classList !== "show-links"){
        sidebarToggle.style.right = '2rem';
     
    }
})
