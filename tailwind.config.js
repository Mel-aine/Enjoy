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
        customBlue: '#11a6ba',
        customRed: '#d63384',
        custumRed: '#'
      },
    },
  },
  plugins: [],
}

