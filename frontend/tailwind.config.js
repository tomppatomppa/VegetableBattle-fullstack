/** @type {import('tailwindcss').Config} */
//https://wallpapercave.com/landscape-pixel-art-wallpapers bg image
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/images/bg-image.png')",
      },
      animation: {
        bounce: 'bounce 0.3s infinite',
        wiggle: 'wiggle 1s infinite',
        wiggleLeft: 'wiggleLeft 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(40deg) ',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)',
          },
        },
        wiggleLeft: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(-40deg) ',
          },
          '50%': {
            transform: 'scale(0.8) rotate(7deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
