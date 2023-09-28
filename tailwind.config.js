const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#2E2E2E",
        almostBlack: "#1D1D1D",
        pureBlack: "#000",
        purple: "#864CFF",

        gray: {
          100: "#F6F6F6",
          200: "#EDEDED",
          300: "#BEBEBE",
          400: "#3C3C3C",
        },
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        GilroyRegular: ["GilroyRegular", ...defaultTheme.fontFamily.sans],
        GilroyBold: ["GilroyBold", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: ["16px", "24px"],
        lg: ["20px", "30px"],
        xl: ["32px", "38px"],
        "2xl": ["52px", { letterSpacing: "-0.4px", lineHeight: 1.25 }],
      },
    },
  },
  plugins: [],
};
