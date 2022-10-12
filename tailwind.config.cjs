/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#043873",
          light: "#4f9cf9",
          lightest: "#c4defd",
        },
        secondary: {
          yellow: "#ffe492",
          blue: "#a7cefc",
          white: "#ffffff",
          black: "#000000",
          grey: "#212529"
        },
      },
      gap: {
        15: "3.75rem",
      },
    },
  },
  plugins: [],
};
