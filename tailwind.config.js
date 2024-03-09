/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/.{html,js}"],
  theme: {
    extend: {},
    screens: {
      mdMax: { max: "767px" },
    },
  },
  plugins: [],
};
