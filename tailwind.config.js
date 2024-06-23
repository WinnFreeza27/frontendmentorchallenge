/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        't-selected' : "#1D1E35",
        "t-hover" : "#F47C57",
        "t-primary" : "#4A4B5E",
        "t-secondary" : "#787887",
        "t-divider" : "#E7E7E9",
        "soft-violet" : "#AF67E9",
        "soft-blue" : "#6565E7"
      },
      fontFamily: {
        'kumbh' : ['Kumbh Sans']
      }
    },
  },
  plugins: [],
}

