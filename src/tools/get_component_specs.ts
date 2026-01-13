import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { designSystem } from "../design_system.js";

export const getComponentSpecsTool: Tool = {
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
};

export const handleGetComponentSpecs = (args: any) => {
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
};
