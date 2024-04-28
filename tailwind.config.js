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
      textShadow: {
        heavy:
          "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
