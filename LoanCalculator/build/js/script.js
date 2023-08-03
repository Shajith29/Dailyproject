const calAmount = () => {
    const amount = document.getElementById("lamount").value;
    const rot = document.getElementById("irate").value;
    const mto = document.getElementById("months").value;
    const famount = document.getElementById("payment");

    const interest = (amount * (rot * 0.01)) / mto;
    famount.innerText = (amount / mto + interest).toFixed(2);
};
