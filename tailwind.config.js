/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5ece7b',
        secondary: '#1d1f22'
      },
      boxShadow: {
        primaryShadow: '4px 0 35px 0 rgba(168, 172, 176, 0.19)',
      },
      fontFamily: {
        'roboto': ["Roboto Condensed", 'sans-serif']
      },
    },
  },
  plugins: [],
}

