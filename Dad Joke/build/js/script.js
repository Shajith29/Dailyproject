/* Project Essentilas */
const api_key = "yEFAXGjyQQIKjfJ3zB3rbw==fjLqI5Jmo2953wAn";
const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
    method: "Get",
    headers: {
        "X-Api-Key": api_key,
    },
};

/* Elements */
const jokeEl = document.getElementById("joke");
const btn = document.getElementById("btn");

/* Function */

const getJoke = async () => {
    jokeEl.innerHTML = "Cooking Jokes....";
    btn.disabled = true;
    btn.innerText = "Loading";
    const response = await fetch(url, options);
    const data = await response.json();
    btn.disabled = false;
    btn.innerText = "Tell me joke";
    jokeEl.innerHTML = data[0].joke;
};

/* Event Listner */

btn.addEventListener("click", getJoke);
