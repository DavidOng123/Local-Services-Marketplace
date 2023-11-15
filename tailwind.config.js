module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_a2": "#000000a2",
          "900_0c": "#0000000c",
          "900_3f": "#0000003f",
          "900_1e": "#0000001e",
          "900_99": "#00000099",
          "900_19": "#00000019",
        },
        gray: { 700: "#666666" },
        blue_gray: { 100: "#d8d8d8", 900: "#333333", "100_7f": "#d8d8d87f" },
        amber: { A400: "#ffc600" },
        indigo: { A700: "#0000ff" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs2: "0px 0px  6px 0px #0000001e",
        bs1: "0px 4px  4px 0px #0000003f",
        bs: "0px 4px  14px 0px #00000019",
      },
      fontFamily: { roboto: "Roboto", montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
