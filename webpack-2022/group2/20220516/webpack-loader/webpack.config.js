const path = require("path")
/*
    webpack 只会处理 *.js 文件

    类似 css html png jpeg ttf ts jsx 等等 webpack都不会处理

    那么 webpack 提供了 loader 配置项，怎么理解loader，它就是一个“翻译官”

    loader 将上面webpack不认识的类型文件，翻译成js代码或js文件

*/
module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    },
    // 用module配置loader
    module:{
        rules:[
            // 处理css的loader
            {
                // test:/\.css$/,
                include:path.resolve(__dirname,"src","css"), // 绝对路径
                // 注意use中顺序，use中的loader 执行顺序“从下到上”
                use:[
                    /*
                    创建style标签，
                    将刚才的css-loader拿到的内容拼在一起，
                    注入到document.head标签中
                    */
                    "style-loader",  // 只用loader 
                    {
                        loader:"css-loader" ,
                    },    // 仅仅将css 转 js 
                ]
            },
        ]
    },
    resolve:{
       alias:{
           "@":path.resolve(__dirname,"src") // D:/code/project/src
       } 
    }
}

// in  exists

// 100000 score  in (80,90,100) 外大 内小  用in
// table1(12万人数) 8 行业  exists table2(月报 300) 外小 内大 用exists