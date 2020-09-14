'use strict'

let fs = require("fs")

let rs = fs.createReadStream('file.txt')
let ws =fs.createWriteStream('output4.txt')

rs.pipe(ws)