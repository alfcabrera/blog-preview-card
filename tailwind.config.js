/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ["'Figtree'", "'sans-serif'"],
        },
        extend: {
            colors: {
                primary: "#f4d04e",
                grey: "#808080",
            },
            boxShadow: {
                custom: ".75rem .75rem 0 0 rgba(0,0,0,1)",
            },
        },
    },
    plugins: [],
};
