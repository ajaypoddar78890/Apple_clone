/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors here
        blue: '#3490dc',
        // other colors...
      },
    },
  },
  plugins: [],
}``