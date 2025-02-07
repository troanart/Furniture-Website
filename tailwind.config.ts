import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {},
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
        textPrimary: "rgba(175, 173, 181, 1)",
        shadowSearch: "rgba(175, 173, 181, 0.2)",
        greenColor: "rgba(81, 133, 129, 1)",
        hoverGreenColor: " rgb(52, 87, 84)",
        orangePrimary: "rgba(255, 178, 63, 1)",
        titleColor: "rgba(21, 20, 17, 1)",
        spanBg: "rgba(249, 249, 249, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
