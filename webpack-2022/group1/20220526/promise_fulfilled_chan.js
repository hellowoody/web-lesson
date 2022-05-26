/*
    then方法是一个异步函数
    Promise.prototype.then = function(兑现的回调函数,失约的回调函数){
        
    }

*/

const p = new Promise(function(resolve,reject){
    resolve("帮你拿快递了")                         // 一旦状态改变，状态就不会再改变
})

p.then((res) => {
    console.log("1.上一个‘承诺’的结果:",res)
    return "我放你桌子上了"
}).then((result) => {
    console.log("2.上一个‘承诺’的结果:",result)
    // return undefined
})

setTimeout(() => console.log(p),0)






