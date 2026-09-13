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
          50: "#e9fffb",
          100: "#c7fef4",
          200: "#93fbe9",
          300: "#57f0da",
          400: "#22ddc6",
          500: "#0dbfab",
          600: "#0a9a8b",
          700: "#0d7a71",
          800: "#10615a",
          900: "#0f504b",
        },
        lime: {
          50: "#f6ffe3",
          100: "#e9ffbd",
          200: "#d4ff85",
          300: "#b8f24d",
          400: "#9de825",
          500: "#7fc913",
          600: "#619c0d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "sapphire-gradient":
          "linear-gradient(135deg, #050b1c 0%, #0b1730 35%, #10615a 100%)",
        "sapphire-radial":
          "radial-gradient(circle at 20% 20%, rgba(34,221,198,0.15), transparent 45%), radial-gradient(circle at 80% 0%, rgba(53,89,168,0.35), transparent 50%)",
        "noise": "url('/noise.svg')",
      },
      boxShadow: {
        glow: "0 0 40px -5px rgba(34,221,198,0.45)",
        "glow-lime": "0 0 40px -5px rgba(157,232,37,0.45)",
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
