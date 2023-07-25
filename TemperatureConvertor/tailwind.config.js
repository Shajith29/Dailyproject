/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins"],
            },

            colors: {
                customSandal: "#FFEADD",
                customRosePink: "#FCAEAE",
                customLightPink: "#FF8989",
                customDarkPink: "#FF6666",
            },
        },
    },
    plugins: [],
};
