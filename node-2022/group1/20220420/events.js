const {EventEmitter} = require("events");
const fs = require("fs")

function findByRegex(filename,regex){
    const emitter = new EventEmitter()
    fs.readFile(filename,"utf-8",(err,data) => {
        if(err){
            return emitter.emit("error",err)
        }
        emitter.emit("loaded",filename)
        /*
            正则表达式.test(匹配目标文本)
            正则表达式.exec(匹配目标文本)
            匹配目标文本.match(正则表达式) []
        */ 
        const matchRes = data.match(regex)
        if(matchRes){
            matchRes.forEach(item => emitter.emit("match",item))
        }
    })
    return emitter
}


const instance = findByRegex("./callback.js",/c\w+/g)

instance.on("error",e => console.log("发生错误:",e))
instance.on("loaded",file => console.log(`已经成功加载${file}文件`))
instance.on("match",content => console.log(`成功匹配到:${content}`))