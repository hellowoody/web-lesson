import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",  // 它的作用是为了将来正式打包（npm run build）时，调整打包后的路径。将默认的从根路径开始的绝对路径改成以当前目录的相对路径
  plugins: [vue()],
  resolve:{
    alias:{
      "@":resolve(__dirname,"/src")
    }
  }
})
