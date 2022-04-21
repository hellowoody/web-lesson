const {EventEmitter} = require("events");
const fs = require("fs");

class FindRegex extends EventEmitter {
    constructor(regex){
        super() // on emit once ...

        this.regex = regex;
    }
    // 异步读
    findAsync(filename){
        fs.readFile(filename,"utf-8",(err,data) => {
            if(err) return this.emit("error",err)
            // 触发开始匹配事件
            this.emit("startMatch",filename)
            const matchRes = data.match(this.regex)  // 将匹配到的结果 通过数组返回
            if(matchRes){
                matchRes.forEach( item => this.emit("match",filename,item))
            }
        })
        return this
    }
    // 同步读
    findSync(filename){
        try {
            const data = fs.readFileSync(filename,"utf-8")
            const startMatchRes = this.emit("startMatch",filename)
            console.log("startMatchRes",startMatchRes)
            const matchRes = data.match(this.regex)  // 将匹配到的结果 通过数组返回
            if(matchRes){
                matchRes.forEach( item => this.emit("match",filename,item))
            }
        } catch (e) {
            this.emit("error",e)
        }
        return this
    }
}

const instance = new FindRegex(/cl\w+/g)
// const instance1 = instance.findAsync("./es6-class.js")
// const instance2 = instance1.on("startMatch",file => console.log(`${file} start matching`))
// const instance3 = instance2.on("match",(file,content) => console.log(`matched ${content} at ${file}`))
// instance3.on("error",e => console.log("发生错误:",e))

// instance.findAsync("./es6-class.js")
//         .on("startMatch",file => console.log(`${file} start matching`))
//         .on("match",(file,content) => console.log(`matched ${content} at ${file}`))
//         .on("error",e => console.log("发生错误:",e))

instance
        .on("startMatch",file => console.log(`${file} start matching`))
        .on("match",(file,content) => console.log(`matched ${content} at ${file}`))
        .on("error",e => console.log("发生错误:",e))
        .findSync("./es6-extends.js")
