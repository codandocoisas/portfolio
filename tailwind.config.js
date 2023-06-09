/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ptsans: ["var(--font-ptsans)", ...fontFamily.sans],
        ubuntu: ["var(--font-ubuntu)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
