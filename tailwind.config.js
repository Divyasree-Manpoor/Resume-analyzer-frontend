/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {

        /* ================================================= */
        /* BRAND COLORS */
        /* ================================================= */

        primary: "#4F46E5",
        primaryHover: "#4338CA",

        secondary: "#6366F1",

        /* ================================================= */
        /* LIGHT MODE */
        /* ================================================= */

        background: "#F8FAFC",
        surface: "#FFFFFF",

        section: "#F1F5F9",
        border: "#E2E8F0",

        heading: "#0F172A",
        text: "#475569",

        accent: "#6366F1",
        accentLight: "#EEF2FF",

        /* ================================================= */
        /* STATUS COLORS */
        /* ================================================= */

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        /* ================================================= */
        /* DARK MODE */
        /* ================================================= */

        darkBg: "#0F172A",
        darkSurface: "#111827",
        darkSection: "#1E293B",

        darkHeading: "#F8FAFC",
        darkText: "#CBD5E1",
        darkBorder: "#334155",
      },

      /* ================================================= */
      /* SHADOWS */
      /* ================================================= */

      boxShadow: {

        card:
          "0 8px 30px rgba(15, 23, 42, 0.08)",

        soft:
          "0 4px 12px rgba(15, 23, 42, 0.05)",

        primary:
          "0 10px 25px rgba(79, 70, 229, 0.20)",

        glow:
          "0 0 40px rgba(99, 102, 241, 0.25)",
      },

      /* ================================================= */
      /* BORDER RADIUS */
      /* ================================================= */

      borderRadius: {

        xl2: "20px",

        xl3: "24px",

        xl4: "32px",
      },

      /* ================================================= */
      /* CONTAINER */
      /* ================================================= */

      maxWidth: {

        content: "1280px",
      },

      /* ================================================= */
      /* FONT SIZES */
      /* ================================================= */

      fontSize: {

        hero: [
          "4rem",
          {
            lineHeight: "1.1",
            fontWeight: "800",
          },
        ],

        section: [
          "2rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
      },

      /* ================================================= */
      /* ANIMATIONS */
      /* ================================================= */

      keyframes: {

        float: {
          "0%, 100%": {
            transform:
              "translateY(0px)",
          },

          "50%": {
            transform:
              "translateY(-10px)",
          },
        },

        pulseGlow: {
          "0%, 100%": {
            opacity: "0.7",
          },

          "50%": {
            opacity: "1",
          },
        },
      },

      animation: {

        float:
          "float 4s ease-in-out infinite",

        pulseGlow:
          "pulseGlow 3s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};