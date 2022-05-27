new Promise((resolve,reject) => {
    resolve(1000)
}).then((res1) => {
    console.log("res1",res1)
    return 2000
}).then((res2) => {
    console.log("res2",res2)
    return 3000
}).then((res3) => {
    console.log("res3",res3)
})