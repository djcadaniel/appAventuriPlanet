/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colorBtn: 'rgb(40,217,137)' ,
        colorTitle: 'rgb(252,135,127)',
        amarillo: 'rgb(255,208,70)',
        celeste: 'rgb(189,245,234)',
        azul: 'rgb(36,48,127)',
        turquesa: 'rgb(0,163,152)'
      },
      fontFamily: {
        'barlow-description' : ['Barlow', 'sans-serif'],
        'madimi-title': ['Madimi One', 'sans-serif']
      }
    },
  },
  plugins: [],
}

