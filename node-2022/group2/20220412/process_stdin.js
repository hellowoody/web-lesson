/*
    process.stdin 标准输入，监控用户在命令行中输入的内容

    stdin stream(流) observe(观察者范式)
*/
// 可以理解为不马上结束程序，而是一直保留程序与命令行之间的”通道“
process.stdin.resume(); // 恢复

process.stdin.on("data",(msg) => {
    // console.log("获取标准输入流信息:",msg.toString())
    process.stdout.write(`获取标准输入流信息:${msg.toString()}`)
})
