'use strict'

let fs = require('fs')

fs.stat("file.txt",(err,stat)=>{
    if (err){
        console.log(err)
    }else{
        console.log(stat.isFile())
        console.log(stat.isDirectory())
        if(stat.isFile()){
            console.log(stat.size) //文件大小
            console.log(stat.birthtime) //创建的时间
            console.log(stat.mtime)  //修改的时间
        }
    }
})