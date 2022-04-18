import {openSync,readSync,closeSync} from "fs";


try {
    const fd = openSync("./package.json","r")
    console.log("打开成功",fd)

    const buffer = Buffer.alloc(260) // 多少个字节
    const offset = 0
    console.log("buffer.length:",buffer.length)
    const len = buffer.length
    const pos = 100

    try {
        const bytesLen = readSync(fd,buffer,offset,len,pos)
        console.log("读取的真实字节数：",bytesLen)
        console.log("读取的内容：",buffer.slice(offset,bytesLen).toString())
        closeSync(fd)
    } catch (err) {
        console.log("读取错误:",err)
    }
} catch (e) {
    console.log("打开错误:",e)
}

