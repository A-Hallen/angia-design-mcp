import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { searchDesignSystem } from "../search.js";

export const searchDesignSystemTool: Tool = {
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
};

export const handleSearchDesignSystem = (args: any) => {
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
};
