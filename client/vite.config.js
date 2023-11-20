import { defineConfig } from "vite";

export default defineConfig({
  // The base public path when served in production.
  base: "/",

  // The directory where the production build files will be generated.
  outDir: "dist",

  // The directory where the built files will be served from.
  assetsDir: "assets",

  // Configure your plugins.
  plugins: [],

  // Configure your server.
  server: {
    host: "0.0.0.0", //hosts vite on to local network.
    port: 8080,
    open: true,
  },

  // Configure your build.
  build: {
    target: "esnext",
    minify: "terser",
  },
});
