const p = new Promise((resolve,reject) => {

})

console.log("执行函数中既没调用resolve也没调用reject时,p为:",p)

const p_fulfilled = new Promise((resolve,reject) => {
    resolve()  // 将Pending -> Fulfilled
})

console.log("如果‘承诺’被兑现,p_fulfilled为:",p_fulfilled)

const p_rejected = new Promise((resolve,reject) => {
    reject("忘拿了")  // 将Pending -> Rejected  注意：抛出的异常是异步中的异常
    
})

console.log("如果‘承诺’被拒绝或失约,p_rejected为:",p_rejected)