const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

const compute = (e) => {
    const currentValue = Number(e.target.value);
    const name = e.target.id;

    switch (name) {
        case "celsius":
            kelvinEl.value = (currentValue + 273.32).toFixed(2);
            fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
            break;

        case "fahrenheit":
            celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;

        case "kelvin":
            celsiusEl.value = currentValue - 273.32;
            fahrenheitEl.value = currentValue - 273.32;
            break;
    }
};
