/*


1.用webpack命令打包项目时，如何读取配置文件

    wepback --config 配置文件的名字.js
    npx webpack --config 配置文件的名字.js

    webpack --help
    npx webpack --help

    配置文件的名字.js = webpack.config.js

    wepback
    npx webpack

2.用webpack的mode模式 production和development这两个模式有什么区别

    webpack.config.js

        module.exports = {
            mode:"develoment",  // none | develoment | production
        }

    
    production 生产模式     会进行压缩 变量重命名等等  类似于：jquery.min.js  vue.min.js
    develoment 开发模式     会增加注释，将webpack“翻译”过程体现出来


3.webpack配置文件中entry的值有几种情况

    entry：
        A：“相对、绝对路径” path.resolve | path.join
        B: ["入口文件路径1"，"入口文件路径2"]
        C: 
            {
                key:value
                output的文件名:"路径"
            }
        D:function(){

            // 自定义的打包规则 例如写一些条件判断语句

            return A | B | C
        }




node
全局变量 global （process config math ）
内容模块 require import  path fs

*/