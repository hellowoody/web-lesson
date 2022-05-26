const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:"./src/index.js",
    // mode:"development",
    mode:"production",
    output:{
        filename:"./js/[name].[hash:6].js",
        path:resolve(__dirname,"dist"),
        clean:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.css"
        }),
    ],
    devServer:{
        static:"./dist",
        compress:true,
        port:3000,
        open:false,
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader, // create <link href=?> 
                    "css-loader",                // 将common.css中内容拿出来
                ]
            },
        ]
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        }
    },
    // devtool:"source-map"
    // devtool:"eval-cheap-source-map",   // mode:"development" 
    devtool:"nosources-source-map",   // mode:"production"   
}