/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors: {
        "project-cyan": "hsl(180, 62%, 55%)",
        "project-blue": "hsl(212, 86%, 64%)",
        "project-red": "hsl(0, 78%, 62%)",
        "project-orange": "hsl(34, 97%, 64%)",
        "project-gray": {
          100: "hsl(0, 0%, 98%)",
          200: "hsl(229, 6%, 66%)",
          300: "hsl(234, 12%, 34%)",
        },
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
