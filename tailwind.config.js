/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "rgb(21, 27, 32)",
        "not-as-deep-blue": "rgb(29, 38, 43)",
        blue3: "rgb(43,57,65)",
        blue4: "rgb(61,103,128)",
        blue5: "rgb(64,239,116)",
        // blue: "#2CBCE9",
        red: "rgb(255, 106, 81)",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        // cyan: "rgb(103 232 249)"
        purple1: "rgb(36,32,55)",
        purple2: `rgb(38,30,83)`,
        purple3: `rgb(89,39,200)`,
        blue1: `rgb(38,30,83)`,
        blue2: `rgb(54,115,150)`,
        blue6: `#24CBFF`,
        pink1: `rgb(204,83,203)`,
        pink2: `rgb(246,100,245)`,
        orange1: `rgb(233,126,119)`,
        yellow1: `rgb(254,219,123)`,

        blue3ToPurple3: `linear-gradient(90deg, #97EBF0FF, #5927C8FF)`,
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      backgroundImage: theme => ({
        "gradient-rainbow":
          "linear-gradient(180deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(180deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
        "gradient-rainblue-2":
          "linear-gradient(180deg, rgb(254,219,123) 14.53%, #FC59FF 69.36%)",
        "gradient-raincyan":
          "linear-gradient(90deg, #67E8F9FF 14.53%, #2CBCE9 69.36%)",
        "gradient-pinkToYellow":
          "linear-gradient(rgb(204,83,203), rgb(254,219,123))",
        "gradient-gray": "linear-gradient(rgb(75 85 99), rgb(31 41 55))",
        "gradient-gray-2": "linear-gradient(rgb(107 114 128), rgb(55 65 81))",
      }),
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        franklin: ["Libre Franklin", "sans-serif"],
        quest: ["Questrial", "sans-serif"],
      },
      content: {},
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1260px",
      xl: "1700px",
    },
  },
  plugins: [],
}
