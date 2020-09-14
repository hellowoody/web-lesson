'use strict'

let fs = require('fs')

try {
    let res = fs.readFileSync("file.txt",'utf-8')
    console.log(res)
} catch (error) {
    console.log(error)
}
