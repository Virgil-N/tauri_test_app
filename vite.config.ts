import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// 解决了类型“ImportMeta”上不存在属性“env”报错问题
export default ({mode}) => {
  return defineConfig({
    plugins: [react()],
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  server: {
    port: 3000,
    strictPort: true,
  },
  // to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
  // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG`
  // env variables
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    // Tauri supports es2021
    target: ['es2021', 'chrome97', 'safari13'],
    // don't minify for debug builds
    minify: !loadEnv(mode, process.cwd()).TAURI_DEBUG && 'esbuild' || "terser",
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  })
}
