import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-color": "#ffffff",
        "black-color": "#2c2c2c",
        "lime-color": "#00DD00",
        "neon-color": "#2272FF",
        "gray-color": "#cbd5e1",
        "dark-color": "#0b0a0a",
      },
      backgroundImage: {
        "light-bg":
          "linear-gradient(to bottom, rgba(226, 232, 240, .9), rgba(239, 239, 239, .7)), url('../public/images/pot-1.jpg')",
        "dark-bg":
          "linear-gradient(to bottom, rgba(29, 29, 29, .6), rgba(17, 16, 16, .6)), url('../public/images/pot-2.jpg')",
        "project-bg":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(17, 17, 17, 0.982))",
        "gradient1":
          "linear-gradient(to bottom, rgba(249, 248, 248, 0.873), rgba(222, 222, 222, 0.851))",
        "gradient2":
        "linear-gradient(to bottom, rgba(32, 32, 32, 0.599), rgba(18, 18, 18, 0.352))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
