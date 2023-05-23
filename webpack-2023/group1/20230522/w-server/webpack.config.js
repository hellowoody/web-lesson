const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        clean:true,
        filename:"index.[fullhash:6].js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"./common.css"
        }),
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ],
    devServer:{
        host: '0.0.0.0',
        static: './dist',  // static 指向的目录不是物理上的某个文件下，而是指向运行时内存中的目录
        open:true,
        port:3000,
        compress:true,
        hot:true
        /*

        热部署（liveReload）
            webpack v4 v5 默认开启热部署
            当src目录中任何文件被修改，整个项目重新打包，浏览器窗口会刷新转一下

        热替换（hmr）（hot m replace） 

            webpack v4.9 之前 hmr默认不开启
            webpack v4.9 之后 hmr默认开启
            
            当src目录中非js文件被修改，只会替换你改变的那个非js文件，浏览器窗口不会刷新
            如果想让src中的js也能hmr，需要在js文件最后面加上下面的代码

            
            if(import.meta.webpackHot){
                console.log("===== hmr ok了 ========")
                import.meta.webpackHot.accept(error => {
                    console.log("hmr 替换失败xxxxx",error)
                })
            }

            只在入口页面增加hmr设置

             if(import.meta.webpackHot){
                console.log("===== hmr ok了 ========")
                import.meta.webpackHot.accept(error => {
                    console.log("hmr 替换失败xxxxx",error)
                })

                import.meta.webpackHot.accept("其他js文件的路径",error => {
                    console.log("hmr 替换失败xxxxx",error)
                })
            }
        */
    }
}

