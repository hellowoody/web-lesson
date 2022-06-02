/*
    Promise的静态方法

    Promise.resolve()
    相当于
    new Promise((resolve,reject) => {
        resolve()
    })


    Promise.reject()
    相当于
    new Promise((resolve,reject) => {
        reject()
    })

*/

const p1 = Promise.resolve(1000)

console.log(p1)    // Promise { <Fulfilled> 1000 }

p1.then(res => console.log(res))

Promise.resolve(2000).then(res => console.log(res))


// ====================================

const p2 = Promise.reject(Error("自定义错误"))

console.log("aaa:",p2)

// p2.then(null,e => console.log("主动捕获,不让异常抛出"))
p2.catch(e => console.log("主动捕获,不让异常抛出:",e))

Promise.reject("忘拿了").catch(reason => console.log("原因：",reason))