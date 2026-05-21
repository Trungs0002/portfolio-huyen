/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-container": "#b0b0ad",
        "on-primary-container": "#ff907f",
        "inverse-surface": "#303030",
        "surface-dim": "#dcd9d9",
        "surface-container": "#f0eded",
        "surface": "#fbf9f8",
        "on-tertiary-fixed": "#1a1c1a",
        "secondary-container": "#d8e5e1",
        "primary": "#610000",
        "outline": "#8e706b",
        "tertiary": "#2c2d2b",
        "surface-bright": "#fbf9f8",
        "tertiary-container": "#424341",
        "on-secondary-container": "#5b6764",
        "surface-variant": "#e4e2e1",
        "on-tertiary": "#ffffff",
        "on-surface": "#1b1c1c",
        "on-tertiary-fixed-variant": "#464745",
        "on-primary-fixed": "#410000",
        "surface-container-lowest": "#ffffff",
        "primary-fixed-dim": "#ffb4a8",
        "inverse-on-surface": "#f3f0f0",
        "error": "#ba1a1a",
        "on-background": "#1b1c1c",
        "secondary-fixed-dim": "#bcc9c6",
        "tertiary-fixed": "#e3e2e0",
        "on-secondary": "#ffffff",
        "on-primary-fixed-variant": "#920703",
        "primary-fixed": "#ffdad4",
        "tertiary-fixed-dim": "#c7c6c4",
        "surface-container-high": "#eae8e7",
        "on-surface-variant": "#5a403c",
        "background": "#fbf9f8",
        "surface-container-highest": "#e4e2e1",
        "on-secondary-fixed-variant": "#3d4947",
        "error-container": "#ffdad6",
        "primary-container": "#8b0000",
        "on-secondary-fixed": "#121e1c",
        "inverse-primary": "#ffb4a8",
        "on-error-container": "#93000a",
        "surface-tint": "#b52619",
        "on-error": "#ffffff",
        "outline-variant": "#e3beb8",
        "secondary": "#55615e",
        "on-primary": "#ffffff",
        "surface-container-low": "#f6f3f2",
        "secondary-fixed": "#d8e5e1"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1280px",
        "section-padding-mobile": "64px",
        "section-padding-desktop": "120px",
        "gutter": "24px",
        "unit": "8px"
      },
      fontFamily: {
        "label-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-md": ["Playfair Display", "serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "body-lg": ["Inter", "sans-serif"],
        "display-lg": ["Playfair Display", "serif"]
      },
      fontSize: {
        "label-md": ["14px", { "lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "headline-lg": ["40px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "display-lg-mobile": ["40px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseShimmer: {
          "0%": { boxShadow: "0 0 0 0 rgba(97, 0, 0, 0.4)" },
          "70%": { boxShadow: "0 0 0 10px rgba(97, 0, 0, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(97, 0, 0, 0)" }
        }
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out 2s infinite",
        "pulse-shimmer": "pulseShimmer 2s infinite"
      }
    }
  },
  plugins: [],
}
