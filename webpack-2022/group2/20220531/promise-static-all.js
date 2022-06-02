/*
    Promise.all([promise1,promise2...])

    等待数组中所有Promise执行完
    如果都兑现的话，那么会将结果按数组的形式返回，返回数组中的顺序和参数中Promise中的顺序一致
    如果有一个拒绝的，那么p_all的then方法中第二个参数或事catch方法的参数就会被执行
    如果有多个拒绝的，以状态最早被改变成拒绝为准 
    如果有一个未兑现其他都是兑现，那么p_all对应的then和catch方法不执行
    如果数组中传入不是promise，那么会将该值尽量转成被兑现的Promise的
*/

const p1 = Promise.resolve(1000)

const p2 = new Promise((resolve,reject) => {
    resolve(2000)
    // setTimeout(() => resolve(2000),3000)
    // reject(2000)
    // setTimeout(() => reject(2000),3000)
})

const p3 = Promise.resolve().then(() => 3000)

// const p4 = Promise.reject(4000)

const p5 = 1   // Promise.resolve(1)

const p6 = 2   // Promise.resolve(2)

const p_all = Promise.all([p1,p2,p3,p5,p6])

p_all
    .then(res => console.log(res))
    .catch(e => console.log("拒绝:",e))