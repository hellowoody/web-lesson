/*
    构成闭包的条件
        1.函数套函数
        2.内层函数使用/引用外层函数的变量
        3.外层的函数需要返回内层的函数
*/
function outter(a){
    // let a = 0
    function inner(){
        console.log(a)
    }
    return inner
}

const inner_print = outter(1000)
inner_print()
// outter(3000)()

console.log("============================")

// 累加函数 acc
function acc(){
    let res = 0
    function sum(){
        // res = res + 1
        // res++
        // ++res
        res += 1
        console.log(res)
    }
    return sum
}

const a = acc()
a() // 1
a() // 2
a() // 3
a() // 4
a() // 5

console.log("=====================")

// 使用闭包实现多值加法

function sum(a){
    function add(b){
        a += b
        return a
    }
    return add
}
// 1+2+3+4+5
const s = sum(1)
console.log(s(2))  // 3
console.log(s(3))  // 6
console.log(s(4))  // 10
console.log(s(5))  // 15

console.log("==========================")

// IIFE Immidinly Invoke Function Exacute
// 立即执行函数
/*
    ;(function(){

    })()
*/
const my_iife = (function (){
    let a = 10000;
    function b(){
        console.log(a);
    }
    return b;
})()

console.log(my_iife())





