module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Using the colors will replace the default color with the colors
    // inserted in colors.
    // In case additional colors are wanted, then they should be added
    // in the extend object under colors
    // colors:{},
    extend: {
      colors: {
        Nordea: "#0a126e",
        Swedbank: "#c59801",
        Danskbank: "#002c44",
        Handelsbanken: "#6a6a69",
        lightWhite: "#ece6e6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
