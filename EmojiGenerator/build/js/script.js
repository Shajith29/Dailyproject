const api_key = "852bbc5a5239b72cbd4988aee075fea2d2771efe";

const emojiContainer = document.getElementById("emoji-container");
const btnEl = document.getElementById("btn");
const emojiEl = document.getElementById("emoji");
const emojiName = document.getElementById("name");

let emojiArray = [];

const getEmoji = async () => {
    try {
        btnEl.innerText = "Generating....";
        const data = await fetch(
            `https://emoji-api.com/emojis?access_key=${api_key}`
        ).then((res) => res.json());

        for (let i = 0; i <= 1500; i++) {
            emojiArray.push({
                emoji: data[i].character,
                unicode: data[i].unicodeName,
            });
        }
        displayEmoji();
    } catch (error) {
        console.log(error);
        emojiContainer.classList.remove("hidden");
        emojiContainer.classList.add("flex");
        btnEl.innerText = "generate emoji";
        emojiEl.innerText = "";
        emojiName.innerText = "An error has occured please try again later";
    }
};

const displayEmoji = () => {
    const randomNum = Math.floor(Math.random() * emojiArray.length);
    btnEl.innerText = "generate emoji";
    emojiContainer.classList.remove("hidden");
    emojiContainer.classList.add("flex");
    emojiEl.innerHTML = emojiArray[randomNum].emoji;
    emojiName.innerText = emojiArray[randomNum].unicode;
};

btnEl.addEventListener("click", () => {
    getEmoji();
});
