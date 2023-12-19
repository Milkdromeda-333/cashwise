/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      regular: ["Poppins", "sans- serif"],
      brand: ["Chakra Petch", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-lightMint": "#ddf1e6",
        "brand-darkGreen": "#203f3c",
        "brand-creme": "#f7f7f3",
      }
    },
  },
  plugins: [],
}

