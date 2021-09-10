import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [
    vue(),
    Components({
      resolvers:[
        AntDesignVueResolver()
      ]
    })
  ],
  resolve: {
    alias:{
      '@':resolve(__dirname,"src")  // __dirname 当前配置文件所在的系统绝对路径
    }
  }
})
