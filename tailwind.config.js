/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      colors: {
        primary: "#ffffff",
        accent: "#737373",
        dark: "#000000"
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    }
  },
  plugins: []
}
