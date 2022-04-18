const fs = require("fs");


exports.myOpenRead = (filename) => {
    fs.open(filename,"r",666,(err,fd) => {
        if(err){
            console.log("打开失败：",err)
            return
        }
        // console.log("fd:",fd)
        const buffer = Buffer.alloc(400) // 多少个字节
        const offset = 0

        const len = 51
        const pos = 0

        fs.read(fd,buffer,offset,len,pos,(e,bytesLen,buf) => {
            if(e){
                console.log("读取错误:",e)
                return
            }
            console.log("============fs.open read close  start==========================")
            console.log("bytesLen 真实读取的字节数:",bytesLen)
            console.log("buf 真实读取的字节:",buf.toString())
            console.log("buffer:",buffer.slice(offset,bytesLen).toString())
            console.log("buffer:",buffer.toString())
            console.log("============fs.open read close  end==========================")
            fs.close(fd)
        })
    })
}
