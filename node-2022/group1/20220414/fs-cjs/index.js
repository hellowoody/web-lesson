const fs = require("fs");

// fs.readFile(filename,[encoding],[callback(err,data)])

fs.readFile("./还猪格格1.txt","utf-8",function(err,data){
    if(err){
        // console.log(err)
        console.trace(err)
    }else{
        console.log("第一部:",data)
    }
})

console.log("=====================================")

fs.readFile("./还猪格格2.txt","utf-8",function(err,data){
    if(err) return
    console.log("第二部:",data)
})
