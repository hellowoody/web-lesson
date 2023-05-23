const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {resolve} = require("path")

module.exports = {
    mode:"development",
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        }]
    },
    plugins:[
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        },
        extensions:[".js",".json",".vue"]
    }
}