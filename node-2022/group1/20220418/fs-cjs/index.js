const {mkdir} = require("fs")

// mkdir("需要创建的路径",可配置项(选传),回调函数)
/*
    可配置项(选传) :  {recursive:false(默认的)}

*/ 

// mkdir("../fs-esm",err => {
//     if(err){
//         console.error("创建失败:",err)
//         return
//     }

//     console.log("创建成功")
// })

mkdir("../fs-esm/node_modules/myModules/parent/son",{recursive:true},err => err ? console.error("创建失败:",err) :  console.log("创建成功"))