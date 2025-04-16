/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          900: "#121212",
          800: "#222222",
          700: "#272727",
          600: "#2C2C2C",
          500: "#333333",
          400: "#494949",
          300: "#757575",
          200: "#ABABAB",
          100: "#DEDEDE",
        },
      },
      boxShadow: {
        elevation1: "0 2px 4px 0 rgb(0 0 0 / 0.4)",
        elevation2: "0 2px 6px 0 rgb(0 0 0 / 0.4)",
        elevation3: "0 2px 9px 0 rgb(0 0 0 / 0.4)",
      },
      backgroundColor: {
        "layer1-dark": "#121212",
      },
    },
  },
  plugins: [],
};
