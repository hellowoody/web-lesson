const {resolve} = require("path")
// 安装一个插件 html-webpack-plugin 
// 把你的模版html页面输出到ouput配置的文件夹中
// 还会将导出的chunk文件自动添加到output文件夹中的html中
// 注意：webpack的插件都是构造函数
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"main.[chunkhash:6].js",
        path:resolve(__dirname,"output"),
        clean:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        })
    ]
}