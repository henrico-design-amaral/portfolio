/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        base: {
          50: "#f2efe9",
          100: "#DAD5CD",
          200: "#c9c4bc",
          300: "#BE9C6E"
        },
        support: {
          100: "#c4beb4",
          200: "#a89f92",
          300: "#8C7D6E",
          400: "#6F5C4A",
          500: "#4D4037"
        },
        accent: {
          400: "#D9B16F",
          500: "#BE9C6E",
          600: "#8C6B4A"
        },
        text: {
          primary: "#2B1710",
          secondary: "#5f4b3b",
          tertiary: "#7a6a5e"
        }
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  }
};
