import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "retro-navy": "#000080",
        "retro-teal": "#008080",
        "retro-maroon": "#800000",
        "retro-lime": "#00FF00",
        "retro-magenta": "#FF00FF",
        "retro-silver": "#C0C0C0",
        "retro-yellow": "#FFFF00",
        "retro-bg": "#C0C0C0",
        "retro-purple": "#800080",
        "retro-red": "#FF0000",
        "retro-orange": "#FF8000",
      },
      fontFamily: {
        comic: ['"Comic Sans MS"', '"Chalkboard SE"', "Comic Sans", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
