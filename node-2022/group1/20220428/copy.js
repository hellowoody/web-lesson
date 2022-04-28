const fs = require("fs")

const params = process.argv.slice(2)
const originFile = params[0]
const destFile = params[1]

const startTime = Date.now()
const readStream = fs.createReadStream(originFile) // "水桶"
// readStream.pipe(目的地)
// “目的地” 也必须是一个stream 而且还是write写入类型的stream
const writeStream = fs.createWriteStream(destFile)  // 目标水桶
readStream.pipe(writeStream)
console.log("duration:",Date.now() - startTime)