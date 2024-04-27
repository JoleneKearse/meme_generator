/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      screens: {
        md: "820px",
        lg: "1000px",
      },
      fontFamily: {
        rubik: ["Rubik Mono One", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
