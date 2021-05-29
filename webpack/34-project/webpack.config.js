/*
    es6 语法 import / export
    
    vs

    commonjs 语法  require / module.exports
*/

const {resolve} = require("path") // nodejs自带的路径工具包
const htmlWebpackPlugin = require("html-webpack-plugin")  // 将html打包插件导入进来
const miniCssExtractPlugin = require("mini-css-extract-plugin") // 将css独立打包的插件导入进来
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    entry:"./src/index.js", // 源码的入口文件 "线头"
    // 打包后出口
    output:{
        path:resolve(__dirname,"dist"), //打包后的路径，绝对路径
        filename:"./js/built.[name].js", //打包后的js文件名
        chunkFilename:"./chunks/chunk.[name].js"
    },
    mode:"development", // 开发模式 development jquery.js ｜ 生产模式  production jquery.min.js
    // 插件配置
    plugins:[
        new htmlWebpackPlugin({
            template:"./index.html",
            minify:{
                collapseWhitespace:false, //移除换行/空格
                removeComments:true, // 移除注释
            }
        }),
        new miniCssExtractPlugin({
            filename:"./css/built.css"
        }),
        new CleanWebpackPlugin()
    ],
    // 模块配置
    module:{
        rules:[
            // 规则1
            // {
            //     test: /\.css$/, //符合这个规则条件的正则表达式
            //     // use 中用的模块 是讲究顺序
            //     use:[
            //         "style-loader",
            //         "css-loader"
            //     ]
            // },
            // 规则2
            {
                test: /\.css$/, //符合这个规则条件的正则表达式
                // use 中用的模块 是讲究顺序
                use:[
                    {
                        loader:miniCssExtractPlugin.loader,
                        options:{
                            publicPath:"../"
                        }
                    },
                    "css-loader"
                ]
            },
            // 规则3 打包图片
            {
                test: /\.(jpeg|png)$/,
                // 什么时候用use ，是当test过滤完后，要用不止一种的模块loader处理时，需要使用
                // 如果你需要使用一种loader，没有必要use
                loader:"url-loader",
                options:{
                    limit: 3 * 1024,
                    name:'[hash:5].[ext]',
                    // name:'[hash].[ext]',
                    outputPath:"./imgs"
                }
            },
            // 规则4 让html模板中的图片正常打包
            {
                test:/\.html$/,
                loader:"html-loader",
                options:{
                    esModule:false
                }
            },
            // 规则5 处理ttf格式的文件
            {
                test:/\.ttf$/,
                loader:"file-loader",
                options:{
                    name:"[name].[ext]",
                    outputPath:"./fonts"
                }
            }
        ]
    },
    // 配置开发服务器
    devServer:{
        contentBase:resolve(__dirname,"dist"),
        //启个服务 listening port 3000
        port:3000,
        open:false, //每次启动自动新开一个页面
        compress:true,
        hot:true, // hmr 默认的 修改js 会重新部署，修改html 不会重新部署
    },
    // devtool:"source-map",
    resolve:{
        alias:{
            "@":resolve(__dirname,"src"), //获取绝对路径
        }
    },
    optimization:{
        splitChunks:{
            chunks:"all"
        }
    }
}   