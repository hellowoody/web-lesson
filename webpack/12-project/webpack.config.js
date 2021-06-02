/*
    nodejs 中默认支持commonjs导入/导出语法

    commonjs vs es6 导入/导出

    commonjs的导入 require("jquery")
    VS
    es6的导入 import "jquery"

    commonjs的导出 module.exports = {}
    VS
    es6的导出 export / exports 
*/
// commonjs  require  module.exports

const {resolve} = require("path") //nodejs处理path的专用工具包
const htmlWebpackPlugin = require("html-webpack-plugin") //引用html-webpack-plugin 插件
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    entry:"./src/index.js", // 源码目录以及入口文件 "线头"
    // 打包后的内容
    output:{
        path:resolve(__dirname,"build"),   // 支持绝对路径  d://lesson/day01/build/js/built.js
        filename:"./js/built.[name].js",
        chunkFilename:"./chunks/chunk.[name].js"
    },
    mode:"development", // 模式 development 开发模式 jquery.js ｜ production 生产模式 jquery.min.js
    //配置模块
    module:{
        // key:value 
        // 配置规则
        rules:[
            // 规则1 css 进行打包
            // {
            //     test: /\.css$/,  //配置正则表达式 用来匹配你的规则
            //     // use 有执行顺序
            //     use:[
            //         "style-loader", // 再运行style-loader
            //         "css-loader"    // 先运行css-loader
            //     ]
            // },
            // 规则2  css 进行打包 单独打包
            {
                test: /\.css$/,  //配置正则表达式 用来匹配你的规则
                // use 有执行顺序
                use:[
                    {
                        loader:miniCssExtractPlugin.loader,
                        options:{
                            publicPath:"../" , // 在打包导出的css文件内，如果遇到了相对路径，那么就在这个url前加上这个前缀 
                        }
                    },
                    "css-loader"    // 先运行css-loader
                ]
            },
            // 规则3
            {
                test: /\.(png|jpeg)$/,
                loader:"url-loader", // url-loader 在file-loader完成
                options:{
                     limit:8*1024,   
                     name:"[hash].[ext]",
                     outputPath:"./imgs",
                }
            },
            // 规则4
            {
                test: /\.html$/,
                loader:"html-loader",
                options:{
                    esModule:false // 通过配置文件告诉webpack打包图片不需要它通过es的语法单独按module模块进行打包
                }
            },
            // 规则 5 处理字体文件 (把iconfont.css 和 字体文件打包到output中js中)
            // {
            //     test:/\.ttf$/,
            //     loader:"url-loader",
            // }
            // 规则6 
            {
                test:/\.(ttf)$/,
                loader:"file-loader",
                options:{
                    // name:"[name].[ext]",
                    name:"[hash:5].[ext]",
                    outputPath:"./fonts"
                }
            }
        ]
    },
    //配置插件 它是个数组
    plugins:[
        new htmlWebpackPlugin({
            template:"./index.html", // 页面模版的相对地址
            minify:{
                collapseWhitespace:false, // 去除空格及换行
                removeComments:true, // 移除html的注释
            }
        }),
        new miniCssExtractPlugin({
            filename:"./css/built.css"  // 最终打包出的css 输出到哪个“子目录”并且文件名是什么
        }),
        new CleanWebpackPlugin()
    ],  
    devServer:{
        contentBase:resolve(__dirname,"build"),
        // 行业术语：起个服务，listen port 3000 
        port:3000,
        compress:true,
        open:false, // 服务启动后，是否开发当前操作系统的默认浏览器
        hot:true ,// hmr 启动   *.js / *.ts ｜ *.css *.html *.json
    },
    // devtool:"source-map", 
    resolve:{
        alias:{
            "@":resolve(__dirname,"src"),
        }
    },
    // js文件分割打包
    optimization:{
        splitChunks:{
            chunks:"all"
        }
    }
}