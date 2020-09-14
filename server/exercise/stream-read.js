'use strict';

let fs = require("fs")

let rs = fs.createReadStream("file.txt",'utf-8')

rs.on('data',(chunk)=>{
    console.log("Data:")
    console.log(chunk)
})

rs.on('data',chunk =>{
    console.log("read end")
})

rs.on('data',chunk =>{
    console.log("read end")
})

rs.on('error',err =>{
    console.log("err:",err)
})