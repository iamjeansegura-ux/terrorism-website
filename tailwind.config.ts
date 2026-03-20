import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#16324f",
          ink: "#0f2236",
          mist: "#eff3f7",
          steel: "#6b7785",
          red: "#9f4b4b",
          sand: "#f8f6f3"
        }
      },
      boxShadow: {
        soft: "0 16px 40px rgba(15, 34, 54, 0.08)"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        rise: "rise 0.8s ease-out forwards",
        float: "float 8s ease-in-out infinite"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(22, 50, 79, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(22, 50, 79, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
