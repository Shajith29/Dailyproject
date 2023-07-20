/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins"],
            },

            colors: {
                customNavyBlue: "#2b2d42",
                customGrey: "#8d99ae",
                customWhite: "#edf2f4",
                customLightRed: "#ef233c",
                customDarkRed: "#d90429",
            },
        },
    },
    plugins: [],
};
