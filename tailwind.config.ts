import type { Config } from "tailwindcss"
const withMT = require("@material-tailwind/react/utils/withMT")

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: {
        50: "#f3faf3",
        100: "#e4f4e6",
        200: "#cae8cd",
        300: "#a1d4a6",
        400: "#70b877",
        500: "#54ab5d",
        600: "#3a7f42",
        700: "#316437",
        800: "#2a512f",
        900: "#244328",
        950: "#102313"
      },
      gray: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#263238",
        950: "#212121"
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        error: '#FF4D4F'
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
})
export default config
