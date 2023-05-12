/*
    1.Commonjs 和 ES Module 的区别，如何在一个nodejs项目中更改包管理模式

        cjs 动态导入导出 node 默认的
            module.exports
            exports (推荐)

            require 

        esm 静态导入导出 官方推荐
            export default 
            export  (推荐)

            import


        package.json  
        type:"commonjs" 默认
        type:"module"

    2.安装webpack需要执行什么命令

        npm i -D webpack wepack-cli
        npm i --save-dev webpack wepack-cli


    3.如何执行webpack打包命令

        1
            全局安装webpack  修改你的电脑的环境变量配置文件
            webpack 

        2   
            局部安装(安装在特定项目中)
            npx webpack

        3   
            局部安装(安装在特定项目中)
            package.json
            webpack


*/

function foo(){

}

// module.exports = foo
// exports.foo = foo
// module.exports.abc = foo; // 可以的 

// export const xxx = foo
// export default foo
