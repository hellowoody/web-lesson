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
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test:/\.csv$/,
                type:"asset/source"
            }
        ]
    },
    /*
        npm run build
        npm run start
        npm start
    */
    devServer:{
        // static:{
        //     directory:resolve(__dirname,"dist")
        // },
        static:"./dist",
        port:3000,
        open:false,
        hot:true  // hmr  
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            title:"webpack dev server"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.css"
        })
    ]
}