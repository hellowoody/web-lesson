const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"./js/[name].[hash:6].js",
        path:resolve(__dirname,"dist"), // 绝对路径
        clean:true
    },
    devServer:{
        static:"./dist",                //这个路径是内存中的，不是“真实”生成的
        compress:true,
        port:3000,
        open:false,
        hot:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/[name].css",
            chunkFilename: "./css/[id].css",
        })
    ],
    resolve:{
        alias:{
            /*
                让 import {} from "vue"
                等效于
                import {} from "vue/dist/vue.esm-bundler.js"
            */ 
            "vue":"vue/dist/vue.esm-bundler.js",
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
            }
        ]
    }
}