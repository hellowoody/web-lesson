
const p = new Promise((resolve,reject) => {
    resolve(1000)
})

p.then(res => {
    console.log("1.",res)
    return 2000
}).then(res => {
    console.log("2.",res)
    return 3000
}).then(res => {
    console.log("3.",res)
})

new Promise((resolve,reject) => {
    console.log("init promise")
    resolve("first")
}).then(res => {
    console.log(res)
    return "second"
}).then(res => {
    console.log(res)
})
