/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow-description' : ['Barlow', 'sans-serif'],
        'madimi-title': ['Madimi One', 'sans-serif']
      }
    },
  },
  plugins: [],
}

