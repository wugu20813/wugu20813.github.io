import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "client", "public", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    // allow external hosts in container/remote environments and
    // configure HMR to use wss with the same host/port as the server
    host: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    hmr:
      process.env.NODE_ENV !== "production"
        ? {
            protocol: "wss",
            host: process.env.HOST || "localhost",
            port: Number(process.env.PORT || 5000),
          }
        : undefined,
  },
});
