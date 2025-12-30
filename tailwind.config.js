// @type {import('tailwindcss').Config} 
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: "#FB6C90",          // main accent (buttons, highlights)
                primaryLight: "#FBC0C0",     // soft backgrounds, hovers
                secondary: "#C79AF7",        // cards / panels
                borderMain: "#4B2F5A",       // frames, separators
                textMain: "#2B1B33",         // main text
                textMuted: "#6A4A7A",        // secondary text
                overlay: "rgba(0, 0, 0, 0.35)", // modal backgrounds
            },
        },
    },
    plugins: [],
};
