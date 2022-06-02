/*
    宏任务:macro-task
        setTimeout

    微任务:micro-task
        Promise

    宏任务 vs 微任务

    微任务总是在宏任务之前执行/出列
*/

console.log(1000)
setTimeout(() => console.log(2000),0)                 // 异步的宏任务
console.log(3000)
Promise.resolve().then(() => console.log(4000))       // 异步的微任务
console.log(5000)