import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const generateComponentCodeTool: Tool = {
  name: "generate_component_code",
  description: "Generates production-ready React/Typescript (TSX) code with Tailwind CSS.",
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

    const code = "import React from 'react';\n\n" +
      "interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n" +
      "  variant?: '" + variant + "';\n" +
      "  children: React.ReactNode;\n" +
      "}\n\n" +
      "export const Button = ({ children, className = '', ...props }: ButtonProps) => {\n" +
      "  return (\n" +
      "    <button \n" +
      "      className={`" + classes + " ${className}`}" +
      "      {...props}\n" +
      "    >\n" +
      "      {children}\n" +
      "    </button>\n" +
      "  );\n" +
      "};";
      
    return { content: [{ type: "text", text: code }] };
  }

  if (component === "input") {
    const inputClasses = "h-[40px] px-[12px] rounded-[8px] border border-[#6D6E71] bg-white text-[#000000] font-['Helvetica'] text-[14px] placeholder-[#A7A8AA] outline-none transition-all focus:border-[#8325E5] focus:border-[2px] focus:px-[11px] disabled:bg-[#F5F5F5] disabled:border-[#D1D2D4] disabled:cursor-not-allowed dark:bg-[#1A1A1A] dark:border-[#6D6E71] dark:text-white dark:focus:border-[#A974FF]";
    
    const code = "import React from 'react';\n\n" +
      "interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {\n" +
      "  label?: string;\n" +
      "  error?: string;\n" +
      "}\n\n" +
      "export const Input = ({ label, error, className = '', ...props }: InputProps) => {\n" +
      "  return (\n" +
      "    <div className=\"flex flex-col gap-1.5\">\n" +
      "      {label && <label className=\"text-[14px] font-bold text-[#000000] dark:text-[#FFFFFF] font-['Helvetica']\">{label}</label>}\n" +
      "      <input \n" +
      "        className={`" + inputClasses + " ${error ? 'border-[#F44336] focus:border-[#F44336]' : ''} ${className}`}" +
      "        {...props}\n" +
      "      />\n" +
      "      {error && <span className=\"text-[12px] text-[#F44336] mt-1\">{error}</span>}\n" +
      "    </div>\n" +
      "  );\n" +
      "};";

    return { content: [{ type: "text", text: code }] };
  }

  if (component === "card") {
    const isInteractive = variant === "interactive";
    let classes = "bg-white rounded-[12px] p-[24px] border border-transparent shadow-[0px_2px_4px_rgba(0,0,0,0.08)] dark:bg-[#1A1A1A] dark:border-[#2C2C2C] dark:shadow-[0px_2px_8px_rgba(0,0,0,0.4)]";
    
    if (isInteractive) {
      classes += " transition-all duration-200 cursor-pointer hover:shadow-[0px_4px_12px_rgba(0,0,0,0.12)] hover:border-[#A7A8AA] dark:hover:shadow-[0px_6px_16px_rgba(0,0,0,0.6)] dark:hover:border-[#6D6E71]";
    }

    const interfaceDef = isInteractive 
      ? "interface CardProps {\n  children: React.ReactNode;\n  className?: string;\n  onClick?: () => void;\n}"
      : "interface CardProps {\n  children: React.ReactNode;\n  className?: string;\n}";

    const propsDef = isInteractive
      ? "({ children, className = '', onClick }: CardProps)"
      : "({ children, className = '' }: CardProps)";
      
    const onClickAttr = isInteractive ? "      onClick={onClick}\n" : "";

    const code = "import React from 'react';\n\n" +
      interfaceDef + "\n\n" +
      "export const Card = " + propsDef + " => {\n" +
      "  return (\n" +
      "    <div \n" +
      "      className={`" + classes + " ${className}`}" +
      onClickAttr +
      "    >\n" +
      "      {children}\n" +
      "    </div>\n" +
      "  );\n" +
      "};";

    return { content: [{ type: "text", text: code }] };
  }

  return { content: [{ type: "text", text: "Unknown component" }], isError: true };
};