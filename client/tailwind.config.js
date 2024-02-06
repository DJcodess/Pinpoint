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
        lightgray: "#F1F3F4",
        dodgeblue: "#4285F4",
        darkgray: "#54585B",
        lightgreen: "#C9E6DA",
        darkgreen: "#0F9D58",
        gray1: "#F6F6F6",
        gray2: "#BDBDBD",
        glass: "#7eafeb",
        deepblue: "#00bfff",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

