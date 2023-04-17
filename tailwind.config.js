/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '340px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        colorOrange: '#ffdd00',
        colorGray: '#bebebe',
        colorBlack: '#000000',
        colorWhite: '#ffffff',
      },
      width: {
        w80: '88%',
        w60: '80%',
      },
      fontFamily: {
        mon: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        header: "url('../app/images/header-image.jpg')",
      },
    },
  },
  plugins: [],
}
