#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// Tools
import { getColorPaletteTool, handleGetColorPalette } from "./tools/get_color_palette.js";
import { getTypographyTool, handleGetTypography } from "./tools/get_typography.js";
import { getComponentSpecsTool, handleGetComponentSpecs } from "./tools/get_component_specs.js";
import { getLayoutRulesTool, handleGetLayoutRules } from "./tools/get_layout_rules.js";
import { searchDesignSystemTool, handleSearchDesignSystem } from "./tools/search_design_system.js";
import { generateComponentCodeTool, handleGenerateComponentCode } from "./tools/generate_component_code.js";

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
      getColorPaletteTool,
      getTypographyTool,
      getComponentSpecsTool,
      getLayoutRulesTool,
      searchDesignSystemTool,
      generateComponentCodeTool
    ]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "get_color_palette":
        return handleGetColorPalette(args);
      case "get_typography":
        return handleGetTypography();
      case "get_component_specs":
        return handleGetComponentSpecs(args);
      case "get_layout_rules":
        return handleGetLayoutRules();
      case "search_design_system":
        return handleSearchDesignSystem(args);
      case "generate_component_code":
        return handleGenerateComponentCode(args);
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
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