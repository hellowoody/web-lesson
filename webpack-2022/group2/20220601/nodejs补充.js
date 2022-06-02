/*
    补充nodejs中的两个方法

    setImmediate()   宏任务
    可以把它看成 setTimeout(callback,0)
    如果在I/O(读取文件或网络请求)周期内调用，始终先执行setImmediate回调
    否则，setImmediate和setTimeout(callback,0)的顺序不确定
    const arr = []
    arr.push(1000)
    setImmediate(() => arr.push(6000))
    setTimeout(() => arr.push(2000),0)
    arr.push(3000)
    setImmediate(() => arr.push(4000))
    arr.push(5000)

    setTimeout(() => console.log(arr),1000)

    process.nextTick()  注意这个不是vue中的nexttick
    微任务


*/


console.log(1000)
process.nextTick(() => console.log(8000))
setTimeout(() => console.log(2000),0)
console.log(3000)
Promise.resolve().then(() => console.log(4000))
console.log(5000)
process.nextTick(() => console.log(6000))
Promise.resolve().then(() => console.log(7000))
process.nextTick(() => console.log(9000))




