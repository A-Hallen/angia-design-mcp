
import { designSystem } from "./design_system.js";

type SearchResult = {
  path: string;
  value: any;
};

export function searchDesignSystem(query: string): SearchResult[] {
  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase();

  function recurse(current: any, path: string) {
    if (!current) return;

    // Check if current node is a match (if it's a string or number)
    if (typeof current === "string" || typeof current === "number") {
      const strValue = String(current).toLowerCase();
      if (strValue.includes(lowerQuery)) {
        results.push({ path, value: current });
      }
      return;
    }

    // Check arrays
    if (Array.isArray(current)) {
      current.forEach((item, index) => {
        recurse(item, `${path}[${index}]`);
      });
      return;
    }

    // Check objects
    if (typeof current === "object") {
      for (const [key, value] of Object.entries(current)) {
        // If the key itself matches, add the whole object/value
        if (key.toLowerCase().includes(lowerQuery)) {
            results.push({ path: `${path}.${key}`, value: value });
        }
        
        // Recurse deeper
        recurse(value, `${path}.${key}`);
      }
    }
  }

  // Start search excluding the huge root match if query is empty (optional safeguard)
  if (!query.trim()) return [];

  recurse(designSystem, "designSystem");
  
  // Deduplicate: If we added a parent object because the key matched, 
  // we might also have added its children. 
  // For a simple implementation, we'll return all, but let's filter purely redundant subset matches if needed.
  // For now, raw results are often better for context.
  
  return results;
}
