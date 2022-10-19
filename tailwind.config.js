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
      },
    },
  },
  plugins: [],
};
