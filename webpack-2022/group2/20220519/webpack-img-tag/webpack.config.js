const {resolve} = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/*
    webpack v4 和 v5的初代 我们将图片加入到src中并引入，然后执行npx webpack
    会报错！报错的内容和之前我们操作css文件的内容基本一致 
    安装之前的做法： file-loader url-loader

    webpack V5 (2022) webpack 内置了对图片处理的loader，执行npx webpack 就不会报错
    不会报错！因为最新这版webpack内置相关loader
    注意：内置的loader是webpack自己实现的，并不是把之前的file-loader url-loader直接加进来

*/

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"./js/[name].[chunkhash:6].js",
        assetModuleFilename:"./imgs/[name].[hash:8][ext]",
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
            {
                test:/\.(jpe?g|png|gif)$/,
                type:"asset/resource",   // 将图片文件移到dist目录中
                generator:{
                    filename:"img/[name].[contenthash:6][ext]"
                }
            },
            {
                test:/\.(txt|csv)$/,
                type:"asset/source"
            },
            {
                // html-loader 可以将html中img src的路径进行转化
                // 而且不需要安装file-loader
                test:/\.html$/,
                loader:"html-loader",
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
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.[chunkhash:6].css"
        })
    ]
}