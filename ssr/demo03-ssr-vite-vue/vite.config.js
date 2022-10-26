import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const base = '/test/'
// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
})
