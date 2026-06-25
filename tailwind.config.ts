import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        fog: "#F4F1EA",
        sf: {
          orange: "#E0552B", // Golden Gate-ish
          gold: "#F2A65A",
          bay: "#0E4D64",
          sky: "#9FD3E3",
          moss: "#3F7D5B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
