module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: "hsl(0, 0%, 98%)",
        gray: {
          light: "hsl(0, 0%, 52%)",
        },
        dark: {
          default: "hsl(209, 23%, 22%)",
          primary: "hsl(207, 26%, 17%)",
          secondary: "hsl(200, 15%, 8%)",
        },
      },
      fontFamily: {
        sans: ["nunito sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
