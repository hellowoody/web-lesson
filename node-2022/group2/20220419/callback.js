// closure
// 闭包的作用：内部的函数一旦引用或使用外部函数的变量，
// 那么这些变量就像“快照“一样，存在内存当中
function outter(){
    const a = 1
    const inner = () => {
        return a+1
    }
    return inner
}

let a = 1;
a = a + 1

// callback

function sum(a,b,callback){
    const res = callback(a,b)
    console.log(res)
}

// function sum(){
//     const a = arguments[0]
//     const b = arguments[1]
//     const callback = arguments[2]
//     const res = callback(a,b)
//     console.log(res)
// }

// function sum(){
//     const a = 1
//     const b = 2
//     const callback = (p1,p2) => {
//         console.log(p1,p2)
//         return p1+p2
//     }
//     const res = callback(a,b)
//     console.log(res)
// }

console.log("start")
sum(1,2,(p1,p2) => {
    console.log(p1,p2)
    return p1+p2
})
console.log("end")