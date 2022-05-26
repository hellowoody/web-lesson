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
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/common.css"
        }),
    ],
    /*
        热部署（liveReload）：liveReload:true
                            liveReload 默认时true，我们平常配置webpack的基本不会将它改变
                            当src,模版页面被改变时，devServer默认会将“整个”项目进行重新构建，
                            liveReload会通过ws的方法主动通知浏览器，让浏览器重新加载页面
                

        热替换（hmr）：hot:true (面试经常问到的)
                          在devServer V4.x 之前，默认值是false
                                     V4.x 之后(v4.9.x),默认值是true
                            当src中非js文件改变时，devServer仅会将修改的文件单独重新构建，
                                                然后通过ws方式通过浏览器，在不刷新的前提下进行局部更新

                            注意：类似css文件是因为loader 中已经用accept处理过了                    
                                            
                            当src中js文件改变时，devServer默认会将“整个”项目进行重新构建，
                                                liveReload会通过ws的方法主动通知浏览器，让浏览器重新加载页面

                                               如果项修改js文件也实现hmr热替换，我们需要使用accept这个方法

                            模版文件改变时，插件实现了一部分hmr的功能，也就是后台确实将html进行更新，但是并没有通知给浏览器让其自动更新
                            


        注意：当修改webpack.config.js文件时，都不会引发自动构建或热部署
    */ 
    devServer:{
        static:"./dist",
        // static:resolve(__diranme,"dist"),
        // static:{
        //     directory:resolve(__diranme,"dist")
        // },
        compress:true, // http gzip
        port:3000,
        open:false,
        hot:true,   
        // liveReload:true
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
    devtool:"source-map"
}