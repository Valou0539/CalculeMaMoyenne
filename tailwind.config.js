/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      header: ["Readex Pro", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      logo: ["Ubuntu Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#FAFAFA",
          dark: "#050505",
        },
        text: {
          DEFAULT: "#000",
          dark: "#fff",
        },
        accent: "#1A84E0",
        'primary-button': {
          DEFAULT: '#3DA79D',
          text: '#000'
        },
        'secondary-button': {
          DEFAULT: "#E6E6E5",
          dark: "#1A1A19",
          text: {
            DEFAULT: "#000",
            dark: "#fff",
          }
        },
        delete: {
          DEFAULT: "#B40000",
          text: "#fff",
        },
        valid: {
          DEFAULT: "#00AD00",
          text: "#fff",
        },
        error: {
          DEFAULT: "#D10E00",
          dark: "#FF6454",
        }
      },
    },
  },
  plugins: [],
};
