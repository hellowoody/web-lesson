const path = require("path")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"main.[chunkhash:6].js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            // handle css 处理样式
            {
                // test:/\.css$/,  // 正则
                include:path.resolve(__dirname,"src","css"),         // 绝对路径
                // use 执行数组中元素时 是有顺序的，"从下往上"执行
                use:[
                    /*
                        1. document.createElement("style")   <style></style>
                        2. 将css-loader中读取出来的内容，追加到刚刚的空标签中
                            <style>
                            * {    color:red; }
                            </style>
                        3. 将创建style 追加到document.head中
                    */
                    "style-loader",
                    "css-loader"    //只解决“翻译”问题，仅仅把.css文件读取出来然后合理地放在js文件里
                ]
            }
        ]
    },
    resolve:{
        alias:{
            // 你可以在src文件夹中用@来代替一段绝对路径
            "@":path.resolve(__dirname,"src")    //绝对路径
        },
        // webpack 处理导入/引用语句时，如果没有给后缀名，
        // 那么会按数组中，从左 -》右的顺序 依此尝试查找 
        extensions:[".js",".json"] 
    }
}