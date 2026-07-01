/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./cv.html",
    "./cases/**/*.html",
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
          200: "#533E2B",
          300: "#8a7a6a",
          400: "#7a6a5e",
          500: "#533E2B",
          600: "#472211"
        },
        accent: {
          500: "#BE9C6E",
          600: "#9e825c",
          700: "#7a6340"
        },
        system: "#63574A",
        page: "#EBE7E0",
        "text-primary": "#472211",
        "text-secondary": "#533E2B",
        "text-tertiary": "#7a6a5e"
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  }
};
