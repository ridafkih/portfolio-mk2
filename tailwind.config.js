module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Grape Nuts", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
