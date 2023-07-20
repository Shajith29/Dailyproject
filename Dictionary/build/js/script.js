const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

const getMeaning = async (word) => {
    try {
        infoTextEl.style.display = `block`;
        infoTextEl.innerText = `Searching meaning for ${word}`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const data = await fetch(url).then((res) => res.json());

        if (data.title) {
            infoTextEl.style.display = `none`;
            meaningContainer.classList.remove("hidden");
            meaningContainer.classList.add("flex");
            title.innerText = word;
            meaning.innerText = "Not Found";
            audioEl.classList.add("hidden");
        } else {
            infoTextEl.style.display = `none`;
            meaningContainer.classList.remove("hidden");
            meaningContainer.classList.add("flex");
            title.innerText = data[0].word;
            meaning.innerText = data[0].meanings[0].definitions[0].definition;
            audioEl.src = data[0].phonetics[1].audio;
            audioEl.classList.remove("hidden");
        }
    } catch (e) {
        console.log(e);
        infoTextEl.innerText`An Error Occured Try again later`;
    }
};

inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        getMeaning(e.target.value);
        e.target.value = "";
    }
});
