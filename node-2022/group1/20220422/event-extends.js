const {EventEmitter} = require("events");
const {readFile,readFileSync} = require("fs")

class FindByRegex extends EventEmitter {
    constructor(regex_param){
        super()
        this.regex = regex_param
    }

    find(filename){
        // 异步读取
        readFile(filename,"utf-8",(err,data) => {
            if(err) {
                return this.emit("error",err)
            }
            this.emit("startMatch",filename)

            const matchRes = data.match(this.regex)
            if(matchRes){
                matchRes.forEach(item => this.emit("match",filename,item))
            }
        })
        return this
    }

    findSync(filename){
        // 同步读
        try {
            const data = readFileSync(filename,"utf-8")
            this.emit("startMatch",filename)

            const matchRes = data.match(this.regex)
            if(matchRes){
                matchRes.forEach(item => this.emit("match",filename,item))
            }
        } catch (e) {
            this.emit("error","确实是我通知的错误")
        }
        return this
    }
}

const instance = new FindByRegex(/s\w+/g)

// instance.on("error",e => console.log("错误11111：",e))

instance

    .on("error",e => console.log("错误：",e))
    
    .on("startMatch",file => console.log(`${file} start matching`))
    
    .on("match",(file,content) => console.log(`matched ${content} at ${file}`))
    .findSync("./es6-class.html")
    
   

