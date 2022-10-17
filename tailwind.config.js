/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: "Raleway",
        Merriweather: "Merriweather",
      },
      keyframes: {
        burgerAnimation: {
          "0%": { height: "20px", transform: "rotate(0deg)" },
          // "20%, 80%": { transform: "rotate(180deg)" },
          "50%": { height: "0px", transform: "rotate(360deg)" },
          "100%": { height: "20px", transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
