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
        pops: {
          "0%": { transform: "scale(0%)" },
          "100%": { transform: "scale(100%)" },
        },
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
