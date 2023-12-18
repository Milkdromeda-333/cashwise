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
        "brand-lightMint": "#d1d5db",
        "brand-mint": "#009957",
        "brand-creme": "#f0f0e4",
      }
    },
  },
  plugins: [],
}

