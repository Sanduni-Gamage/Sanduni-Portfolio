import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm & elegant palette (mirrors the Figma design tokens)
        cream: "#F6F1E9",
        surface: "#FCF9F4",
        ink: "#2A2320",
        secondary: "#6B5D50",
        muted: "#9A8B7C",
        accent: {
          DEFAULT: "#B75E3F",
          soft: "#D98A6A", // lighter terracotta for dark backgrounds
          deep: "#9A4A2F",
        },
        sand: "#EADFCF",
        line: "#E4D9CA",
        espresso: {
          DEFAULT: "#2F2723",
          light: "#4C372D",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(102, 76, 51, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
