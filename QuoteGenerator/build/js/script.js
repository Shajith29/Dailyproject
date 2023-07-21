const url = "https://api.quotable.io/random";

const btn = document.getElementById("btn");
const quoteText = document.getElementById("quote");
const author = document.getElementById("author");

const getQuote = async () => {
    try {
        quoteText.innerText = `Generating Quote....`;
        btn.innerText = `Loading...`;
        author.innerText = "";
        const data = await fetch(url).then((res) => res.json());
        quoteText.innerText = data.content;
        author.innerText = `--${data.author}`;
        btn.innerText = `Get Quote`;
    } catch (error) {
        console.log(error);
        quoteText.innerText = "An error occured please try again later";
        author.style.display = "none";
    }
};

btn.addEventListener("click", getQuote);
