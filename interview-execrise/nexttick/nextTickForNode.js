/*
    1.在Nodejs内部提供一个nextTick() ,使用方式如：process.nextTick()
    2.在Nodejs的nextTick提出的原因是对JS的异步任务做了一个补充
    3.nextTick产生了一个异步事件，它的执行时间点是在下一次主任务（main event）开始前执行
*/

// 同步代码
console.log(1000)
// 起了一个定时器，本质就是异步事件，宏任务
setTimeout(() => console.log(4000),0)

const p = new Promise((resolve) => {
    resolve(2000)
})
// 产生了一个异步事件，微任务
p.then(res => console.log(res))
console.log(5000)
/*
1000
5000
2000
4000
*/
// 产生了一个异步事件，“拦截任务”
process.nextTick(() => console.log(3000))