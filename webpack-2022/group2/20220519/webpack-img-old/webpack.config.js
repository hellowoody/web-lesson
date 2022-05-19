const {resolve} = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
        },
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            /*
                在之前版本中，只要是处理文本文件都需要 file-loader
                处理图片的loader是url-loader
                npm i -D file-loader url-loader
            */
            // {
            //     test:/\.(jpe?g|png|gif)$/,
            //     use:[
            //         {
            //             loader:"url-loader",
            //             options:{
            //                 limit:5*1024,
            //                 outputPath:"./img",
            //                 name:"[name].[ext]", // 注意 使用loader时 ext是不带.的
            //                 esModule:false
            //             }
            //         },
            //     ],
            //     type:"javascript/auto", // 不用v5内置的处理方式
            // },
            {
                test:/\.(jpe?g|png|gif)$/,
                loader:"url-loader",
                options:{
                    limit:5*1024,
                    outputPath:"./img",
                    name:"[name].[ext]", // 注意 使用loader时 ext是不带.的
                    esModule:false
                },
                type:"javascript/auto", // 不用v5内置的处理方式
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.[chunkhash:6].css"
        })
    ]
}