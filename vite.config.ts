/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

export default defineConfig({
  plugins: [react(), imagetools()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["react"])],
    },
  },
  base: "/",
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
