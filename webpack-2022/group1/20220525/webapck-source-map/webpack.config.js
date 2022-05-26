const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    // mode:"production",
    output:{
        filename:"./js/[name].[hash:6].js",
        path:resolve(__dirname,"dist"),
        clean:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            title:"dev-server",
        }),
    ],
    devServer:{
        static:"./dist",
        port:3000,
        compress:true,
        open:false,
    },
    // devtool:"source-map"
    devtool:"eval-cheap-source-map",       //  mode:"development"
    // devtool:"nosources-source-map"         //  mode:"production",
}