new Promise((resolve,reject) => {
    resolve(1000)
}).then((res1) => {
    console.log("res1",res1)
    return 2000
})
// 一个或多个 空的 then()方法，幂等
// .then()
// .then(() => {})
// .then()
.then((res3) => {
    console.log("res3",res3)
})