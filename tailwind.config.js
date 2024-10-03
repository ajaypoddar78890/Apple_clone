// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Your custom colors here
//         blue: '#3490dc',
//         // other colors...
//       },
//     },
//   },
//   plugins: [],
// }``

// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        customheading: ["customeheader", "sans-serif"],
        custometext: ["custometext", "sans-serif"],
      },
    },
  },
  plugins: [],
};
