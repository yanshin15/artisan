/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cream-background': '#fef6f3'
      },
      fontFamily:{
        'playfair-reg': 'Playfair Display',
        'poppins': 'Poppins',
        'itim': 'Itim'
      }
    },
  },
  plugins: [],
}