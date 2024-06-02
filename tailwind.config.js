/** @type {import('tailwindcss').Config} */

export const mode = "jit";
export const darkMode = "class";
export const content = ["./src/**/*.{js,jsx}"];
export const theme = {
  extend: {
    colors: {
      whiteBG: "#F7F7F7",
    },

    borderRadius: {},
    screens: {},
  },
  fontFamily: {
    montserrat: "Montserrat",
    josefin: ["Josefin Sans", "sans-serif"],
    alien: "Alien",
  },
};
export const plugins = [];
