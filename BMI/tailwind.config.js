/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins"],
            },

            colors: {
                customDarkGreen: "#006d77",
                customLightGreen: "#83c5be",
                customWhite: "#edf6f9",
                customPink: "#ffddd2",
                customOrange: "#e29578",
            },
        },
    },
    plugins: [],
};
