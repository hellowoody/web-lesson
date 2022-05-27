/*
    then的在Promise内的声明
    then方法有两个参数
    Promise.prototype.then = function(当状态变为兑现时的callback函数,当状态变为拒绝时的callback函数){

    }
    或
    class Promise{

        constructor(){}

        then(){}
    }

*/

const p_fulfilled = new Promise((resolve,reject) => {
    resolve("快递已经拿完了，放你桌子上了")
})

// p_fulfilled.then((res) => {
//     console.log("兑现：",res)
// },() => {
//     console.log("拒绝")
// })

p_fulfilled.then((res) => {
    console.log("兑现：",res)
})


const p_rejected = new Promise((resolve,reject) => {
    reject("临时有事，忘拿了")  // Promise 的reject方法会抛出一个异常，注意 这个异常抛在异步事件中了
})

// p_rejected.then(() => {},(reason) => {
//     console.log("失约:",reason)
// })

// p_rejected.then(null,(reason) => {
//     console.log("失约:",reason)
// })

p_rejected.catch((reason) => {
    console.log("失约:",reason)
})