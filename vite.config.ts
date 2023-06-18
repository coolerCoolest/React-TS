import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "src/scss/index.scss";'
      }
    }
  },
})
