/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3F51B5",
        "secondary": "#E91E63",
      },
      fontFamily: {
        "poppins": ["'Poppins'", "sans-serif"],
        "lato": ["'Lato'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
