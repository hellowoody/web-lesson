import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const base = "/demo/"
// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [vue()]
})
