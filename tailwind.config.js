/** @type {import('tailwindcss').Config} */

export const mode = "jit";
export const darkMode = "class";
export const content = ["./src/**/*.{js,jsx,html}", "./index.html"];
export const theme = {
  extend: {
    colors: {
      whiteBG: "#F7F7F7",
      darkThemeColor: "#121212",
      darkThemeAppColor: "#1f1f1f",
      primaryColor: "#dc272b",
      darkThemeAppColor: "#1f1f1f",
      darkThemeTextColor: "#ff7474",
    },
    borderRadius: {},
    screens: {},
  },
  fontFamily: {
    montserrat: "Montserrat",
    josefin: ["Josefin Sans", "sans-serif"],
    open: "Open Sans",
  },
};
export const plugins = [];
