const about = document.querySelector('.about');
const btns = document.querySelectorAll('.btn');
const articles = document.querySelectorAll('.content');


about.addEventListener('click',(e) => {
    const id = e.target.dataset.id;

    //remove active from every button

    if(id){
        btns.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        articles.forEach((article) => {
            article.classList.remove('active');
            const element = document.getElementById(id);
            element.classList.add('active')
        })
    }
})

//Method 2 

// btns.forEach((btn) => {
    
//     //remove the class of active from every button
//     btn.classList.remove('active');

//     btn.addEventListener('click',(e) => {
//         const id = e.currentTarget.dataset.id;
//         btns.forEach((item) => {
//             if(item === e.currentTarget){
//                 item.classList.add('active')
//             }else{
//                 item.classList.remove('active');
//             }
//         })

//         articles.forEach((article) => {
//             article.classList.remove('active');

//             const element = document.getElementById(id);
//             element.classList.add('active');
//         })

//     })

// })