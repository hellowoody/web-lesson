// cjs
const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"development",
    entry:"./src/main.js",
    output:{
        filename:"built.js",
        path:resolve(__dirname,"build")
    },
    module:{
        rules:[
            {
                test:/\.(jpg|jpeg|png|gif)$/,
                type:"asset/resource", // asset/inline asset/source asset
                generator:{
                    filename:"./assets/[name].[hash:8][ext]"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ],
    devServer:{
        port:3300,
        open:false
    }
}