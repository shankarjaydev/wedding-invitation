import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        lora: ["Lora", "serif"],
        cursive: ["'Great Vibes'", "cursive"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        royal: {
          bg: "#e8dfca",
          cardStart: "#fffcfa",
          cardEnd: "#f7eed6",
          dark: "#3f2219",
          text: "#573728",
          gold: "#c4a15b",
          goldLight: "#d8ba6b",
          goldDark: "#9b7430",
          brownBtn: "#291410",
        },
      },
    },
  },
  plugins: [],
};
export default config;
