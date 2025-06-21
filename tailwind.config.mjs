/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#000000", // Pure black
        foreground: "#FFFFFF", // Pure white
        primary: {
          DEFAULT: "#FFFFFF", // White for primary actions
          foreground: "#000000", // Black text on primary
        },
        secondary: {
          DEFAULT: "#333333", // Dark gray for secondary elements
          foreground: "#FFFFFF", // White text on secondary
        },
        muted: {
          DEFAULT: "#1A1A1A", // Slightly lighter black for muted backgrounds
          foreground: "#CCCCCC", // Light gray for muted text
        },
        accent: {
          DEFAULT: "#FFFFFF", // White for accents
          foreground: "#000000", // Black text on accent
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.05)", // Glassmorphic effect for cards
          foreground: "#FFFFFF", // White text on cards
        },
        border: "#333333", // Dark gray border
        input: "#1A1A1A", // Dark input background
        ring: "#FFFFFF", // White ring focus
        destructive: {
          DEFAULT: "#FF0000", // Red for destructive actions
          foreground: "#FFFFFF", // White text on destructive
        },
        popover: {
          DEFAULT: "#000000", // Black popover background
          foreground: "#FFFFFF", // White popover text
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        glitch: "glitch 1s linear infinite",
        flicker: "flicker 3s infinite alternate",
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
