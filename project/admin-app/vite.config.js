import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// console.log("======> ",__dirname)
// console.log("222222======> ",resolve(__dirname,"/src"))
// /Users/admin/Documents/code/lesson/web-lesson/project/admin-app + src
/*
  "vite": "^2.6.4"
  它内容识别地址的时候 不同系统多了不通处理
  导致你在使用 import es6导入语句的时候，不同系统查找的方式不一样
*/ 
// https://vitejs.dev/config/
export default defineConfig({
  base:"./",  // 它的作用是为了将来正式打包（npm run build）时，调整打包后的路径。将默认的从根路径开始的绝对路径改成以当前目录的相对路径
  plugins: [vue()],
  resolve:{
    alias:{
      "@":resolve(__dirname,"./src")
      // "@":resolve(__dirname,"src")
    }
  }
})
