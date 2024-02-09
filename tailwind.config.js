/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/index.html"],
  theme: {
    extend: {
      colors: {
        nutmeg: "var(--nutmeg)",
        "dark-raspberry": "var(--dark-raspberry)",
        white: "var(--white)",
        "rose-white": "var(--rose-white)",
        eggshell: "var(--eggshell)",
        "light-grey": "var(--light-grey)",
        "wenge-brown": "var(--wenge-brown)",
        "dark-charcoal": "var(--dark-charcoal)",
      },
      fontFamily: {
        "young-serif": "var(--young-serif)",
        outfit: "var(--outfit)",
      },
    },
  },
  plugins: [],
};
