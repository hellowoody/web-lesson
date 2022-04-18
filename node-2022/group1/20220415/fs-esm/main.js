import fs from "fs";

const config = {
    name:"配置文件",
    version:"1.0.0",
    timer:"10"
}

try {
    fs.writeFileSync("./txt/config.json",JSON.stringify(config,null,2))
    console.log("成功写入")
} catch (error) {
    // console.log("写入失败",error)
    console.log("写入失败")
}

console.log("========")

fs.open("./config.json","a+",(err,fd) => {
    if(err){
        console.log(err)
        return
    }
    // console.log("fd:",fd)
    // buffer 存放读取到的数据的缓存
    const buffer = Buffer.alloc(255)
    // 指定向buffer缓存中存放数据的起始位置
    const offset = 0
    // 读取文件中数据的字节数 byte length
    const len =100
    // 读取文件中的起始位置
    const position = 0
    /*
        err          - 报错信息
        bytesLen     - 实际读取的字节数
        buffer_tmp   - 实际读取出的字节
    
    */ 
    fs.read(fd,buffer,offset,len,position,(err,bytesLen,buffer_tmp) => {
        if(err){
            console.log(err)
            return
        }
        console.log("==============异步方式===================")
        console.log("bytesLen:",bytesLen)
        console.log("buffer_tmp:",buffer_tmp.toString())
        console.log("buffer:",buffer.slice(0,bytesLen).toString())
        console.log("buffer:",buffer.toString())

        fs.close(fd)
    })
})

console.log("======同步方式======")

try {
    const fd = fs.openSync("./config.json","r")
    // buffer 存放读取到的数据的缓存
    const buffer = Buffer.alloc(72)
    // 指定向buffer缓存中存放数据的起始位置
    const offset = 0
    // 读取文件中数据的字节数 byte length
    const len = 72
    // 读取文件中的起始位置
    const pos = 0
    const really_bytes_len = fs.readSync(fd,buffer,offset,len,pos)
    console.log("读取内容buffer：",buffer.slice(0,really_bytes_len).toString())

} catch (e) {
    console.log(e)
}



