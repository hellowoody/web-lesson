/*
    回顾

    Promise的各个部分名称
    const p = new Promise()
        实例 操作符  构造器

    const p = new Promise(function(resolve,reject){

    }) 
    const p = new Promise(执行函数)

    p.then()
      实例上的方法(原型上的方法)


    执行函数
    重点以及注意：执行函数是同步方法

    then()  （Thenable方法）
    这个方法是异步方法

    then(onResolveCallback,onRejectCallback)

    由于resolve和reject的排他性
    所以，兑现后的回调函数：
    then(() => {
        // 兑现后的操作
    })

    拒绝(失约)时的函数函数:
    catch(() => {
        // 拒绝后的操作,也可以认为是捕获异常（异步的异常）的操作
    })

*/

const p = new Promise((resolve,reject) => {
    resolve(1000)
})

p.then(res => {
    console.log("1.",res)
    return 2000
    // return new Promise((resolve) => {
    //     resolve(2000)
    // })
}).then(res => {
    console.log("2.",res)
    return 3000
}).then(res => {
    console.log("3.",res)
})

new Promise((resolve,reject) => {
    console.log("init Promise")
    resolve("first")
}).then(res => {
    console.log(res)
    return "second"
}).then(res => {
    console.log(res)
})

/*
output:



*/ 