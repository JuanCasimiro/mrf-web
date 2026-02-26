module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marsupial: {
          bg: "#05070a",
          accent: "#4f8cff",
          surface: "rgba(255, 255, 255, 0.05)",
          text: "#f8fafc",
          muted: "#94a3b8",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
