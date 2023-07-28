const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");
const weightCondition = document.getElementById("condition");

const compute = () => {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);
    resultEl.value = bmiValue;

    if (bmiValue < 18.5) {
        weightCondition.innerText = "under weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightCondition.innerText = "Normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightCondition.innerText = "over weight";
    } else {
        weightCondition.innerText = "Obesity";
    }
};

btnEl.addEventListener("click", compute);
