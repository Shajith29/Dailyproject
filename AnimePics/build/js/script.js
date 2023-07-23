const url = "https://api.catboys.com/img";

const btn = document.getElementById("btn");
const imgContainer = document.getElementById("img-cont");
const animeImg = document.getElementById("img");
const animeName = document.getElementById("name");

const getImage = async () => {
    try {
        btn.disabled = true;
        btn.innerText = "Loading...";
        animeImg.src = "../build/img/loading.svg";
        animeName.innerText = "Upadating....";
        const data = await fetch(url).then((res) => res.json());
        console.log(data);
        btn.disabled = false;
        btn.innerText = "get anime";
        imgContainer.classList.remove("hidden");
        imgContainer.classList.add("flex");
        animeImg.src = data.url;
        animeName.innerText = data.artist;
    } catch (error) {
        console.log(error);
        btn.disabled = false;
        btn.innerText = "get anime";
        animeName.innerText = "An error has occured please try again later";
    }
};

btn.addEventListener("click", getImage);
