/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      screens: {
        md: "820px",
        lg: "1000px",
      },
    },
  },
  plugins: [],
};
