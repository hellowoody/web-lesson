/*

1.为什么webpack中可以同时使用多种包管理

    webpack 自己“解释” cjs和esm的语法
    
    webpack “替”我们去执行src文件夹中的代码

2.webpack如何修改导出chunk文件名字

    webpack.config.js

        module.exports = {
            mode
            entry
            output:{
                filename:"./a/b/xxx.js"
            }
        }

3.webpack如何修改导出chunk文件所属文件夹

    webpack.config.js
        const path = require("path")

        module.exports = {
            mode
            entry
            output:{
                filename:"./a/b/xxx.js",
                path:path.resolve(__dirname,"xxx")
            }
        }


*/