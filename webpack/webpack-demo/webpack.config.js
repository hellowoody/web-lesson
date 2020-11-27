const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"js/build.js",
        path:resolve(__dirname,"build"),
        publicPath:"./"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    // "style-loader",
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'../../'
                        }
                    },
                    "css-loader"
                ]
            },
            {
               test:/\.(jpg|png)$/,
               loader:"url-loader",
               options:{
                    limit:8 * 1024,
                    outputPath:"assets/imgs"
               }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html",
            minify:{
                collapseWhitespace:false
            }
        }),
        new MiniCssExtractPlugin({
            filename:'assets/css/build.css',
        })
    ],
    mode:"development"
}