'use strict'

let fs = require('fs')

let ws1 = fs.createWriteStream("output3.txt",'utf-8')

ws1.write('line1 \n')
ws1.write('line2 \n')
ws1.write('line3 \n')
ws1.end()