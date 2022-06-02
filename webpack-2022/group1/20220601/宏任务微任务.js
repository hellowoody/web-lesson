/*
    宏任务 macro-task
    setTimeout  I/O (fs,ajax)

    微任务 micro-task
    Promise 


    宏任务 vs 微任务

    微任务永远比宏任务先执行
    微任务都执行完才会执行宏任务
*/

console.log(1000)
setTimeout(() => console.log(2000,"宏任务"),0)                 // 宏任务
console.log(3000)
Promise.resolve().then(() => console.log(4000,"微任务"))       // 微任务
console.log(5000)
Promise.resolve().then(() => console.log(6000,"微任务"))       // 微任务