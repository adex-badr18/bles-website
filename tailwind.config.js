/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkBlue: "#223645",
                deepBlue: "#13232F",
                borderColor: "#24333E",
                vividRed: "#E12454",
                // lightGreen: "#8FB569",
                lightGreen: "#10A500",

                deepGreen: "#006002",
                lighterGreen: "#34C759",
                originalGreen: "#10A500",
                mixedGreen: "#A8D98D",
                lightGray: "#F0F1F2",
                lightBlue: "#f4f9fc",
                deepGrey: "#2b3944",
                lightGrey: "#959ca2",
                grey: "#647589",
                offWhite: "#FBFAF7",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
                agu: ["Agu Display", "serif"],
                knewave: ["Knewave", "serif"],
            },
            fontSize: {
                default: "15px",
            },
            padding: {
                default: "15px",
            },
            lineHeight: {
                default: "20px",
            },
            backgroundImage: {
                "service-center-image":
                    "url('/src/assets/service-center-image.webp')",
                "get-in-touch-bg": "url('/src/assets/section-bg2.jpg')",
                "services-breadcrumb-bg": "url('/src/assets/banner.webp')",
                "programs-breadcrumb-bg": "url('/src/assets/banner.webp')",
            },
            screens: {
                bsm: "400px",
                smallsm: "500px",
                blg: "1000px",
                bxl: "1200px",
                b2xl: "1400px",
            },
            keyframes: {
                "fade-up": {
                    "0%": { opacity: 0, transform: "translateY(70px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-up": "fade-up 1s ease-out",
            },
        },
    },
    plugins: [],
};
