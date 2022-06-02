/*
console.log(1000)
const p = new Promise((resolve,reject) => {
    console.log(2000)
    resolve("兑现了")
    console.log(3000)
})
console.log(4000)
// 异步方法
p.then((res) => console.log(5000,res))
console.log(6000)


output

1000
2000
3000
4000
6000
5000
*/

/*

const p = new Promise((resolve,reject) => {
    resolve(1000)
})

const p2 = p.then(() => {}) 
// 这样拿不到p2真正的值
console.log("p2",p2)       // p2 Promise { <pending> }

*/


const p = new Promise((resolve,reject) => {
    resolve(1000)
})

const p2 = p.then(() => {
    // return undefined
    // return new Promise((resolve,reject) => {
    //     resolve()
    // })
})

// then方法中的第一个参数(回调函数)，这个回调函数会将结果重新包装Promise后返回。

setTimeout(() => console.log("p2",p2),0)    // p2 Promise { <fulfilled> undefined }

p2.then((res) => {
    //resolve
}).catch(e => {
    // reject
})


const p3 = p.then((res) => {
    console.log("last resolve res:",res)
    return 2000
    // return new Promise((resolve,reject) => {
    //     resolve(2000)
    // })
})

setTimeout(() => console.log("p3",p3),0)    // p3 Promise { <fulfilled> 2000 }




