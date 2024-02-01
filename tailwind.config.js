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
        'background': "url('/src/assets/background.svg')",
      }
    },
  },
  plugins: [],
}