const {resolve} = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"./js/[name].[fullhash:6].js",
        path:resolve(__dirname,"dist"),
        clean:true
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        },
    },
    module:{
        rules:[
            // handle css
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            // handle image
            {
                test:/\.(jpe?g|png|webp)$/,
                type:"asset",  // 判断 resource和inline
                generator:{
                    filename:"imgs/[name].[contenthash:6][ext]"
                },
                parser:{
                    dataUrlCondition:{
                        maxSize: 19*1024 // maxSize 是byte 字节 
                    }
                }
            },
            // handle other file
            {
                test:/\.(txt|csv)$/,
                type:"asset/source"
            },
            // handle html
            {
                test:/\.html?$/,
                loader:"html-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.[fullhash:6].css"
        })
    ]
}