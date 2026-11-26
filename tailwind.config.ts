import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        stonebg: "#F5F5F3",
        stonesoft: "#F8F8F6",
        hairline: "#EAEAE8",
        ink: "#0F0F10",
        inkmuted: "#666668",
        inksubtle: "#8C8C8E",
      },
    },
  },
  plugins: [],
};

export default config;
