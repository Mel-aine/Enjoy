/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        customBlue: '#7B2CBF',
        customRed: '#FF5400',
        customNeutreColor: '#FCEFE3',
        customDark: '#171616',
        customWhite: '#fff9f9'
      },
    },
  },
  plugins: [],
}

