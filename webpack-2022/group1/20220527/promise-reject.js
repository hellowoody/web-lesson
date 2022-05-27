// 在Promise中 抛出异常时，不能用try catch捕获
// 在Promise中 抛出异常时，并不会像同步代码一样 不执行后续代码。
const p = new Promise((resolve,reject) => {
    // reject(Error("Promise中异步代码的异常"))  // reject 除了改变了承诺的状态，它还将参数“异步化”了
    reject("Promise中异步代码的异常")  // reject 除了改变了承诺的状态，它还将参数“异步化”了
})

// p.then(null,(reason) => {
//     console.log("reason:",reason)
// })

p.catch((reason) => {
    console.log("reason:",reason)
})



// try catch 是捕获同步代码时的异常
// try {
//     throw Error("同步代码中的异常")
// } catch (error) {
//     console.log("错误捕获了：",error)
// }
// console.log(1000)
// console.log(2000)









