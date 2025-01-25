// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://sample-web-app-production.up.railway.app",
  vite: {
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },

  adapter: node({
    mode: "standalone",
  }),

  server: {
    host: "0.0.0.0",
  },
});
