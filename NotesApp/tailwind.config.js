/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html", "./build/js/*.js"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins"],
            },

            colors: {
                customDarkBlue: "#27374D",
                customDarkGrey: "#526D82",
                customLightGrey: "#9DB2BF",
                customWhite: "#DDE6ED",
            },
        },
    },
    plugins: [],
};
