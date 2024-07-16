/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

import { fontFamily, colors } from "./src/assets/theme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { ...fontFamily },
      colors: { ...colors },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line no-undef
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#541AB9",
          "primary-content": "#ffffff",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#374151",
          "base-100": "#ffffff",
          "base-200": "#374151",
          "base-300": "#1F2937",
          "base-400": "#9CA3AF",
          "base-content": "#374151",
          error: "#C1292E",
          info: "#EEE8F8",
        },
      },
      "dark",
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
