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
                    "css-loader",                // 翻译
                ]
            },
            // 虽然我们只用url-loader进行"翻译"，但在“翻译时”它引用了file-loader
            // npm i -D file-loader url-loader
            {
                test:/\.(jpe?g|gif|png)$/,
                type:"javascript/auto",           // 不采用新版本asset的处理模式
                loader:"url-loader",
                options:{
                    limit:5*1024,
                    name:"[name].[ext]",  // 这里ext不包含.
                    outputPath:"./img",
                    esModule:false,
                }
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