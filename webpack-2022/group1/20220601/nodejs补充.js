/*
    Nodejs

    setImmediate()    宏任务
    可以把它当成setTimeout(callback,0)
    如果 setImmediate 和  setTimeout(callback,0) 同时出现的话
    如果是处理I/O(fs读写文件，http网络请求)操作的，setImmediate会优先执行
    否则，setImmediate 和  setTimeout(callback,0) 这两个顺序不确定。

    const arr = []
    arr.push(1000)
    setImmediate(() => arr.push(2000))
    setTimeout(() => arr.push(3000),0)
    arr.push(4000)
    setImmediate(() => arr.push(5000))
    arr.push(6000)

    setTimeout(() => console.log(arr),2000)


    process.nextTick()  微任务

    vue中也有一个方法是$nextTick(),vue中的是针对声明周期和异步之间的关系
*/

console.log(1000)
setTimeout(() => console.log(2000),0)
console.log(3000)
Promise.resolve().then(() => console.log(4000))
console.log(5000)
process.nextTick(() => console.log(6000))
console.log(7000)

