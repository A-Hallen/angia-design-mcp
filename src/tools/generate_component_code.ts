import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const generateComponentCodeTool: Tool = {
  name: "generate_component_code",
  description: "Generates the JSX snippet with Tailwind CSS for a specific component, fully supporting Angia's Dark Mode.",
  inputSchema: {
    type: "object",
    properties: {
      component: { type: "string", enum: ["button", "input", "card"] },
      variant: { type: "string" }
    },
    required: ["component"]
  }
};

export const handleGenerateComponentCode = (args: any) => {
  const component = args?.component as string;
  const variant = args?.variant || "primary";

  if (component === "button") {
    let cls = "inline-flex items-center justify-center font-['Helvetica'] font-bold text-[16px] h-[48px] px-[24px] rounded-[12px] transition-all duration-200 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-[#121212]";
    if (variant === "primary") cls += " bg-[#8325E5] text-white hover:bg-[#A66CE8] active:bg-[#6C1CD3] focus:ring-[#8325E5] dark:bg-[#A974FF] dark:hover:brightness-110 dark:text-white";
    else if (variant === "secondary") cls += " bg-white text-[#8325E5] border-[2px] border-[#8325E5] hover:bg-[#F3F3F3] hover:border-[#8334EA] active:bg-[#EDEDED] active:text-[#6C1CD3] focus:ring-[#8325E5] dark:bg-transparent dark:text-[#A974FF] dark:border-[#A974FF] dark:hover:bg-[#A974FF]/10";
    else if (variant === "tertiary") cls += " bg-transparent text-[#6D6E71] hover:text-[#8C8C8C] active:text-[#545454] dark:text-[#A7A8AA] dark:hover:text-white";
    else if (variant === "destructive") cls += " bg-[#F44336] text-white hover:bg-[#F45858] active:bg-[#F42A25] focus:ring-[#F44336] dark:bg-[#F44336] dark:hover:bg-[#FF6659]";

    const jsx = "<button\n  className={`" + cls + " ${className}`}\n  {...props}\n>\n  {children}\n</button>";
    return { content: [{ type: "text", text: jsx.replace(/\\n/g, "\n") }] };
  }

  if (component === "input") {
    const icls = "h-[40px] px-[12px] rounded-[8px] border border-[#6D6E71] bg-white text-[#000000] font-['Helvetica'] text-[14px] placeholder-[#A7A8AA] outline-none transition-all focus:border-[#8325E5] focus:border-[2px] focus:px-[11px] disabled:bg-[#F5F5F5] disabled:border-[#D1D2D4] disabled:cursor-not-allowed dark:bg-[#1A1A1A] dark:border-[#6D6E71] dark:text-white dark:focus:border-[#A974FF]";
    const jsx = "<div className=\"flex flex-col gap-1.5\">\n  {label && <label className=\"text-[14px] font-bold text-[#000000] dark:text-[#FFFFFF] font-['Helvetica']\">{label}</label>}\n  <input\n    className={`" + icls + " ${error ? 'border-[#F44336] focus:border-[#F44336]' : ''} ${className}`}\n    {...props}\n  />\n  {error && <span className=\"text-[12px] text-[#F44336] mt-1\">{error}</span>}\n</div>";
    return { content: [{ type: "text", text: jsx.replace(/\\n/g, "\n") }] };
  }

  if (component === "card") {
    const isInt = variant === "interactive";
    let cls = "bg-white rounded-[12px] p-[24px] border border-transparent shadow-[0px_2px_4px_rgba(0,0,0,0.08)] dark:bg-[#1A1A1A] dark:border-[#2C2C2C] dark:shadow-[0px_2px_8px_rgba(0,0,0,0.4)]";
    if (isInt) cls += " transition-all duration-200 cursor-pointer hover:shadow-[0px_4px_12px_rgba(0,0,0,0.12)] hover:border-[#A7A8AA] dark:hover:shadow-[0px_6px_16px_rgba(0,0,0,0.6)] dark:hover:border-[#6D6E71]";
    const jsx = "<div\n  className={`" + cls + " ${className}`}\n" + (isInt ? "  onClick={onClick}\n" : "") + ">\n  {children}\n</div>";
    return { content: [{ type: "text", text: jsx.replace(/\\n/g, "\n") }] };
  }

  return { content: [{ type: "text", text: "Unknown component" }], isError: true };
};
