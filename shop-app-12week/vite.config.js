import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath,URL} from "url"
// ESM 中如何获取文件夹绝对路径？
// __dirname commonjs
// ESM 构造 __dirname 在实际测试时发现 __dirname可以打印
// console.log(new URL("./src",import.meta.url))
// console.log(fileURLToPath(new URL("./src",import.meta.url)))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      // "@":"项目文件夹中src的绝对路径"
      // "@":__dirname+"/src"
      "@":fileURLToPath(new URL("./src",import.meta.url))
    }
  },
  server:{
    host:"0.0.0.0"
  }
})
