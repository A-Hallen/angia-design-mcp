# Angia Design System MCP Server

Este servidor permite que Windsurf, Cursor y otros agentes de IA accedan instantáneamente a los colores, tipografía y especificaciones del Manual de Diseño de Angia V1.

## Instalación (La forma más fácil)

Copia y pega este bloque en tu archivo de configuración de MCP (ej. `mcp_config.json`):

```json
{
  "mcpServers": {
    "angia-design": {
      "command": "npx",
      "args": ["-y", "github:A-Hallen/angia-design-mcp"],
      "env": {}
    }
  }
}
```

## ¿Qué puede hacer la IA con esto?

Una vez instalado, el asistente tendrá superpoderes de diseño:

- **Colores:** `get_color_palette` (Hexadecimales oficiales, modo oscuro y usos).
- **Tipografía:** `get_typography` (Fuentes Acid Grotesk, tamaños y pesos).
- **Componentes:** `get_component_specs` (Especificaciones para Botones, Inputs y Cards).
- **Layout:** `get_layout_rules` (Espaciados y radios de borde).

---
*Desarrollado para el equipo de Angia.*