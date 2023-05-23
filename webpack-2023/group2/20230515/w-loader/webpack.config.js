const {resolve} = require("path")

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"built.js",
        path:resolve(__dirname,"build")
    },
    module:{
        rules:[
            // 将css翻译成js识别的
            {
                // test:/\.css$/,
                include:resolve(__dirname,"src/css"),
                // exclude:""
                // use中的数组元素时讲究顺序的，
                // webpack会按倒叙依次使用use中的元素
                use:[
                    // 第二步：将第一步翻译后的js代码，嵌入导页面中（document.head.style）
                    "style-loader",  
                    // 第一步:仅会将css转js
                    {
                        loader:"css-loader" ,
                    }    
                ]
            }
        ]
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        }
    }
}