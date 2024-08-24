// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: "local", // Define o comportamento do escopo dos módulos
      globalModulePaths: [/src\/styles\/global.scss$/], // Caminhos para arquivos de módulos globais
    },
    preprocessorOptions: {
      scss: {
        // Configurações adicionais para SCSS, se necessário
      },
    },
  },
});
