/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Encode Sans Condensed"', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-green': '#2F3E46',
        'med-green': "#354F52",
        'light-green': '#CAD2C5',
        'black': '#030303',
        'fff': '#fff',
      },
    },
  },
  plugins: [],
}