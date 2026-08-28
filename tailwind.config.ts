import type { Config } from "tailwindcss";
import { colors, radius, layout, shadow } from "./lib/tokens";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      borderRadius: radius,
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-instrument-sans)", "sans-serif"],
      },
      spacing: {
        15: "3.75rem", // 60px — hero/footer gaps
      },
      width: {
        sidebar: layout.sidebarWidth,
        "hero-media": layout.heroMediaWidth,
        "service-card": layout.serviceCardWidth,
        "vital-card": layout.vitalCardWidth,
        "portal-primary": layout.portalPrimaryColumn,
        "portal-secondary": layout.portalSecondaryColumn,
        "settings-primary": layout.settingsPrimaryColumn,
        "settings-secondary": layout.settingsSecondaryColumn,
      },
      height: {
        "hero-media": layout.heroMediaHeight,
      },
      boxShadow: {
        card: shadow.card,
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
