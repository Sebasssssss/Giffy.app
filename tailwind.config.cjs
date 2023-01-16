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
        field: '0 0.2rem #dfd9d9',
        fieldClick: '0 0.1rem #dfd9d9',
        darkField: '0 0.2rem #3E2C41',
        darkFieldClick: '0 0.1rem #3E2C41',
        switch: '0 0.2em #dfd9d9',
        dark: '0 0.2rem #5C527F',
        card: '3px 5px 2px 1px rgba(0, 0, 255, 0.2)',
        cardHover: '-5px 8px 2px -1px rgba(0, 0, 255, 0.2)',
        cardDark: '3px 5px 2px 1px #3E2C41',
        cardDarkHover: '-5px 8px 2px -1px #3E2C41'
      }
    }
  },
  plugins: []
}
