const btns = document.querySelectorAll('.btn');
console.log(btns)

btns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text')

        btns.forEach((item) => {
            if(item.parentElement.parentElement !== question){
                item.parentElement.parentElement.classList.remove('show-text');
            }
        })
    })
})


// const questions = document.querySelectorAll('.question');

// questions.forEach((question) => {
//     const btn = question.querySelector('.btn');
//     btn.addEventListener('click',() => {
//         question.classList.toggle('show-text');
//         questions.forEach((item) => {
//             if(item !== question){
//                 item.classList.remove('show-text');
//             }
//         })
//     })
// })