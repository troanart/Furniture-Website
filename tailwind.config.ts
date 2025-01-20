import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "100%",
          xl: "1240px",
        },
      },
      spacing: {
        "60": "60px",
      },
      colors: {
        customBorder: "rgba(243, 243, 243, 1)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "rgba(81, 133, 129, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
