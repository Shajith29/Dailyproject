/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins"],
            },

            colors: {
                customLightPurple: "#8294C4",
                customLavender: "#ACB1D6",
                customLightBlue: "#DBDFEA",
                customSandal: "#FFEAD2",
            },
        },
    },
    plugins: [],
};
