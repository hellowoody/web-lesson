const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"./js/[name].[hash].js",
        path:resolve(__dirname,"dist"),
        clean:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.css"
        })
    ],
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
                    MiniCssExtractPlugin.loader, // create <link href=?>
                    "css-loader"   // 读取common.css内容
                ]
            },
            {
                test:/\.(jpeg|png|gif)$/,
                type:"asset",
                generator:{
                    filename:"img/[name].[hash:6][ext]" // ext 自带.
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:5*1024
                    }
                }
            },
            // npm i -D html-loader
            // html-loader 并不处理图片，仅仅是处理html页面中的路径
            {
                test:/\.html$/,
                loader:"html-loader"
                // use:[
                //     "html-loader"
                // ]
                // use:[
                //     {
                //         loader:"html-loader"
                //     }
                // ]
            }
        ]
    }
}