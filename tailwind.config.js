module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {},
  },
  
  darkMode: "class",
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
