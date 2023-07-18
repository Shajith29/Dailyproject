/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
          fontFamily: {
            "Poppins": ["Poppins"]
          },

          colors:{
            customGreen: "#c9cba3",
            customYellow: "#ffe1a8",
            customOrange: "#e26d5c",
            customBrown: "#723d46",
            customDarkBrown: "#472d30"
          }
        },
    },
    plugins: [],
};
