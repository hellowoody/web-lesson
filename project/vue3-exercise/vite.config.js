import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [vue()],
  resolve: {
    alias:{
      '@':resolve(__dirname,"src")  // __dirname 当前配置文件所在的系统绝对路径
    }
  }
})
