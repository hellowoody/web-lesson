const {resolve,join} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:"./src/mod.ts",
    output:{
        filename:"built.js",
        path:resolve(__dirname,"build")
    },
    mode:"development",
    resolve:{
        extensions:[".tsx",".ts",".js"]  // 打包数组中的后缀名文件
    },
    module:{
        rules:[
            {
                test:/\.ts?$/,
                use:"ts-loader",  
                exclude:"/node_modules/",
            },
            {
                test:/\.(jpeg|jpg|png)$/,
                loader:"url-loader",  // 如果loader只有一个且还配置了option时，需要写成 loader:"xxx-loader"
                options:{
                    limit:1 * 1024, // 1024byte = 1kb
                    name:"[name].[ext]",
                    outputPath:"./assets/imgs"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ],
    devServer: {
        static: {
            directory: join(__dirname, 'public'),
        },
        compress: true,
        port: 3000
    },
}