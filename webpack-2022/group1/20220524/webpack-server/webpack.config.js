const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"./js/[name].[hash:6].js",
        path:resolve(__dirname,"dist"),
        clean:true
    },
    // npm i -D html-webpack-plugin
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            title:"dev-server",
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.css"
        })
    ],
    // npm i -D webpack-dev-server
    /*
        liveReload热部署：只要我们修改非webpack.config.js,
                       那么dev-server会自动将“整个”项目进行重新构建以及发布

        hot热替换:
                1.修改src文件夹中非js文件，充分体现了hmr热替换特点：仅将被修改的文件进行构建再替换到浏览器中
                2.修改非src中的文件，例如模板页面时，根据热替换的优化性能的特点，页面是没有变化的。
                3.修改src中js文件时，

        devServer 并不是将“真实”dist文件夹发布，而是将构建出来的内容放在内存之中，
                  然后将内存中的内容进行发布
    */
    devServer:{
        static:"./dist",
        // static:{
        //     directory:resolve(__dirname,"dist")
        // },
        port:3000,
        compress:true,
        open:false,
        hot:true,          // 热替换 hmr  hot module replacement
        // liveReload:true  // 热部署
    },
    module:{
        // npm i -D css-loader mini-css-extract-plugin
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    }
}