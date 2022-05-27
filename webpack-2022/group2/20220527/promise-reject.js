/*
    Promise的 reject 也会抛异常，但是这个异常有些特别
    1.它并不会终止你的程序
    2.reject的参数被异步化了
    3.用try - catch 语句捕获不了

    console.log(1000)
    try {
        const p = new Promise((resolve,reject) => {
            console.log(2000)
            reject("我忘拿了")
            console.log(3000)
        })
    } catch (e) {
        console.log("主动的捕获异常:",e)
    }
    console.log(4000)
    console.log(5000)


    所以 捕获promise中的异常，需要then方法或者catch方法
*/ 
console.log(1000)
const p = new Promise((resolve,reject) => {
    console.log(2000)
    reject("我忘拿了")
    console.log(3000)
})
// p.then(null,(reason) => {
//     console.log("失约的理由：",reason)
// })
p.catch(reason => console.log("失约的理由：",reason))
console.log(4000)
console.log(5000)

/*
    在同步代码中，一旦抛出异常，程序会马上终止(后续的无法执行)
    js中提供了try - catch 语句，它的作用捕获异常，同时让后续正常运行


    console.log(1000)
    try {
        throw Error("自定义错误");
    } catch (e) {
        console.log("主动的捕获异常:",e)
    }
    console.log(2000)
    console.log(3000)
*/ 

