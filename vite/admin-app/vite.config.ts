import { UserConfig } from "vite";
import {resolve} from "path";

const config :UserConfig = {
    alias:{
        '/@/':resolve(__dirname,"src")  //模仿webpack中“@”绝对路径的语法糖
    }
}

export default config ; 