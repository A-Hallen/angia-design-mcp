import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { designSystem } from "../design_system.js";

export const getTypographyTool: Tool = {
  name: "get_typography",
  description: "Get typography rules, font families, and type scale hierarchy.",
  inputSchema: {
    type: "object",
    properties: {}
  }
};

export const handleGetTypography = () => {
  return {
    content: [{ type: "text", text: JSON.stringify(designSystem.typography, null, 2) }]
  };
};
