/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        colorOrange: '#ffdd00',
        colorGray: '#bebebe',
        colorBlack: '#000000',
        colorWhite: '#ffffff',
      },
      width: {
        w80: '80%',
        w60: '60%',
      },
      fontFamily: {
        mon: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
