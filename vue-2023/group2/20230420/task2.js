
setTimeout(() => console.log(1000),0)

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log(2000)
        resolve()
    },500)
}).then(() => console.log(3000))

new Promise((resolve,reject) => {
    process.nextTick(() => {
        console.log(4000)
        process.nextTick(() => {
            console.log(5000)
        })
    })
    resolve()
}).then(() => console.log(6000))

console.log(7000)


/*
setTimout·
Promise then
nextTick
都是异步的

*/



