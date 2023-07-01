const api_key = "vq3AAGklwGDPaRnvV5p6exjmrSAkBwdymcg_MQviX3k"


const form = document.querySelector('.form');
const input = document.querySelector('.input');
const imageContainer = document.querySelector('.search-results');
const showMoreBtn = document.getElementById('show-more')

//user input

let page = 1;
let userInput = ""
let count = 0;



async function searchImage(){

     userInput = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${userInput}&client_id=${api_key}`
    const response = await fetch(url);
    const data = await response.json()

    if(page === 1){
        imageContainer.innerHTML = ""
    }

 
    

    const results = data.results

    results.map((result) => {
        const imageEl = document.createElement('div');
        imageEl.classList.add('search-result')

        const img = document.createElement('img');
        img.src = result.urls.small;
        img.alt = result.alt_description;

        const imgLink = document.createElement('a');
        imgLink.href = result.links.html
        imgLink.target = "_blank"
        imgLink.innerText = result.alt_description;

        imageEl.appendChild(img)
        imageEl.appendChild(imgLink);


        imageContainer.appendChild(imageEl)
    })

     if(page > 1){
        showMoreBtn.style.display = 'block'
    }
    
      
    page++;
      

}   

form.addEventListener('click',(e) => {
    e.preventDefault() 
    searchImage()
    clearPage()
})

showMoreBtn.addEventListener('click',() => {

    searchImage()
})


function clearPage(){
    imageContainer.innerHTML = ""
}

