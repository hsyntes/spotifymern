/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          dark: "rgb(9, 142, 72)",
        },

        dark: {
          DEFAULT: "rgb(var(--color-dark))",
        },

        darker: {
          DEFAULT: "rgb(var(--color-darker))",
        },

        black: "rgb(var(--color-black))",
        white: "rgb(var(--color-white))",

        light: {
          DEFAULT: "rgb(var(--color-light))",
        },

        danger: {
          DEFAULT: "rgb(var(--color-danger))",
        },
      },

      borderRadius: {
        DEFAULT: "1rem",
      },

      transitionDuration: {
        DEFAULT: ".2s",
      },

      transitionTimingFunction: {
        DEFAULT: "ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
