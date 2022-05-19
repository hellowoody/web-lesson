const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"./js/[name].[chunkhash:6].js",
        path:resolve(__dirname,"dist"),
        clean:true
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader, // <link href="url"> url => filename
                    // "style-loader",           // 是动态加载dom  <style>source</style>
                    "css-loader",                // 翻译
                ]
            }
        ]
    },
    // plugins 虽然是数组，但是不要求顺序。
    // 因为webpack实现或处理插件时，采取了“事件注册”的方式。
    // nodejs中观察者模式 observer-pattern
    // 事件注册指的是webpack声明周期钩子函数
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.[chunkhash:6].css"
        })
    ]
}