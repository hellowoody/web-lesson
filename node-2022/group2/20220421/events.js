const {EventEmitter} = require("events")
const fs = require("fs")

function findRegex(filename,regex){
    const emitter = new EventEmitter()

    emitter.on("startMatch",file => console.log(`${file} start matching`))

    emitter.on("match",(file,content) => console.log(`matched ${content} at ${file}`))
    
    emitter.on("error",e => console.log("发生错误:",e))
    try {
        const data = fs.readFileSync(filename,"utf-8")
        const startMatchRes = emitter.emit("startMatch",filename)
        console.log("startMatchRes",startMatchRes)
        const matchRes = data.match(regex)  // 将匹配到的结果 通过数组返回
        if(matchRes){
            matchRes.forEach( item => emitter.emit("match",filename,item))
        }
    } catch (e) {
        emitter.emit("error",e)
    }

    return emitter
}

console.log("start")
const emitterInstance = findRegex("./events.js",/c\w+/g)



console.log("end")