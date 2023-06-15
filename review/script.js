const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


const nameEl = document.getElementById('author');
const role = document.getElementById('role');
const info = document.getElementById('info');
const img = document.getElementById('person-img');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


const randomBtn = document.querySelector('.random-btn');
let currentIndex = 0;

window.addEventListener('DOMContentLoaded',() => {
    const item = reviews[currentIndex];

    img.src = item.img;
    nameEl.innerText = item.name;
    role.innerText = item.job;
    info.innerText = item.text;
})


function showPerson(person){
    const item = reviews[person];
    console.log(item)
    img.src = item.img;
    nameEl.innerText = item.name;
    role.innerText = item.job;
    info.innerText = item.text;
}

prevBtn.addEventListener('click',() => {
    currentIndex --;
    if(currentIndex < 0){
        currentIndex = reviews.length - 1;
    }

    showPerson(currentIndex);
})


nextBtn.addEventListener('click',() => {
    currentIndex++;
    if(currentIndex > reviews.length){
        currentIndex = 0;
    }

    showPerson(currentIndex)
})


randomBtn.addEventListener('click',() => {
    currentIndex = Math.floor(Math.random() * reviews.length);
    showPerson(currentIndex)
})