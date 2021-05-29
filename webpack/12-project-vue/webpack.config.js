// commonjs  导入/导出   require / module.exports
const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:"./src/js/main.js",
    output:{
        path:resolve(__dirname,"dist"), //__dirname nodejs环境里内置的一个全局变量 global 
        filename:"built.js"
    },
    mode:"development",
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html", // 页面模版的相对地址
            minify:{
                collapseWhitespace:false, // 去除空格及换行
                removeComments:true, // 移除html的注释
            }
        }),
        new MiniCssExtractPlugin({
            filename:"./css/built.css",
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:"../" , // 在打包导出的css文件内，如果遇到了相对路径，那么就在这个url前加上这个前缀 
                        }
                    },
                    "css-loader",
                ]
            }
        ]
    },
    devServer:{
        contentBase:resolve(__dirname,"dist"),
        // 行业术语：起个服务，listen port 3000 
        port:3000,
        compress:true,
        open:false, // 服务启动后，是否开发当前操作系统的默认浏览器
        hot:false ,// hmr 启动   *.js / *.ts ｜ *.css *.html *.json
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"src") //绝对路径 src
        }
    }
}