#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { designSystem } from "./design_system.js";
import { searchDesignSystem } from "./search.js";

const server = new Server(
  {
    name: "angia-design-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_color_palette",
        description: "Get the color palette and theme definitions (light/dark). Optional category filter.",
        inputSchema: {
          type: "object",
          properties: {
            category: {
              type: "string",
              description: "Category to filter (brand, functional, light, dark). If omitted, returns all.",
              enum: ["brand", "functional", "light", "dark"]
            }
          }
        }
      },
      {
        name: "get_typography",
        description: "Get typography rules, font families, and type scale hierarchy.",
        inputSchema: {
          type: "object",
          properties: {}
        }
      },
      {
        name: "get_component_specs",
        description: "Get design specifications for a UI component (colors, radius, states).",
        inputSchema: {
          type: "object",
          properties: {
            component: {
              type: "string",
              description: "The name of the component.",
              enum: ["buttons", "inputs", "cards"]
            }
          },
          required: ["component"]
        }
      },
      {
        name: "get_layout_rules",
        description: "Get layout, spacing, shadows, and responsive guidelines.",
        inputSchema: {
          type: "object",
          properties: {}
        }
      },
      {
        name: "search_design_system",
        description: "Search the entire design system for a keyword (e.g., 'purple', 'h1', 'card'). Returns all matching values and their paths.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "The search term."
            }
          },
          required: ["query"]
        }
      }
    ]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === "get_color_palette") {
      const category = args?.category as string | undefined;
      
      if (category === "brand") {
        return { content: [{ type: "text", text: JSON.stringify(designSystem.colors.brand, null, 2) }] };
      }
      if (category === "functional") {
        return { content: [{ type: "text", text: JSON.stringify(designSystem.colors.functional, null, 2) }] };
      }
      if (category === "light") {
        return { content: [{ type: "text", text: JSON.stringify(designSystem.themes.light, null, 2) }] };
      }
      if (category === "dark") {
        return { content: [{ type: "text", text: JSON.stringify(designSystem.themes.dark, null, 2) }] };
      }
      
      return {
        content: [{ type: "text", text: JSON.stringify({ brand: designSystem.colors.brand, themes: designSystem.themes }, null, 2) }]
      };
    }

    if (name === "get_typography") {
      return {
        content: [{ type: "text", text: JSON.stringify(designSystem.typography, null, 2) }]
      };
    }

    if (name === "get_component_specs") {
      const component = args?.component as string;
      if (component in designSystem.components) {
        return {
          content: [{ type: "text", text: JSON.stringify(designSystem.components[component as keyof typeof designSystem.components], null, 2) }]
        };
      }
       return {
            content: [{ type: "text", text: `Component '${component}' not found. Available: buttons, cards.` }],
            isError: true
          };
    }

    if (name === "get_layout_rules") {
      return {
        content: [{ type: "text", text: JSON.stringify(designSystem.layout, null, 2) }]
      };
    }

    if (name === "search_design_system") {
      const query = args?.query as string;
      if (!query) {
        return { content: [{ type: "text", text: "Please provide a query string." }], isError: true };
      }
      const results = searchDesignSystem(query);
      return {
        content: [{ 
          type: "text", 
          text: results.length > 0 
            ? JSON.stringify(results, null, 2) 
            : `No matches found for '${query}'.` 
        }]
      };
    }

    throw new Error(`Unknown tool: ${name}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [{ type: "text", text: `Error: ${errorMessage}` }],
      isError: true
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
