const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log("\x1b[36m%s\x1b[0m", "=== Asistente de Configuración de Angia Design MCP ===");

// 1. Instalar y Construir
try {
  console.log("📦 Instalando dependencias...");
  execSync('npm install', { stdio: 'inherit' });
  
  console.log("🔨 Construyendo el proyecto...");
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error("\x1b[31m%s\x1b[0m", "❌ Error durante la instalación/construcción.");
  process.exit(1);
}

// 2. Obtener ruta absoluta del ejecutable
const scriptPath = path.resolve(__dirname, 'dist/index.js');
const command = 'node';

// 3. Generar Configuración JSON
const config = {
  "mcpServers": {
    "angia-design": {
      "command": command,
      "args": [scriptPath],
      "env": {}
    }
  }
};

console.log("\n\x1b[32m%s\x1b[0m", "✅ ¡Listo! Copia el siguiente bloque en tu configuración de Windsurf/Cursor:");
console.log("\x1b[33m%s\x1b[0m", "=================================================================");
console.log(JSON.stringify(config, null, 2));
console.log("\x1b[33m%s\x1b[0m", "=================================================================");

console.log("\n📍 Archivo de configuración usualmente ubicado en:");
console.log("   Windows: %APPDATA%\Windsurf\Config\mcp_config.json");
console.log("   Mac/Linux: ~/.codeium/windsurf/mcp_config.json");
