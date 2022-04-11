/*
    commonjs

    require("相对路径")             导入/加载/引入 
    require.resolve("相对路径")     该文件的绝对路径，而不会加载文件
    require.cache                  是一个对象，记录/存储着已经加载过的文件对象

    exports.name=xxx               导出(推荐)  
    module.exports.name=xxx        导出
    module.exports = xxx


    增加语法
    const b = 2
    const obj = {
        a:1,
        // b:b
        b
    }
    console.log(obj)  // {a:1,b:2}

    const obj2 = {
        name:"obj2",
        prop:"属性"
    }

    const {name} = obj2
    const {prop} = obj2
    const {name:name_new,prop:prop_new} = obj2

    console.log("name,prop",name,prop)
    console.log("name_new,prop_new",name_new,prop_new)

    const obj3 = {
        a:1,
        b:2,
        c:3
    }

    console.log("a",obj3.a)
    console.log("b",obj3.b)
    const key = "a"
    console.log(`obj3.${key} 为 ${obj3[key]}`)
*/ 
const ab_path = require.resolve("./m1.js")
console.log("ab_path",ab_path)
console.log("line 14:cache m1:",require.cache[ab_path])
const m1 = require("./m1.js")
console.log("line 16:cache m1:",require.cache[ab_path])
const {name,sum} = require("./m1.js")

console.log("m1",m1)
console.log("name",name,"sum(1,2)",sum(1,2))
console.log("===================================")
const b = 2
const obj = {
    a:1,
    // b:b
    b
}
console.log(obj)  // {a:1,b:2}

console.log("===================================")

const obj2 = {
    id:"obj2",
    prop:"属性"
}
// 解构赋值
const {id} = obj2
const {prop} = obj2
const {id:id_new,prop:prop_new} = obj2

console.log("id,prop",id,prop)
console.log("id_new,prop_new",id_new,prop_new)

console.log("===================================")

const obj3 = {
    a:1,
    b:2,
    c:3
}

console.log("a",obj3.a)
console.log("b",obj3.b)
const key = "c"
console.log(`obj3.${key} 为 ${obj3[key]}`)