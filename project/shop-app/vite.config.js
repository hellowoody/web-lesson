import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from "path"
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [vue()],
  resolve:{
    alias:{
      // "@":当前的绝对路径+"src"
      // "@":path.resolve(__dirname,"src")
      "@":resolve(__dirname,"src")
    }
  }
})
