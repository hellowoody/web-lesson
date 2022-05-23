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
            },
            /*
                asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
                asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
                asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
                asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。
            */
            // {
            //     // test:/\.(jpg|jpeg|png|gif)$/,
            //     test:/\.(jpe?g|png|gif)$/,
            //     type:"asset/resource",
            //     generator:{
            //         filename:"img/[name].[hash:6][ext]" // ext .js .css .png
            //     }
            // }
            // {
            //     // test:/\.(jpg|jpeg|png|gif)$/,
            //     test:/\.(jpe?g|png|gif)$/,
            //     type:"asset/inline",  // 将图片变成base64 字符串
            // }
            {
                test:/\.(jpe?g|png|gif)$/,
                type:"asset",   // webpack 会根据图片的大小选择采用resource或inline策略
                parser:{
                    dataUrlCondition:{
                        maxSize:5*1024   // 5KB  注意这里单位是字节Byte
                    }
                },
                generator:{
                    filename:"img/[name].[hash:6][ext]"
                }
            },
            {
                test:/\.(csv|txt|sql)$/,
                type:"asset/source"
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