import path from "path";
import {fileURLToPath} from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";        //把html文件打包
import MiniCssExtractPlugin from "mini-css-extract-plugin"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
    entry:"./src/main",
    output:{
        filename:"built.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //use数组中loader执行顺序，是从下到上依次执行
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader, //取代style-loader，作用:提取js中的css成单独文件
                        options:{
                            publicPath:"../",
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test:/\.(jpg|png)$/, //处理图片资源
                //下载url-loader file-loader
                loader:'url-loader',
                //不配置options时 默认会把图片转为base64
                options:{
                    //图片大小小于8kb，就会被base64处理
                    //有点：减少请求数量（减轻服务器压力）
                    //缺点：图片体积会更大（文件请求速度变慢）
                    limit:5 * 1024,
                    //给图片重命名，【hash:10】取图片hash前10位，[ext]取文件原来扩展名
                    name:'[hash:10].[ext]',
                    outputPath:"./imgs",
                    esModule:false,
                },
                type:"javascript/auto"
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            minify:{
                collapseWhitespace:false, //移出空格
                removeComments:false, //移出注释
            }
        }),
        new MiniCssExtractPlugin({
            filename:'css/build.[contenthash:10].css',
        }),
    ],
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"./src")
        },
        extensions:[".js",".json"]
    },
    mode:"none"
}