/*
    Promise.race([promise,promise...])

    结果以数组中期约，最先兑现或最先拒绝的结果为准

*/ 

const p1 = Promise.resolve().then(() => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("p1")
            resolve(1)
        },2000)
    })
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("p2")
        resolve(2)
    },1000)
})

const p3 = Promise.reject(3)


const p_race = Promise.race([p1,p2,p3])

p_race.then(res => console.log(res))
    .catch(e => console.log("捕获:",e))
