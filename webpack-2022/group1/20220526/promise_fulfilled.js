/*
    then方法是一个异步函数
    Promise.prototype.then = function(兑现的回调函数,失约的回调函数){
        
    }

*/

const p = new Promise(function(resolve,reject){
    resolve("帮你拿快递了")                         // 一旦状态改变，状态就不会再改变
})

console.log("如果‘承诺’兑现了，那么：",p)                          // fulfilled: 帮你拿快递了，快递在你桌子上

// fetch("http://localhost:3000/getuser").then()

// const fulfilled_res = p.then((res) => {
//     console.log("兑现的上一步的结果:",res)
//     /*
//         return undefined
//         相当于
//         return new Promise(function(resolve,reject){
//             resolve()
//         })
//     */
// })
// setTimeout(() => {
//     console.log("兑现的结果：",fulfilled_res) 
// },0)


const fulfilled_res = p.then((res) => {
    console.log("1.兑现的上一步的结果:",res)    // res:帮你拿快递了
    return "快递在你桌子上"
    /*
        return "快递在你桌子上"
        相当于
        return new Promise((resolve,reject) => {
            resolve("快递在你桌子上")
        })
    */
})

const fulfilled_res_res = fulfilled_res.then((res) => {
    console.log("2.兑现的上一步的结果:",res)
    // return undefined
})

console.log("兑现的结果：",fulfilled_res_res)                            //pending

setTimeout(() => {
    console.log("兑现的结果：",fulfilled_res_res)                        //fulfilled
},0) 


