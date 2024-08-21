const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "poppins": ['Poppins', 'sans-serif'],
      "display": ["'Playfair Display'", 'serif']
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brown: '#684443',
      lightBrown: '#A98743',
      softPurple: '#756770',
      skin: '#DCB8B4',
      lightGrey: '#E4E1E0',
      services: '#080708',
      white: '#EEEEEE'
    },  

    extend: {},
  },
  plugins: [],
});