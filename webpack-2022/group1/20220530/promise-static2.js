/*
    Promise.all([promise,promise...])
    
    等待数组中所有的Promise执行完，
    如果都兑现的话，那么会将结果也按数组的方法返回
    如果有一个未兑现也未拒绝，那么p_all对应的then方法回调不执行
    如果有一个是拒绝的，那么p_all的then的第二个参数或者catch方法的回调就会被执行
    如果有多个拒绝的，那么以最早拒绝的为准
*/ 

const p1 = Promise.resolve(1000)

const p2 = new Promise((resolve,reject) => {
    resolve(2000)
    // reject(2000)
})

const p3 = Promise.resolve().then(() => 3000)

// const p4 = Promise.reject(4000)

const p5 = 1  // Promise.resolve(1)

const p6 = 2  // Promise.resolve(2)


const p_all = Promise.all([p1,p2,p3,p5,p6])

p_all
    .then(res => console.log(res))
    .catch(e => console.log("拒绝:",e))