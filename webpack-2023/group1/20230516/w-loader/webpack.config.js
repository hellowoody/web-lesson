const {resolve} = require("path")

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"built.js",
        path:resolve(__dirname,"target"),
        clean:true
    },
    // module or loader 翻译官
    // 将非js文件“翻译”成js形式的文件
    // 因为webpack只认js语法的内容
    module:{
        rules:[
            {
                test:/\.css$/,
                // 将数组中元素倒叙的依次拿出
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
        ]
    }
}