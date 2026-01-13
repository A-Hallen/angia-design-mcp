import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { designSystem } from "../design_system.js";

export const getColorPaletteTool: Tool = {
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
};

export const handleGetColorPalette = (args: any) => {
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
};
