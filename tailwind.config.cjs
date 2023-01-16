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
        gold: '#f6c177',
        pine: '#31748f',
        rose: '#ebbcba',
        base: '#191724',
        surface: '#1f1d2e',
        overlay: '#26233a',
        subtle: '#908caa',
        muted: '#6e6a86',
        text: '#e0def4',
        love: '#eb6f92',
        lightcoral: 'lightcoral'
      },
      boxShadow: {
        input: '0 0.2rem #dfd9d9'
      }
    }
  },
  plugins: []
}
