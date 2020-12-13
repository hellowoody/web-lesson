import { UserConfig } from 'vite'
import { resolve}  from 'path'

const config: UserConfig = {
  base:"./",
  optimizeDeps: {
    include: [
      '@ant-design/colors',
      // '@ant-design-vue/use/es/useForm/index.js'
      'ant-design-vue/es/date-picker/locale/zh_CN',
    ],

  },
  alias:{
    '/@/' : resolve(__dirname,'src')
  }
}


export default config