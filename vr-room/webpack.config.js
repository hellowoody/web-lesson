// commonjs
// webpack配置文件目的导出一个对象
const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// __dirname CommonJS包管理中 默认提供的一个全局对象，这个值是当前文件所在文件夹的绝对路径
module.exports = {
    entry:"./src/main.ts",
    output:{
        filename:"built.js",
        path:resolve(__dirname,"build") // 绝对路径
    },
    mode:"development", // none | development | production
    // webpack的module模块是把非js后缀的文件，让它能在打包过程中合理运行
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:"ts-loader", // .ts -> .js
                exclude:"/node_modules/"
            },
            {
                test:/\.(jpeg|png|gif)$/,
                type:"asset/resource", // asset/resouce asset/inline asset/source  asset
                generator:{
                    filename:"./assets/imgs/[name].[hash:6][ext]"
                }
            }
        ]
    },
    resolve:{
        // 扩展名规则：当打包过程中遇到没有后缀名的文件，会读取extentions的数组，
        // 从左往右一次就“试”xxx.ts , xxx.js 
        extensions:[".ts",".js"] 
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ],
    devServer:{
        static:"./build", // static的路径是"内存"中的路径
        port:3000,
        open:false
    }
}