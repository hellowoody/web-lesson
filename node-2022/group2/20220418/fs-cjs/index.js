const {mkdir} = require("fs")

/*
    param1:target
    param2:config options
    param3:callback

    {
        recursive:false （默认值） ｜ true,
        mode:权限 0o777 默认的 window下 ?
    }
*/
mkdir("../fs-esm/parent/son/child",{recursive:true,mode:0o444},err => {
    if(err){
        console.log("创建失败:",err)
        return
    }
    console.log("创建成功")
})

// mkdir("../fs-esm",err => {
//     if(err){
//         console.log("创建失败:",err)
//         return
//     }
//     console.log("创建成功")
// })

// mkdir("../fs-esm",err => err ? console.log("创建失败:",err) : console.log("创建成功"))