// “同步”方式
/*
console.log(1000)
const p = new Promise((resolve,reject) => {
    console.log(2000)
    resolve("承诺兑现了")  // resolve 除了改变了承诺的状态，它还将参数“异步化”了
    console.log(3000)
})
// then 的作用是将传给它的参数（这个参数必须是函数），推入的微任务的队列
// 实例p的then方法是个异步方法
p.then((res) => {
    console.log(6000,res)
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
// setTimeout(() => console.log("等Promise执行函数中的异步被执行之后，我再看小p：",p),0)
// p.then()中的参数(也就是匿名函数)，什么时候执行呢？
// 当resolve方法执行，将promise状态改变之后，p.then()中的参数(也就是匿名函数)才会执行
p.then((res) => {
    console.log(6000,res)
})


