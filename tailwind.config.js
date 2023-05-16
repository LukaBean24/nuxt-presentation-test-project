/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5C64EB",
        hover: "#436AFA",
        whity: "#EFEFFD",
        dark: "#051643",
        success: "#4E8C3F",
        error: "#EF6567",
        warning: "#F48C2B",
      },
    },
  },
  plugins: [],
};
