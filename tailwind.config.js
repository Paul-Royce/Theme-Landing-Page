/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        fylo: "hsl(218, 28%, 13%)",
        fyloTwo: "hsl(198, 60%, 50%)",
        fylohover:  "hsl(176, 68%, 64%)",
        fylotestimonials: "hsl(219, 30%, 18%)",
        fyloFooter: "hsl(216, 53%, 9%)",
        fyloSignUp: "hsl(217, 28%, 15%)"
      },
      colors: {
        fyloCyan: "hsl(176, 68%, 64%)"
      }
    },
  },
  plugins: [],
}

