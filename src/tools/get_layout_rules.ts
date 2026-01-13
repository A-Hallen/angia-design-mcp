import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { designSystem } from "../design_system.js";

export const getLayoutRulesTool: Tool = {
  name: "get_layout_rules",
  description: "Get layout, spacing, shadows, and responsive guidelines.",
  inputSchema: {
    type: "object",
    properties: {}
  }
};

export const handleGetLayoutRules = () => {
  return {
    content: [{ type: "text", text: JSON.stringify(designSystem.layout, null, 2) }]
  };
};
