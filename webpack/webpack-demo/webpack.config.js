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
                    name:'[hash:10].[ext]',
                    outputPath:"assets/imgs"
               }
            },
            {
                test:/\.html$/,
                loader:"html-loader"
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
    mode:"development",
    devtool:'source-map',
    resolve:{
        alias:{
            "@":resolve(__dirname,"./src")
        }
    },
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,  //启动gzip压缩
        port:3000,
        // open:true, //自动开发默认浏览器
        hot:true //开启hmr服务
    },
    optimization:{
        //split 打包
        splitChunks:{
            chunks:'all',
        }
    },
}