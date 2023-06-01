/*
    1.devServer中的static 如何理解

        static 指向的内存中的“虚拟路径”

    2.devServer中的hot 是什么

        热替换 hmr

        src中js
            每个js文件下方，import.meta.webpackHot.accept()

            只在入口js文件下方
            import.meta.webpackHot.accept()
            import.meta.webpackHot.accept("XXX.js路径")

        src中非js文件

            loader"翻译"时会在相应的文件最后加上 import.meta.webpackHot.accept()


    3.devServer中的liveReload  是什么

        热部署 liveReload

        src中的文件被改变，就会重新打包并更新web服务

*/

// 序列化 反序列化

// 前端 经常拿json对象和json字符串举例子

// 可以用序列化 反序列化 实现深拷贝

const o = {
    a:[
        {
            b:1
        }
    ],
}


// const o2 = o  赋值

const o2 = Object.assign({},o) // 浅拷贝
const o3 = JSON.parse(JSON.stringify(o))   // 深拷贝
// recursion  递归

// function foo(obj){
//     for(const k in obj){
//         if(obj[k] is array or is Object){
//             foo(obj[k])
//         }else{
//             const o = obj[k]
//         }
//     }
// }



