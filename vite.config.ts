import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// 解决了类型“ImportMeta”上不存在属性“env”报错问题
export default ({ mode }) => {
  return defineConfig({
    plugins: [react(), eslintPlugin()],
    base: "/test_app/",
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    assetsInclude: ["**/*.jpg"],
    // prevent vite from obscuring rust errors
    clearScreen: false,
    // Tauri expects a fixed port, fail if that port is not available
    server: {
      port: 3000,
      strictPort: true,
      // watch: {
      //   usePolling: true,
      // },
    },
    // to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
    // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG`
    // env variables
    envPrefix: ["VITE_", "TAURI_"],
    build: {
      // Tauri supports es2021
      target: ["es2021", "chrome97", "safari13"],
      // don't minify for debug builds
      minify:
        (!loadEnv(mode, process.cwd()).TAURI_DEBUG && "esbuild") || "terser",
      // produce sourcemaps for debug builds
      sourcemap: !!loadEnv(mode, process.cwd()).TAURI_DEBUG,
      assetsInlineLimit: 1024 * 10,
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  });
};
