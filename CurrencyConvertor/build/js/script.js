const api_key = "9bfe09e3fa044ccbfa3d4a76";

const firstCurrencyEl = document.getElementById("currency-first");
const firstRateEl = document.getElementById("first-rate");
const SecondCurrencyEl = document.getElementById("currency-second");
const SecondRateEl = document.getElementById("second-rate");
const exchageValue = document.getElementById("exchange-rate");

const updateRate = async () => {
    const data = await fetch(
        `https://v6.exchangerate-api.com/v6/${api_key}/latest/${firstCurrencyEl.value}`
    ).then((res) => res.json());
    const rate = data.conversion_rates[SecondCurrencyEl.value];
    console.log(rate);

    exchageValue.innerText = `1 ${firstCurrencyEl.value} = ${
        rate + " " + SecondCurrencyEl.value
    }`;

    SecondRateEl.value = firstRateEl.value * rate.toFixed(3);
};

firstCurrencyEl.addEventListener("change", updateRate);
SecondCurrencyEl.addEventListener("change", updateRate);
firstRateEl.addEventListener("input", updateRate);

updateRate();
