export const designSystem = {
  meta: {
    name: "Sistema de Diseño Web Angia SA V1",
    date: "Diciembre 2025",
    version: "1.0"
  },
  colors: {
    primary: [
      { name: "Angia Purple", hex: "#8325E5", usage: "Botones primarios, links destacados, iconos activos, elementos de interacción principal" },
      { name: "Deep Purple Blue", hex: "#4937DC", usage: "Hover o estados activos de elementos primarios, destacados, bordes/acento, gradient end" }
    ],
    darkMode: [
      { name: "Glow Purple", hex: "#A974FF", usage: "Equivalente a primario en dark mode" },
      { name: "Glow Indigo", hex: "#6C5CFF", usage: "Hover o complemento en dark mode" }
    ],
    secondary: [
      { name: "Secondary Purple", hex: "#632FE1", usage: "Botón secundario, tabs no primarias, cards informativas" }
    ],
    support: [
      { name: "Lila Soft", hex: "#BC8DED", usage: "Botones apagados, inputs inactivos, estados pasivos" },
      { name: "Lavender", hex: "#BC8DED", usage: "Fondos suaves, indicadores sutiles, hover secundario" } // Note: Same hex in PDF? Checking OCR... yes, both list #BC8DED.
    ],
    functional: {
      success: {
        background: { hex: "#D0EFD6", usage: "Fondos de éxito" },
        strong: { hex: "#4CAF50", usage: "Texto/icono de éxito" }
      },
      warning: {
        background: { hex: "#FFE9B0", usage: "Alertas moderadas" },
        strong: { hex: "#FFC107", usage: "Texto/icono de advertencia" }
      },
      error: {
        background: { hex: "#FFCDD2", usage: "Fondos de error sutil" },
        strong: { hex: "#F44336", usage: "Texto/icono de error" }
      },
      info: {
        background: { hex: "#CFE4FF", usage: "Estados informativos" },
        strong: { hex: "#2196F3", usage: "Textos informativos" }
      }
    },
    backgrounds: {
      primary: { hex: "#F5F5F5", usage: "Base general de la interfaz" },
      secondary: { hex: "#FFFFFF", usage: "Tarjetas, paneles (contraste con fondo)" },
      tertiary: { hex: "#E1E0E2", usage: "Diferenciar capas dentro de un mismo nivel" }
    },
    text: {
      primary: { hex: "#000000", usage: "Encabezados, contenido principal" },
      inverse: { hex: "#FFFFFF", usage: "Texto sobre fondos oscuros/primarios" },
      brand: { hex: "#8325E5", usage: "Encabezados destacados" },
      secondary: { hex: "#6D6E71", usage: "Subtítulos, info complementaria" },
      tertiary: { hex: "#A7A8AA", usage: "Notas, explicaciones breves" },
      disabled: { hex: "#D1D2D4", usage: "Estados no disponibles" }
    },
    borders: {
      primary: { hex: "#6D6E71", width: "2px", usage: "Contenedores principales, inputs activos" },
      secondary: { hex: "#A7A8AA", width: "1.5px", usage: "Cards estándar" },
      tertiary: { hex: "#D1D2D4", width: "1px", usage: "Divisores internos" }
    }
  },
  typography: {
    fontFamily: {
      primary: "Acid Grotesk",
      fallback: "Helvetica, sans-serif"
    },
    scale: [
      { element: "H1", size: "48-56px", weight: "Bold 700", lineHeight: "1.2" },
      { element: "H2", size: "36-42px", weight: "Bold 700", lineHeight: "1.3" },
      { element: "H3", size: "28-32px", weight: "Regular 400", lineHeight: "1.3" },
      { element: "H4", size: "24px", weight: "Regular 400", lineHeight: "1.4" },
      { element: "Párrafo Grande", size: "18-20px", weight: "Regular 400", lineHeight: "1.5" },
      { element: "Párrafo Mid", size: "16px", weight: "Regular 400", lineHeight: "1.5" },
      { element: "Párrafo Small", size: "14px", weight: "Regular 400", lineHeight: "1.4" },
      { element: "Labels", size: "12-14px", weight: "Bold 700", lineHeight: "1.4" },
      { element: "Caption", size: "10-12px", weight: "Regular 400", lineHeight: "1.3" }
    ]
  },
  components: {
    buttons: {
      primary: {
        bg: "#8325E5",
        text: "#FFFFFF",
        radius: "12px (Medium/Large), 10px (Small)",
        hover: "#A66CE8",
        active: "#6C1CD3",
        disabled: "#BD9BEA (opacity 50%)"
      },
      secondary: {
        bg: "#FFFFFF",
        text: "#8325E5",
        border: "#8325E5 (2px)",
        hover: "#F3F3F3",
        active: "#EDEDED"
      },
      tertiary: {
        bg: "Transparent",
        text: "#6D6E71",
        hover: "#8C8C8C (text)",
        active: "#545454 (text)"
      },
      destructive: {
        bg: "#F44336",
        text: "#FFFFFF",
        hover: "#F45858",
        active: "#F42A25"
      }
    },
    inputs: {
      height: "40px",
      padding: "12-16px horizontal, 8-12px vertical",
      radius: "8px",
      border: "1px solid #6D6E71",
      font: "Helvetica Regular 14px",
      states: {
        normal: { border: "#6D6E71", bg: "#FFFFFF" },
        focus: { border: "#8325E5 (2px)", bg: "#FFFFFF" },
        error: { border: "#F44336", bg: "#FFCDD2 (message)" },
        disabled: { border: "#D1D2D4", bg: "#F5F5F5" }
      }
    },
    cards: {
      padding: "24px",
      radius: "8px (Navigation), 12px (Info), 10px (Interactive)",
      shadow: "0px 2px 4px rgba(0,0,0,0.08)",
      bg: "#FFFFFF"
    }
  },
  layout: {
    spacing: {
      extraSmall: "4px",
      small: "8px",
      medium: "16px",
      large: "24px",
      extraLarge: "40px"
    },
    borderRadius: {
      buttons: "12px",
      inputs: "10px",
      cards: "16px",
      modals: "20px",
      badges: "999px (Pill)"
    }
  }
};
