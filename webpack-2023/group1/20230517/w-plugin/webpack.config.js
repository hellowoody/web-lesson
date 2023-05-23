const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"utils.[fullhash:6].js",
        path:resolve(__dirname,"output"),
        clean:true
    },
    module:{
        rules:[
            {
                // test 正则 include 包含 exclude 除此之外
                // test:/\.css$/,
                include:resolve(__dirname,"src/css"),
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader:"css-loader",
                    }
                ]
            }
        ]
    },
    // 插件 不仅要安装，也需要require引用
    // 引用的变量 一般是构造器
    // plugins 的值是数组，并且跟顺序无关
    // plugins 本质是观察者模式，将数组中的元素依次“注册”，待观察者该触发依次触发
    plugins:[
        new HtmlWebpackPlugin({
            template:resolve(__dirname,"public/index.html"),
            minify:{
                collapseWhitespace:false,
                removeComments:false
            },
            title:"xxxxx plugin"
        }), // 该插件在output目录中自动生成html页面
        new MiniCssExtractPlugin({
            filename:"./css/index.[fullhash:6].css"
        })
    ]
}