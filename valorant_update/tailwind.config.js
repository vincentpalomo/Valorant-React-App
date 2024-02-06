/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'valorant-red': '#FF4655',
      },
      fontFamily: {
        Mohave: ['Mohave', 'sans-serif'],
        Playfair: ['Playfair', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
