import { type Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: "#0A84FF",
      white: "#EDEDED",
      gray: "#888888",
      black: "#000000",
    },
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      base: "1.25rem",
      lg: "1.75rem",
      xl: "1.875rem",
      "2xl": "2.125rem",
      "3xl": "3.125rem",
      "4xl": "3.75rem",
      "5xl": "5rem",
      "6xl": "6.25rem",
      "7xl": "7.5rem",
      "8xl": "8.75rem",
      "9xl": "10rem",
    },
    lineHeight: {
      none: "1",
      3: "1.25rem",
      4: "1.5rem",
      5: "2rem",
      6: "2.5rem",
      7: "3.875rem",
      8: "4.5rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", ...fontFamily.sans],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}

export default config
