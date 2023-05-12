/*

1.用webpack命令打包项目时，如何读取配置文件

    npx webpack --config xxx.js

    xxx.js -> webpack.config.js

    npx webpack 


    npx webpack --help 
    上面的命令可以查看webpack支持的所有传参形式


2.用webpack的mode模式 production和development这两个模式有什么区别

    production: 生产模式，压缩
    development：开发模式，生成很多注释，
                 按照webpack底层实现将src文件夹中的代码读取并用一个IIFE体现出来


3.webpack配置文件中entry的值有几种情况

    a.entry:"路径"
            "相对路径"
            "绝对路径" path.join path.join(__dirname) or path.resolve(__dirname)
    b.entry:["路径"，...]
    c.entry:{
        key:value,
        打包之后的文件名:"路径"
    }

    d.entry:function(){
        
        return "路径" or ["路径"，...] or {}
    }





*/