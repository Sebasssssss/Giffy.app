/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif']
      },
      colors: {
        base: '#191724',
        text: '#eee',
        lightcoral: 'lightcoral'
      },
      boxShadow: {
        searchForm: '-3px -3px 15px #00FFFF',
        button: '0px 15px 18px -6px rgba(0, 255, 255, 0.65)',
        buttonHover: '0px 22px 19px -8px #00cbff70'
      }
    },
    backgroundImage: {
      mainBackground: "url('/src/assets/background.jpg')"
    }
  },
  plugins: []
}
