/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins"],
            },

            colors: {
                customDarkBlue: "#231942",
                customPurple: "#5e548e",
                customLightPurple: "#9f86c0",
                customViolet: "#be95c4",
                customPink: "#e0b1cb",
            },
        },
    },
    plugins: [],
};
