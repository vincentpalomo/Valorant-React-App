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
        'off-black': '#0F0F0F',
        'off-white': '#F5F5F5',
      },
      fontFamily: {
        Mohave: ['Mohave', 'sans-serif'],
        Playfair: ['Playfair Display', 'sans-serif'],
      },
      backgroundImage: {
        'main-omen': "url('/src/images/omen-main.jpg')",
        'map-section': "url('https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png')",
      },
    },
  },
  plugins: [],
};
