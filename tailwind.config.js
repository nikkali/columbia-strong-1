module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    fontFamily: { myfont: ["Open Sans", "sans-serif"] },
    extend: {
      colors: {
        dark1: "#2d2d2d",
        dark2: "#171717",
      },
      inset: {
        half: "50%",
      },
    },
  },
  variants: {},
  plugins: [],
};
