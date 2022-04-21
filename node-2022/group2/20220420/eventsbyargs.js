const {EventEmitter} = require("events")
const fs = require("fs")

function findRegex(filename,regex){
    const emitter = new EventEmitter()
    fs.readFile(filename,"utf-8",(err,data) => {
        if(err) return emitter.emit("error",err)
        // 触发开始匹配事件
        emitter.emit("startMatch",filename)
        /*
            正则表达式.test(目标字符串)
            正则表达式.exec(目标字符串)
            目标字符串.match(正则表达式)
        */
        const matchRes = data.match(regex)  // 将匹配到的结果 通过数组返回
        if(matchRes){
            matchRes.forEach( item => emitter.emit("match",filename,item))
        }

    })
    return emitter
}

const args = process.argv.slice(2)
const filename = "./"+args[0]

const emitterInstance = findRegex(filename,/c\w+/g)

emitterInstance.on("startMatch",file => console.log(`${file} start matching`))

emitterInstance.on("match",(file,content) => console.log(`matched ${content} at ${file}`))

emitterInstance.on("error",e => console.log("发生错误:",e))