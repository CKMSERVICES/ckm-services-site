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
        // Brand navy — matches the CKM Services logo wordmark and headings.
        sapphire: {
          50: "#eef2fb",
          100: "#d6e0f5",
          200: "#adc1eb",
          300: "#7f9dda",
          400: "#5478c4",
          500: "#3868b8",
          600: "#2b5296",
          700: "#233f75",
          800: "#1c3159",
          900: "#182a56",
          950: "#101c3a",
        },
        // Sky blue — the gradient used across CKM's existing marketing visuals.
        sky: {
          50: "#eef6fd",
          100: "#d8ecfa",
          200: "#b0d8f4",
          300: "#84c1ec",
          400: "#5ea9e0",
          500: "#4590d1",
          600: "#3874b4",
          700: "#2f5e92",
          800: "#284c74",
          900: "#233f5e",
        },
        // Orange — the small sparkle accent in the logo, used sparingly.
        gold: {
          50: "#fff4ec",
          100: "#ffe3ce",
          200: "#ffc79c",
          300: "#ffa563",
          400: "#f7853a",
          500: "#ea6c1f",
          600: "#c85618",
          700: "#a1451a",
          800: "#82391b",
          900: "#6c301b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "sapphire-gradient":
          "linear-gradient(160deg, #8fc6ec 0%, #5a9fda 45%, #2f5e92 100%)",
        "sapphire-radial":
          "radial-gradient(circle at 12% 8%, rgba(255,255,255,0.30), transparent 40%), radial-gradient(circle at 92% 90%, rgba(255,255,255,0.18), transparent 45%)",
        "noise": "url('/noise.svg')",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(255,255,255,0.55)",
        soft: "0 12px 32px -12px rgba(16,28,58,0.22)",
        elevate: "0 20px 60px -20px rgba(16,28,58,0.45)",
        glass: "0 8px 32px 0 rgba(16,28,58,0.25)",
        premium:
          "0 28px 70px -24px rgba(16,28,58,0.40), 0 0 0 1px rgba(56,104,184,0.10), 0 10px 24px -10px rgba(234,108,31,0.18)",
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
