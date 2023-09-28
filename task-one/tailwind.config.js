/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                sora: ["Sora", "sans-serif"],
                workSans: ["Work Sans", "sans-serif"],
            },
            colors: {
                primaryLogo: "#100A42",
                grayText: "#000000bf",
                primary: "#120B48",
                primary400: "#413c6d",
                headings: "#141414",
                purpleHeadings: "#1B233D",
            },
        },
    },
    plugins: [],
};
