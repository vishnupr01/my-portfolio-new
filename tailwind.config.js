/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"]
      },
      colors: {
        primary: "#38bdf8",
        accent: "#a855f7",
        dark: "#020617"
      }
    }
  },
  plugins: []
}