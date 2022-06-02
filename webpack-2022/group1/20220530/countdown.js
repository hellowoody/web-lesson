/*
    倒计时：

    output：

    倒计时
    3s
    2s
    1s
    倒计时结束

    使用promise settimeout实现

    附加：纯用settimeout
*/ 

new Promise((resolve,reject) => {
    console.log("倒计时")
    resolve("5s")
}).then((res) => {
    return new Promise((resolve,reject) => {
        console.log(res)
        // setTimeout(() => resolve("4s"),1000)
        setTimeout(resolve,1000,"4s")
    })
})
.then(res => {
    return new Promise((resolve,reject) => {
        console.log(res)
        setTimeout(resolve,1000,"3s")
    })
})
.then(res => {
    return new Promise((resolve,reject) => {
        console.log(res)
        setTimeout(resolve,1000,"2s")
    })
})
.then(res => {
    return new Promise((resolve,reject) => {
        console.log(res)
        setTimeout(resolve,1000,"1s")
    })
})
.then(res => {
    return new Promise((resolve,reject) => {
        console.log(res)
        setTimeout(resolve,1000,"倒计时结束")
    })
})
.then(res => console.log(res))

