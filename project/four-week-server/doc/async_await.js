/*
    异步事件
    setTimeout
    setInterval

    promise 更好的处理异步事件

    p.then(a1).then(a2).then(a3)

    async / await
*/ 

function mockAsync(){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(1000),1000)
    })
}

async function run2(){
    const res = await mockAsync()
    console.log(res)
    console.log(res*2)
    console.log(res*2%3)
    console.log((res*2%3)**2)
}

run2()

// const run3 = async () => {

// }


// function run(){
//     // 异步代码
//     mockAsync().then(res => {
//         console.log(res) // 1000
//         return res
//     }).then(res => {
//         console.log(res*2) // 2000
//         return res*2
//     }).then(res => {
//         console.log(res*2%3) // 2000%3
//         return res*2%3
//     })

//     // 同步代码
// }

// run()