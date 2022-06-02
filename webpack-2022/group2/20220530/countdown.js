new Promise((resolve,reject) => {
    console.log("倒计时")
    resolve("5s")
}).then((res) => {
    return new Promise((resolve,reject) => {
        console.log(res)
        setTimeout(resolve,1000,"4s")
        // setTimeout(() => {
        //     resolve("4s")
        // },1000)
    })
})
.then((res) => {
    return new Promise((resolve,reject) => {
        console.log(res)
        setTimeout(resolve,1000,"3s")
    })
})
.then((res) => {
    return new Promise((resolve,reject) => {
        console.log(res)
        setTimeout(resolve,1000,"2s")
    })
})
.then((res) => {
    return new Promise((resolve,reject) => {
        console.log(res)
        setTimeout(resolve,1000,"1s")
    })
})
.then(res => console.log(res))
.then(() => console.log("倒计时结束"))