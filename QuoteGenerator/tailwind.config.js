/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins"],
            },

            colors: {
                customSandal: "#ffcdb2",
                customOrange: "#ffb4a2",
                customPink: "#e5989b",
                customViolet: "#b5838d",
                customBlue: "#6d6875",
            },
        },
    },
    plugins: [],
};
