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
        description: "Get the color palette of the Angia Design System. Optional category filter.",
        inputSchema: {
          type: "object",
          properties: {
            category: {
              type: "string",
              description: "Category to filter colors (primary, secondary, functional, backgrounds, text, borders). If omitted, returns all.",
              enum: ["primary", "secondary", "functional", "backgrounds", "text", "borders", "darkMode"]
            }
          }
        }
      },
      {
        name: "get_typography",
        description: "Get typography rules, font families, and type scale.",
        inputSchema: {
          type: "object",
          properties: {}
        }
      },
      {
        name: "get_component_specs",
        description: "Get design specifications for a specific UI component.",
        inputSchema: {
          type: "object",
          properties: {
            component: {
              type: "string",
              description: "The name of the component to retrieve specs for.",
              enum: ["buttons", "inputs", "cards"]
            }
          },
          required: ["component"]
        }
      },
      {
        name: "get_layout_rules",
        description: "Get layout, spacing, and border radius guidelines.",
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
      if (category) {
        if (category in designSystem.colors) {
          return {
            content: [{ type: "text", text: JSON.stringify(designSystem.colors[category as keyof typeof designSystem.colors], null, 2) }]
          };
        } else {
           return {
            content: [{ type: "text", text: `Category '${category}' not found. Available: primary, secondary, functional, backgrounds, text, borders, darkMode.` }],
            isError: true
          };
        }
      }
      return {
        content: [{ type: "text", text: JSON.stringify(designSystem.colors, null, 2) }]
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
            content: [{ type: "text", text: `Component '${component}' not found. Available: buttons, inputs, cards.` }],
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
