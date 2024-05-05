import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        cross: {
          '0%': { transform: 'translateX(-65vw)' },
          '100%': { transform: 'translateX(55vw)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'cross-screen': 'cross 10s linear 1 2s',
        'spin-slow': 'spin 10s linear infinite',
        'spin-slow-reverse': 'spin 10s linear infinite reverse',
      }
    },
  },
  plugins: [],
};
export default config;
