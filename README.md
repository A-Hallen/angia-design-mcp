# Angia Design System MCP Server

Este es un servidor MCP (Model Context Protocol) que contiene todas las reglas, colores y especificaciones del Manual de Diseño Web de Angia V1.

Permite a asistentes de IA (como Windsurf o Cursor) acceder a la información oficial de diseño para generar código frontend consistente.

## Instalación para el equipo

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd angia-design-mcp
   ```

2. **Instalar dependencias y construir:**
   ```bash
   npm install
   npm run build
   ```

3. **Configurar en Windsurf/Cursor:**

   Abre tu archivo de configuración MCP y añade lo siguiente.
   
   **Nota:** Asegúrate de reemplazar `TU_USUARIO` por tu usuario real de Windows/Mac y verificar la ruta.

   ```json
   {
     "mcpServers": {
       "angia-design": {
         "command": "node",
         "args": [
           "/ruta/absoluta/hacia/angia-design-mcp/dist/index.js"
         ],
         "env": {}
       }
     }
   }
   ```

## Capacidades

El servidor ofrece las siguientes herramientas a la IA:

- `get_color_palette`: Obtiene colores hexadecimales y sus usos (Primary, Dark Mode, Functional, etc.).
- `get_typography`: Reglas de fuentes, tamaños y pesos.
- `get_component_specs`: Specs técnicas para Botones, Inputs y Cards.
- `get_layout_rules`: Espaciados, radios de borde y sombras.
