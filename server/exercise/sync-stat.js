'use strict'

let fs = require('fs')

let stat = fs.statSync("file.txt")

console.log(stat.isFile())
console.log(stat.isDirectory())