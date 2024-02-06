/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      height: {
        "1/10": "10%",
        "9/10": "90%"
      },
      backgroundColor: {
        "app-black": "#121212",
      },
      colors: {
        royalblue:"#010134",
        lightblue: "#039BFA",
        deepblue: "#020E6C",
        wallmartblue: "#0171dc",
        yelloe: "#FFC220",
        grey: "#B8C2C9",
        blue1: "#0174F0",
        blue2: "#0499F8",
        glass: "#7eafeb",
        colorf: "#ffffff26",
        search: "#757575",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

