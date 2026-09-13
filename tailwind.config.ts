import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sapphire: {
          50: "#eef2fb",
          100: "#d6e0f5",
          200: "#adc1eb",
          300: "#7f9dda",
          400: "#5478c4",
          500: "#3559a8",
          600: "#264488",
          700: "#1c3468",
          800: "#132347",
          900: "#0b1730",
          950: "#050b1c",
        },
        aqua: {
          50: "#eef9f8",
          100: "#d3efec",
          200: "#a8ded8",
          300: "#78c7c0",
          400: "#4fada6",
          500: "#37918b",
          600: "#2b756f",
          700: "#255e5a",
          800: "#204b48",
          900: "#1c3f3d",
        },
        gold: {
          50: "#fdf8ec",
          100: "#faedc7",
          200: "#f3d98c",
          300: "#eabf51",
          400: "#dfa32e",
          500: "#c8841f",
          600: "#a3661b",
          700: "#824f1b",
          800: "#6c421c",
          900: "#5c391b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "sapphire-gradient":
          "linear-gradient(135deg, #050b1c 0%, #0b1730 45%, #1c3f3d 100%)",
        "sapphire-radial":
          "radial-gradient(circle at 20% 20%, rgba(223,163,46,0.10), transparent 45%), radial-gradient(circle at 80% 0%, rgba(53,89,168,0.35), transparent 50%)",
        "noise": "url('/noise.svg')",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(223,163,46,0.35)",
        soft: "0 12px 32px -12px rgba(11,23,48,0.18)",
        elevate: "0 20px 60px -20px rgba(5,11,28,0.6)",
        glass: "0 8px 32px 0 rgba(5,11,28,0.37)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.55" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
      animation: {
        ripple: "ripple 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        sparkle: "sparkle 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
