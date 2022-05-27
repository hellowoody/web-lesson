// “同步”方式
/*
console.log(1000)
const p = new Promise((resolve,reject) => {
    console.log(2000)
    resolve("承诺兑现了")
    console.log(3000)
})
console.log(4000)
console.log(5000,p)
*/

// 异步方式 使用场景最多的方式

console.log(1000)
const p = new Promise((resolve,reject) => {
    console.log(2000)
    setTimeout(() => {
        console.log("异步方法start")
        resolve("承诺兑现了")
        console.log("异步方法end")
    },0)
    console.log(3000)
})
console.log(4000)
console.log(5000,p)
setTimeout(() => console.log("等Promise执行函数中的异步被执行之后，我再看小p：",p),0)
