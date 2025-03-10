/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'shoulder': ['Big Shoulders Text', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'light-silver': '#D9D9D9',
        'eerie-black': '#191919',
        'charleston-green': '#242424',
        'crimson': '#E30613'
      },
      keyframes: {
        ringing: {
          '0%, 90%': { transform: 'translateY(-15%) rotate(0deg)' },
          '92.5%': { transform: 'translateY(-15%) rotate(10deg)' },
          '95%': { transform: 'translateY(-15%) rotate(-10deg)' },
          '97.5%': { transform: 'translateY(-15%) rotate(10deg)' },
          '100%': { transform: 'translateY(-15%) rotate(0deg)' },
        },
      },
      animation: {
        ringing: 'ringing 5s ease-in-out infinite',
      },
    },
  },
  plugins: [

  ],
}

