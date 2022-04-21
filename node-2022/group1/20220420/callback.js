// 回调模式callback 不是js独有
// js的特点异步
// callback 既有同步的也有异步
// oldschool(ajax) 回调函数的写法

function sum(a,b,success,fail){
    if(typeof a !== "number" || typeof b !== "number"){
        setTimeout(() => fail("参数类型不对"),500)
    }else{
        setTimeout(() => success(a+b),500)
    }
}

// sum("1",2,res => console.log("结果:",res),e => console.error("错误:",e))


function sub(a,b,callback){
    setTimeout(() => {
        if(typeof a !== "number" || typeof b !== "number"){
            callback("参数类型不对")
        }else{
            callback(null,a-b)
        }
    },500)
}

// sub("1",2,(err,res) => {
//     console.log("========= sub 减法 ============")
//     if(err){
//         console.error("错误信息:",new Error(err))
//         return
//     }
//     console.log("结果:",res)
// })

// ========================================================


function subject(p,callback){
    callback(p)
}

subject("新消息",data => console.log("收到",data))