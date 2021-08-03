module.exports = {
  mode: "jit",
  darkMode: false,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          logo: "#3D6666",
          lighter: "#F3F9FA",
          light: "#9EBBBD",
          normal: "#C4E4E6",
          dark: "#7F9D9F",
          darker: "#5E7A7D",
          darkest: "#00474B",
          bright: "#26C2AE",
          brighter: "#9FE8DF",
        },
        red: { default: "#E17457" },
      },
      height: { 120: "30rem" },
      maxWidth: {
        230: "57.5rem",
      },
      boxShadow: {
        default: "0px 32px 43px rgba(79, 166, 175, 0.200735)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
