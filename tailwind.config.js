/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkBlue: "#223645",
                vividRed: "#E12454",
                lightGreen: "#8FB569",
                lightGrey: "#F0F1F2",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
            },
        },
    },
    plugins: [],
};
