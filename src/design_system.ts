export const designSystem = {
  meta: {
    name: "Sistema de Diseño Web Angia SA V1",
    date: "Diciembre 2025",
    version: "1.0",
    description: "Guía integral de identidad y experiencia visual basada en el manual oficial."
  },
  themes: {
    light: {
      background: {
        primary: "#F5F5F5",
        secondary: "#FFFFFF",
        tertiary: "#E1E0E2"
      },
      text: {
        primary: "#000000",
        secondary: "#6D6E71",
        tertiary: "#A7A8AA",
        inverse: "#FFFFFF",
        brand: "#8325E5"
      },
      borders: {
        primary: "#6D6E71",
        secondary: "#A7A8AA",
        tertiary: "#D1D2D4"
      }
    },
    dark: {
      background: {
        primary: "#121212",
        secondary: "#1A1A1A",
        tertiary: "#2C2C2C"
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#A7A8AA",
        tertiary: "#6D6E71",
        brand: "#A974FF"
      },
      borders: {
        primary: "#6D6E71",
        secondary: "#A7A8AA",
        tertiary: "#D1D2D4"
      },
      rules: [
        "Nunca usar #8325E5 puro sobre negro (bajo contraste).",
        "El hover debe ser más claro, no más oscuro (lógica invertida).",
        "Prohibido usar grises claros como fondos suaves (se ven sucios).",
        "Priorizar superficies sobre líneas para comunicar profundidad."
      ]
    }
  },
  colors: {
    brand: {
      primary: { name: "Angia Purple", hex: "#8325E5" },
      primaryDark: { name: "Glow Purple", hex: "#A974FF", usage: "Equivalente primario en Dark Mode" },
      secondary: { name: "Secondary Purple", hex: "#632FE1" },
      accent: { name: "Deep Purple Blue", hex: "#4937DC" },
      accentDark: { name: "Glow Indigo", hex: "#6C5CFF" }
    },
    functional: {
      success: {
        bg: "#D0EFD6",
        strong: "#4CAF50"
      },
      warning: {
        bg: "#FFE9B0",
        strong: "#FFC107"
      },
      error: {
        bg: "#FFCDD2",
        strong: "#F44336"
      },
      info: {
        bg: "#CFE4FF",
        strong: "#2196F3"
      }
    }
  },
  typography: {
    family: {
      primary: "Acid Grotesk",
      secondary: "Helvetica",
      fallback: "sans-serif"
    },
    scale: {
      h1: { size: "48-56px", weight: "700", lineHeight: "1.2" },
      h2: { size: "36-42px", weight: "700", lineHeight: "1.3" },
      h3: { size: "28-32px", weight: "400", lineHeight: "1.3" },
      pLarge: { size: "18-20px", weight: "400", lineHeight: "1.5" },
      pMid: { size: "16px", weight: "400", lineHeight: "1.5" },
      pSmall: { size: "14px", weight: "400", lineHeight: "1.4" },
      labels: { size: "12-14px", weight: "700", lineHeight: "1.4" }
    }
  },
  components: {
    buttons: {
      radius: {
        large: "12px",
        medium: "12px",
        small: "10px"
      },
      states: {
        primary: {
          bg: "#8325E5",
          hover: "#A66CE8",
          active: "#6C1CD3",
          disabled: "#BD9BEA"
        },
        dark: {
          bg: "#A974FF",
          hover: "Ligera variación de luminosidad (más claro)",
          focus: "Halo del mismo color"
        }
      }
    },
    inputs: {
      height: "40px",
      radius: "8px",
      border: "1px solid #6D6E71",
      font: "Helvetica Regular 14px",
      padding: "12-16px horizontal, 8-12px vertical",
      states: {
        normal: { border: "#6D6E71", bg: "#FFFFFF" },
        focus: { border: "#8325E5 (2px)", bg: "#FFFFFF" },
        error: { border: "#F44336", bg: "#FFCDD2" },
        disabled: { border: "#D1D2D4", bg: "#F5F5F5" }
      }
    },
    cards: {
      radius: {
        navigation: "8px",
        info: "12px",
        interactive: "10px"
      },
      shadows: {
        light: "0px 2px 4px rgba(0,0,0,0.08)",
        dark: "0px 2px 8px rgba(0,0,0,0.4)",
        darkHover: "0px 6px 16px rgba(0,0,0,0.6)"
      }
    }
  },
  layout: {
    spacing: {
      xs: "4px",
      s: "8px",
      m: "16px",
      l: "24px",
      xl: "40px"
    },
    responsive: {
      mobileMinClickTarget: "44x44px",
      mobileGutter: "16px",
      stackThreshold: "768px"
    }
  }
};