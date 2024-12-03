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
                deepGrey: "#2b3944",
                lightGrey: "#959ca2"
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
            },
            fontSize: {
                default: "15px"
            },
            padding: {
                default: "15px"
            }
        },
    },
    plugins: [],
};
