# Angia Design System MCP Server

## Project Overview

`angia-design-mcp` is a Model Context Protocol (MCP) server that provides programmatic access to the Angia Web Design System V1. It acts as a bridge between the official design guidelines and AI assistants, enabling them to retrieve accurate design tokens (colors, typography, spacing) and component specifications to generate consistent frontend code.

The project is built with **Node.js** and **TypeScript**, utilizing the `@modelcontextprotocol/sdk`.

## Architecture

*   **Entry Point:** `src/index.ts` initializes the MCP server, defines the available tools, and handles incoming requests.
*   **Data Source:** `src/design_system.ts` acts as the single source of truth, containing a static object `designSystem` with all design rules (colors, fonts, layout, component specs).
*   **Protocol:** Uses `StdioServerTransport` for communication, making it compatible with MCP clients like Windsurf, Cursor, and others.

## Building and Running

### Prerequisites
*   Node.js installed.

### Commands
*   **Install Dependencies:**
    ```bash
    npm install
    ```
*   **Build Project:**
    Compiles TypeScript to JavaScript in the `dist/` folder.
    ```bash
    npm run build
    ```
*   **Start Server:**
    Runs the compiled server.
    ```bash
    npm start
    ```

## Available MCP Tools

The server exposes the following tools to the AI client:

*   `get_color_palette(category?: string)`: Returns color definitions. Supports filtering by category (primary, secondary, functional, backgrounds, text, borders, darkMode).
*   `get_typography()`: Returns font families and the type scale hierarchy.
*   `get_component_specs(component: string)`: Returns specific design specs for UI components (buttons, inputs, cards).
*   `get_layout_rules()`: Returns spacing and border radius guidelines.

## Development Conventions

*   **Language:** TypeScript.
*   **Schemas:** Uses `zod` for input validation although tool schemas are currently defined directly in the tool definitions in `index.ts`.
*   **Error Handling:** The server wraps tool execution in try/catch blocks and returns standard MCP error responses when exceptions occur or invalid arguments are provided.
*   **Configuration:** The project includes an example MCP config in `mcp-config-example.json` showing how to register this server in an MCP client configuration.

## Key Files

*   `src/index.ts`: Main server implementation.
*   `src/design_system.ts`: Design tokens and rules data.
*   `package.json`: Project dependencies and scripts.
*   `mcp-config-example.json`: Example configuration for integrating this server.
*   `files/Angia manual de diseño.pdf`: The original PDF source of the design manual (for reference).
