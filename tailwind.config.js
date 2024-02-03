/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      fontSize: {
        'memory': '40.19px',
      },
      backgroundImage: {
        'background': "url('/src/assets/images/background.svg')",
        'boardBackground': "url('/src/assets/images/boardBackground.svg')",
        'cardBack': "url('/src/assets/images/cardBack.svg')",
        'tempCard': "url('/src/assets/images/cards/joker_1.svg')",
      }
    },
  },
  plugins: [],
}