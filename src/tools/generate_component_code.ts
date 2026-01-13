import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const generateComponentCodeTool: Tool = {
  name: "generate_component_code",
  description: "Generates the JSX snippet with Tailwind CSS for a specific component, fully supporting Angia's Dark Mode.",
  inputSchema: {
    type: "object",
    properties: {
      component: { type: "string", enum: ["button", "input", "card", "header", "sidebar"] },
      variant: { type: "string" }
    },
    required: ["component"]
  }
};

const generateButtonCode = (variant: string) => {
  let classes = "inline-flex items-center justify-center font-['Helvetica'] font-bold text-[16px] h-[48px] px-[24px] rounded-[12px] transition-all duration-200 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-[#121212]";
  
  if (variant === "primary") {
     classes += " bg-[#8325E5] text-white hover:bg-[#A66CE8] active:bg-[#6C1CD3] focus:ring-[#8325E5] dark:bg-[#A974FF] dark:hover:brightness-110 dark:text-[#121212] dark:text-white";
  } else if (variant === "secondary") {
     classes += " bg-white text-[#8325E5] border-[2px] border-[#8325E5] hover:bg-[#F3F3F3] hover:border-[#8334EA] active:bg-[#EDEDED] active:text-[#6C1CD3] focus:ring-[#8325E5] dark:bg-transparent dark:text-[#A974FF] dark:border-[#A974FF] dark:hover:bg-[#A974FF]/10";
  } else if (variant === "tertiary") {
     classes += " bg-transparent text-[#6D6E71] hover:text-[#8C8C8C] active:text-[#545454] dark:text-[#A7A8AA] dark:hover:text-white";
  } else if (variant === "destructive") {
     classes += " bg-[#F44336] text-white hover:bg-[#F45858] active:bg-[#F42A25] focus:ring-[#F44336] dark:bg-[#F44336] dark:hover:bg-[#FF6659]";
  }

  const lines = [
    '<button',
    '  className={`' + classes + ' ${className}`}',
    '  {...props}',
    '>',
    '  {children}',
    '</button>'
  ];
    
  return lines.join('\n');
};

const generateInputCode = () => {
  const icls = "h-[40px] px-[12px] rounded-[8px] border border-[#6D6E71] bg-white text-[#000000] font-['Helvetica'] text-[14px] placeholder-[#A7A8AA] outline-none transition-all focus:border-[#8325E5] focus:border-[2px] focus:px-[11px] disabled:bg-[#F5F5F5] disabled:border-[#D1D2D4] disabled:cursor-not-allowed dark:bg-[#1A1A1A] dark:border-[#6D6E71] dark:text-white dark:focus:border-[#A974FF]";
  
  const lines = [
    '<div className="flex flex-col gap-1.5">',
    '  {label && <label className="text-[14px] font-bold text-[#000000] dark:text-[#FFFFFF] font-[\'Helvetica\']">{label}</label>}',
    '  <input',
    '    className={`' + icls + ' ${error ? \'border-[#F44336] focus:border-[#F44336]\': \'\' } ${className}`}',
    '    {...props}',
    '  />',
    '  {error && <span className="text-[12px] text-[#F44336] mt-1">{error}</span>}',
    '</div>'
  ];
    
  return lines.join('\n');
};

const generateCardCode = (variant: string) => {
  const isInt = variant === "interactive";
  let cls = "bg-white rounded-[12px] p-[24px] border border-transparent shadow-[0px_2px_4px_rgba(0,0,0,0.08)] dark:bg-[#1A1A1A] dark:border-[#2C2C2C] dark:shadow-[0px_2px_8px_rgba(0,0,0,0.4)]";
  
  if (isInt) {
    cls += " transition-all duration-200 cursor-pointer hover:shadow-[0px_4px_12px_rgba(0,0,0,0.12)] hover:border-[#A7A8AA] dark:hover:shadow-[0px_6px_16px_rgba(0,0,0,0.6)] dark:hover:border-[#6D6E71]";
  }
  
  const lines = [
    '<div',
    '  className={`' + cls + ' ${className}`}',
    isInt ? '  onClick={onClick}' : '',
    '>',
    '  {children}',
    '</div>'
  ];
    
  return lines.filter(Boolean).join('\n');
};

const generateHeaderCode = () => {
  const hcls = "h-[64px] w-full flex items-center justify-between px-6 bg-[#F5F5F5] dark:bg-[#121212] border-b border-transparent dark:border-[#2C2C2C] sticky top-0 z-50";
  
  const lines = [
    '<header className={`' + hcls + ' ${className}`}>',
    '  <div className="flex items-center">',
    '    {/* Logo Placeholder (120px) */}',
    '    <div className="w-[120px] h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>',
    '  </div>',
    '  <div className="flex items-center gap-4">',
    '    {/* User Profile (32px) */}',
    '    <div className="w-[32px] h-[32px] rounded-full bg-[#8325E5] dark:bg-[#A974FF]"></div>',
    '  </div>',
    '</header>'
  ];
    
  return lines.join('\n');
};

const generateSidebarCode = () => {
  const scls = "h-screen w-[240px] flex flex-col bg-gradient-to-b from-[#8325E5] to-[#632FE1] text-white fixed left-0 top-0 overflow-y-auto z-40";
  const icls = "flex items-center gap-[12px] px-[16px] py-[12px] cursor-pointer transition-colors duration-200 hover:bg-white/10 active:bg-white/20";
  
  const lines = [
    '<aside className={`' + scls + ' ${className}`}>',
    '  <div className="p-6">',
    '    {/* Sidebar Logo Area */}',
    '    <div className="h-8 w-24 bg-white/20 rounded mb-8"></div>',
    '  </div>',
    '  <nav className="flex-1 flex flex-col">',
    '    <div className="' + icls + '">',
    '      <span className="w-[24px] h-[24px] bg-white/50 rounded-sm"></span>',
    '      <span className="font-[\'Helvetica\'] font-medium">Dashboard</span>',
    '    </div>',
    '    <div className="' + icls + ' bg-white/20">',
    '      <span className="w-[24px] h-[24px] bg-white rounded-sm"></span>',
    '      <span className="font-[\'Helvetica\'] font-bold">Active Item</span>',
    '    </div>',
    '  </nav>',
    '</aside>'
  ];
    
  return lines.join('\n');
};

export const handleGenerateComponentCode = (args: any) => {
  const component = args?.component as string;
  const variant = args?.variant || "primary";
  let code = "";

  switch (component) {
    case "button":
      code = generateButtonCode(variant);
      break;
    case "input":
      code = generateInputCode();
      break;
    case "card":
      code = generateCardCode(variant);
      break;
    case "header":
      code = generateHeaderCode();
      break;
    case "sidebar":
      code = generateSidebarCode();
      break;
    default:
      return { content: [{ type: "text", text: `Component '${component}' not supported yet.` }], isError: true };
  }

  // Use replace to ensure the literal \n string becomes a real newline in the output content
  return { content: [{ type: "text", text: code.replace(/\\n/g, "\n") }] };
};