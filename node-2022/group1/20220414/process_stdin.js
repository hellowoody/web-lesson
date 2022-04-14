/*
    process.stdin 标准输入 监控命令行输入的内容

    stdin  stream(流)  observe（观察者范式）

*/

process.stdin.resume();  // 强制让消息传输的通道一值存在

process.stdin.on("data",msg => {
    // console.log("截获标准输入流信息:",msg.toString())
    process.stdout.write(`截获标准输入流信息:${msg.toString()}`)
})
