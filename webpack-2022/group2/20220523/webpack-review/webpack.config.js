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
    // npm i -D html-webpack-plugin
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.css"
        }),
    ],
    // npm i -D webpack-dev-server
    /*
        热部署：  webpack-dev-server 自动构建的，就相当于重新执行一遍 webpack serve
        热替换：  只更新修改的那些文件，没被修改的文件不会重新构建

        注意：当修改webpack.config.js文件时，都不会引发自动构建或热部署
    */ 
    devServer:{
        static:"./dist",
        port:3000,
        open:false,
        hot:true  // hmr
    },
    // npm i -D css-loader mini-css-extract-plugin
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader, // create <link href=?> 
                    "css-loader",                // 将common.css中内容拿出来
                ]
            },
            {
                test:/\.(jpeg|png|gif)$/,
                type:"asset",
                generator:{
                    filename:"img/[name].[hash:6][ext]"
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:5*1024
                    }
                }
            }
        ]
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        }
    },
    devtool:"source-map"
}