// 方法一 函数声明
// 用函数声明的方式声明函数，那么这个函数会被“提升”

console.log("sum:",sum())
function sum(){
    return 1+2
}
console.log("sum:",sum())

// 方法二 函数表达式
// 用函数表达式声明时，则不会提升

// console.log("sub:",sub())
const sub = function(){
    return 3-2
}
console.log("sub:",sub())