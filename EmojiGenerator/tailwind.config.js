/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins"],
            },

            colors: {
                customWhite: "#F6F1F1",
                customLightBlue: "#AFD3E2",
                customSkyBlue: "#19A7CE",
                customDarkBlue: "#146C94",
            },
        },
    },
    plugins: [],
};
