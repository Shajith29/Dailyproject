/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins"],
            },

            colors: {
                customSandal: "#FAF0E4",
                customBlue: "#9BCDD2",
                customOrange: "#FF8551",
                customPink: "#FFDEDE",
            },
        },
    },
    plugins: [],
};
