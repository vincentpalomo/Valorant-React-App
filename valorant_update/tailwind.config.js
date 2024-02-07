/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'valorant-red': '#FF4655',
        'valorant-black': '#0F1923',
        'valorant-white': '#ECE8E1',
        'valorant-grey': '#768079',
        'off-black': '#1E1E1E',
        'off-white': '#F5F5F5',
      },
      fontFamily: {
        Mohave: ['Mohave', 'sans-serif'],
        Playfair: ['Playfair Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
