import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
    entry:"./src/main",
    output:{
        filename:"built.js",
    },
    module:{
        rules:[
            {
                // test:/\.css$/,
                include:path.resolve(__dirname,"./src/css"),
                //use数组中loader执行顺序，是从下到上依次执行
                use:[
                    "style-loader", //创建<style>标签，将js中样式插入进行，添加到head中
                    {
                        loader:"css-loader",
                    }
                ]
            }
        ]
    },
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"./src")
        },
        extensions:[".js",".json"]
    },
    mode:"none"
}