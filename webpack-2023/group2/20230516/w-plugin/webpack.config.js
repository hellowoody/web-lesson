const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
    mode:"development",
    output:{
        filename:"built.[fullhash:6].js",
        path:resolve(__dirname,"target"),
        clean:true
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
    // 插件的数组不讲究顺序，数组中的每个元素都会被观察者模式中合适时进行触发
    plugins:[
        new HtmlWebpackPlugin({
            template:resolve(__dirname,"public/index.html"),
            minify:{
                collapseWhitespace:false,
                removeComments:true
            },
            title:"xxxxxxx"
        }),
        new MiniCssExtractPlugin({
            filename:"./css/[name].css"
        })
    ],
}