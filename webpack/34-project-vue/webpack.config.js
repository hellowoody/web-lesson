// commonjs  导入 / 导出 require / module.exports
const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:"./src/js/main.js",
    output:{
        filename:"built.js",
        path:resolve(__dirname,"build") // 绝对路径 nodejs 内置全局变量  global 
    },
    mode:"development",
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/built.css"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:"../"
                        }
                    },
                    "css-loader"
                ]
            },
        ]
    },
    // 配置开发服务器
    devServer:{
        contentBase:resolve(__dirname,"dist"),
        //启个服务 listening port 3000
        port:3000,
        open:false, //每次启动自动新开一个页面
        compress:true,
        hot:false, // hmr 默认的 修改js 会重新部署，修改html 不会重新部署
    },
}