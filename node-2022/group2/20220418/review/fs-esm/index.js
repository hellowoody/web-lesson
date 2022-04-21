import {openSync,readSync,closeSync} from "fs";


try {
    const fd = openSync("./package.json","r")
    console.log("打开成功",fd)

    const buffer = Buffer.alloc(260) // 多少个字节
    const offset = 0
    console.log("buffer.length:",buffer.length)
    const len = buffer.length
    const pos = 100

    const bytesLen = readSync(fd+1,buffer,offset,len,pos)
    console.log("读取的真实字节数：",bytesLen)
    console.log("读取的内容：",buffer.slice(offset,bytesLen).toString())
    closeSync(fd)

} catch (e) {
    // ERR_OUT_OF_RANGE  ENOENT
    switch (e.code) {
        case "ERR_OUT_OF_RANGE":
            console.trace("你尝试读取的字节数大于申请缓存的字节数")
            break;
        case "ENOENT":
            console.trace("没有找到对应的入口文件或目录")
            break;
        default:
            console.log("错误:",e)
            break;
    }
}

