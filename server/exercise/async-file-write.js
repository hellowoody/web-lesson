'use strict'

let fs = require('fs')

let data = "穿主流装\n喝骨头汤\n带斧头帮\n的楚留香";

fs.writeFile('output.txt',data,err =>{
    if(err){
        console.log(err)
    }else{
        console.log("write done.")
    }
})