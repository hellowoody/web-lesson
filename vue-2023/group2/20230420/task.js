/* 
    Promise    异步  微任务 mirco task
    setTimeout 异步  宏任务 macro task
*/
console.log("A")
setTimeout(() => console.log(1000),0)
console.log("B")
// 传一个函数，这个函数会“马上执行”
new Promise((resolve,reject) => {
    console.log("C")
    resolve()
    console.log("D")
}).then(() => console.log(2000))
console.log("E")

new Promise((resolve,reject) => {
    resolve()
}).then(() => console.log(3000))

process.nextTick(() => console.log("============"))
console.log("============")

// function resursion(){
//     process.nextTick(() => {
//         console.log("============")
//         resursion()
//     })
// }
// resursion()