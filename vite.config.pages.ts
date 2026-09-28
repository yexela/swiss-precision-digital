// Static build for GitHub Pages (used only by .github/workflows/pages.yml).
// Lovable keeps using vite.config.ts.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true, failOnError: true },
  },
});
