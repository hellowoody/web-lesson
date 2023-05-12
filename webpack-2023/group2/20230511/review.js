/*

    1.Commonjs 和 ES Module 的区别，如何在一个nodejs项目中更改包管理模式

     循环引用 
      a.js  require("b.js")
      b.js  require("a.js")

      cjs (nodejs 默认的) 动态解决循环应用， a.js b.js
        导出 
            module.exports
            exports (推荐)

        导入 
            require
 
      esm （官方推荐）    静态解决循环应用 
        导出
            export default
            export (推荐)

        导入
            import

        nodejs package.json 

        type:"commonjs"
        type:"module"   // esm


    2.安装webpack需要执行什么命令

       npm i webpack webpack-cli --save-dev
       npm i -D webpack webpack-cli 

    3.如何执行webpack打包命令
        
        A   
            npm i -g webpack 
            webpack 

        B   
            npm i -D webpack
            npx webpack
        C
            npm i -D webpack
            webpack
            修改package.json文件
            npm run xxx

       

*/

function foo(){

}

// CJS
// module.exports = foo // function
// module.exports.foo = foo; // {foo:foo}
exports.foo = foo

// ESM
export const xxx = foo
// export default () => {
//     return {
//         foo
//     }
// }

// export default ({
//     foo
// })

// export default () => {
//     return foo
// }

// export default foo


/*
module.exports 是个对象 {}

{
    xxx:foo
}

*/
