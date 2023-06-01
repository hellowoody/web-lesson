const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:"./src/main.js",
    mode:"development",
    output:{
        clean:true,
        filename:"[name].[fullhash:6].js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ],
    devServer:{
        static:"./dist"
    },
    resolve:{
        alias:{
            "vue":"vue/dist/vue.esm-bundler.js"
        }
    }
}