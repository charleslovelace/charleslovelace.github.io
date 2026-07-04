/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "'JetBrains Mono'",
          "'Fira Code'",
          "'Courier New'",
          "monospace",
        ],
      },
      colors: {
        void: {
          950: "#09090b",
          900: "#0a0a0a",
          850: "#111111",
          800: "#18181b",
          700: "#27272a",
          600: "#3f3f46",
          500: "#52525b",
          400: "#71717a",
          300: "#a1a1aa",
          200: "#d4d4d8",
          100: "#e4e4e7",
        },
      },
      animation: {
        glitch: "glitch 3s infinite",
        "glitch-skew": "glitch-skew 3s infinite",
        blink: "blink 1s step-end infinite",
        scanline: "scanline 8s linear infinite",
        flicker: "flicker 0.15s infinite",
        noise: "noise 0.5s steps(10) infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" },
        },
        "glitch-skew": {
          "0%, 100%": { transform: "skew(0deg)" },
          "20%": { transform: "skew(-2deg)" },
          "60%": { transform: "skew(2deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        noise: {
          "0%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1px, -1px)" },
          "20%": { transform: "translate(1px, 0)" },
          "30%": { transform: "translate(0, 1px)" },
          "40%": { transform: "translate(-1px, 1px)" },
          "50%": { transform: "translate(1px, -1px)" },
          "60%": { transform: "translate(-1px, 0)" },
          "70%": { transform: "translate(1px, 1px)" },
          "80%": { transform: "translate(0, -1px)" },
          "90%": { transform: "translate(-1px, -1px)" },
          "100%": { transform: "translate(1px, 0)" },
        },
      },
    },
  },
  plugins: [],
};
