/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        main: "#1a1a1a",
        fill: '#314c5d',
        backgroundSec: '#f7f5ec',
        blueberry: '#6B7A8F',
        orange: '#ffb766',

      },
      minHeight: {
        main: "calc(100vh - 3rem)",
        home: "calc(100vh - 10rem)",
      },
    },
  },
  plugins: [],
}