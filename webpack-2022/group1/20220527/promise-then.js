const p = new Promise((resolve,reject) => {
    // 同步
    resolve(1000)
})
// then()是异步
const p2 = p.then((res) => {
})
setTimeout(() => console.log("p2",p2),0)   //  Promise { undefined }

const p3 = p.then((res) => {
    return 2000
})
setTimeout(() => console.log("p3",p3),0)   //  Promise { 2000 }

const p4 = p.then((res) => {
    return new Promise((resolve) => {
        resolve(3000)
    })
})
setTimeout(() => console.log("p4",p4),0)   //  Promise { 3000 }


const p5 = p.then((res) => {
    return new Promise((resolve,reject) => {
        reject(4000)
    })
}).catch((e) => console.log(e))
setTimeout(() => console.log("p5",p5),0)   //  Promise { undefined }



