const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin") // webpack 插件默认导出的都是一个构造函数
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"main.[chunkhash:6].js",
        path:resolve(__dirname,"dist"),
        clean:true
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        },
        extensions:[".js",".json",".css"]
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader" // 仅 翻译
                ]
            }
        ]
    },
    // plugins并没有顺序可言，因为触发插件功能的策略采取的是观察者模式
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            minify:{
                collapseWhitespace:false,
                removeComments:true
            }
        }),
        new MiniCssExtractPlugin({
            filename:"./css/[name].css" // 命名在dist文件夹中的名字
        })
    ]
}