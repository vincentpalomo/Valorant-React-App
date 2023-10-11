/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        valorant: ['valorant', 'sans-serif'],
        Mohave: ['Mohave', 'sans-serif']
      },
    },
  },
  plugins: [require('daisyui')],
};
