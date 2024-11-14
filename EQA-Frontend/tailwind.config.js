/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#ECE6D3',
        'primary': '#771011',
        'brown': '#6F635B'
      },
      fontFamily: {
        'Manrope': ["Manrope", "sans-serif"],
        'Open-Sans': ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [],
    base: true, 
    styled: true, 
    utils: true, 
    prefix: "",
    logs: true, 
    themeRoot: ":root",
},
}