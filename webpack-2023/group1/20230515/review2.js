const obj = {
    name:"zhang"
}

const fn = () => {
    return {
        name:"zhangsan"
    }
    // return 1000
}

const fn2 = () => ({name:"zhangsan"})
// const fn3 = () => 1000


// 闭包 clousre 
// 通过代码的方式 让某一个特殊方法的作用域不gc

function name1(){
    var score = 95;
    return function (){
        console.log(score)
    }
}

const bar = name1()

bar()
bar()
bar()

// GC (垃圾回收)
function foo(){
    var score = 100

}


// module.exports
// exports

foo()

// 闭包的一种特殊形式 IIFE 立即执行函数
// 右侧小括号作用时执行
// 左侧的小括号让语法兼容

(() => {
    
})()


function sum(a,b){
    return a+b
}

sum.calc = "加法"

console.log(sum(1,2)) // 3
console.log(sum.calc) // 加法

const o = {
    name:"ZHANG"
}

o.score = 100

Object.defineProperty(o,"gender",{
    value:"female",
    writable:true
})

Object.defineProperty(o,"gender",{
    get:function(){
        return "female"
    },
    
})

console.log(o.gender) // female
o.gender = "male"
console.log(o.gender) // female


