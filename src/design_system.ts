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
      fallback: "sans-serif",
      weights: {
        light: 300,
        regular: 400,
        bold: 700
      }
    },
    scale: {
      h1: { size: "48-56px", weight: "700", lineHeight: "1.2", spacing: { padding: "0-8px Y", margin: "16-24px bottom" } },
      h2: { size: "36-42px", weight: "700", lineHeight: "1.3", spacing: { padding: "0-6px Y", margin: "12-20px bottom" } },
      h3: { size: "28-32px", weight: "400", lineHeight: "1.3", spacing: { padding: "0-4px Y", margin: "8-16px bottom" } },
      h4: { size: "24px", weight: "400", lineHeight: "1.4", spacing: { padding: "0-4px Y", margin: "6-12px bottom" } },
      pLarge: { size: "18-20px", weight: "400", lineHeight: "1.5", spacing: { padding: "4-8px Y", margin: "8-16px bottom" } },
      pMid: { size: "16px", weight: "400", lineHeight: "1.5", spacing: { padding: "4px Y", margin: "6-12px bottom" } },
      pSmall: { size: "14px", weight: "400", lineHeight: "1.4", spacing: { padding: "2-4px Y", margin: "4-8px bottom" } },
      labels: { size: "12-14px", weight: "700", lineHeight: "1.4", spacing: { padding: "2px Y", margin: "4-6px bottom" } },
      caption: { size: "10-12px", weight: "400", lineHeight: "1.3", spacing: { padding: "1-2px Y", margin: "2-4px bottom" } }
    }
  },
  components: {
    buttons: {
      globalProps: {
        radius: "12px (Large/Medium), 10px (Small)",
        fontFamily: "Helvetica",
        fontWeight: "Bold (700)",
        alignment: "center"
      },
      variants: {
        primary: {
          bg: "#8325E5",
          text: "#FFFFFF",
          border: "None",
          states: {
            normal: { bg: "#8325E5", text: "#FFFFFF" },
            hover: { bg: "#A66CE8", text: "#FFFFFF" },
            active: { bg: "#6C1CD3", text: "#FFFFFF" },
            focus: { bg: "#8325E5", text: "#FFFFFF", note: "No borde, focus ring externo de 2px color claro" },
            disabled: { bg: "#BD9BEA", text: "#FFFFFF", opacity: "50%" },
            loading: { bg: "#8325E5", text: "Oculto", content: "Spinner centrado" }
          },
          darkMode: {
            bg: "#A974FF (Glow Purple)",
            text: "#FFFFFF (or high contrast on Purple)",
            hover: "Ligera variación (+Luminosidad)",
            focus: "Halo del mismo color #A974FF"
          }
        },
        secondary: {
          bg: "#FFFFFF",
          text: "#8325E5",
          border: "2px solid #8325E5",
          states: {
            normal: { bg: "#FFFFFF", text: "#8325E5", border: "#8325E5" },
            hover: { bg: "#F3F3F3", text: "#8325E5", border: "#8334EA" },
            active: { bg: "#EDEDED", text: "#6C1CD3", border: "#6C1CD3" },
            focus: { bg: "#FFFFFF", text: "#8325E5", border: "#8325E5", note: "Borde con focus ring externo de 2px" },
            disabled: { bg: "Transparent", text: "#BD9BEA", border: "#BD9BEA", opacity: "50%" }
          },
          darkMode: {
            bg: "Transparent",
            text: "#A974FF (Glow Purple)",
            border: "#A974FF (2px)",
            hover: { bg: "rgba(169, 116, 255, 0.1)", border: "#A974FF" }
          }
        },
        tertiary: {
          bg: "Transparent",
          text: "#6D6E71",
          border: "None",
          states: {
            hover: { text: "#8C8C8C", bg: "Transparent" },
            active: { text: "#545454", bg: "Transparent" },
            disabled: { text: "#D1D2D4" }
          },
          darkMode: {
            text: "#A7A8AA (Text Tertiary/Secondary)",
            hover: { text: "#FFFFFF" }
          }
        },
        destructive: {
          bg: "#F44336",
          text: "#FFFFFF",
          border: "None",
          states: {
            hover: { bg: "#F45858" },
            active: { bg: "#F42A25" },
            disabled: { bg: "#FFCDD2" }
          },
          darkMode: {
            bg: "#F44336",
            hover: "#F45858 (Lighter)"
          }
        }
      },
      sizes: {
        large: { height: "48px", padding: "0 24px", fontSize: "16px", iconGap: "8px" },
        medium: { height: "40px", padding: "0 20px", fontSize: "16px", iconGap: "8px" },
        small: { height: "32px", padding: "0 16px", fontSize: "16px", iconGap: "6px" },
        iconOnly: { size: "48/40/32px", padding: "0" }
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
      },
      darkMode: {
        bg: "#1A1A1A (Surface)",
        border: "#6D6E71",
        text: "#FFFFFF",
        focusBorder: "#A974FF (Glow Purple)"
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
      },
      darkMode: {
        bg: "#1A1A1A (Surface)",
        border: "#2C2C2C (Optional separation)",
        note: "In dark mode, depth is communicated more by shadow/elevation than by borders."
      }
    },
    sidebar: {
      dimensions: {
        widthExpanded: "240px",
        widthCollapsed: "80px",
        iconSize: "24px",
        paddingItem: "16px"
      },
      background: {
        type: "gradient-vertical",
        from: "#8325E5",
        to: "#632FE1"
      },
      items: {
        spacingIconText: "12px",
        color: "#FFFFFF",
        states: {
          normal: { bg: "Transparent" },
          hover: { bg: "rgba(255, 255, 255, 0.1)" },
          active: { bg: "rgba(255, 255, 255, 0.2)", iconStyle: "Solid" }
        }
      },
      mobile: {
        behavior: "Hamburger menu",
        overlay: "Semi-transparent background"
      }
    },
    header: {
      dimensions: {
        height: "64px",
        logoWidth: "120px",
        profileIcon: "32px"
      },
      background: "#F5F5F5 (or Transparent)",
      behavior: "Fixed/Sticky on scroll",
      elements: {
        logoPosition: "Top Left",
        userPosition: "Top Right"
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