/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'containerWidth': '1200px',
      },
      fontFamily: {
        'poppins' : "'Poppins', sans-serif"
      },
      colors:{
        'secondary':'#9E9E9E',
        'headingColor': '#212529',
        'bgColor':'#F4F4F4'

      }
    },
  },
  plugins: [],
}

