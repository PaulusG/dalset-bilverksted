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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          brown: {
            light: "var(--brown-light)",
            DEFAULT: "var(--brown)",
            dark: "var(--brown-dark)",
          },
          green: {
            light: "var(--green-light)",
            DEFAULT: "var(--green)",
            dark: "var(--green-dark)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

