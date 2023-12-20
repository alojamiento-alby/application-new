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
  // ATTENTION:
  // With custom domain only a slash is needed
  // Using GH Pages, the entire repository name is required
  base: "/application-new/",
  // base: "/",
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
