/*
    异步callback
    符合CPS风格/范式
        a:callback作为最后一个参数传入
        b:(err,res) => {} callback回调函数的参数顺序：第一个参数是报错信息
                                                  第二个参数是结果信息
*/ 
function sumCps(a,b,callback){
    let res ;
    setTimeout(() => {
        if(typeof a !== "number") return callback(new Error(["errorno:-1",
            "code:'param type error'",
            "msg:'参数类型错误'"]))
        
        if(typeof b !== "number") return callback(new Error(["errorno:-1",
        "code:'param type error'",
        "msg:'参数类型错误"]))
        
        res = a+b

        callback(null,res)
    },500)
}

console.log("start")
sumCps("a",2,(err,res) => {
    // if(err){
    //     // 有错误
    //     console.log("有错误:",err)
    // }else{
    //     // 没有错误，成功运行
    //     console.log("结果:",res)
    // }
    if(err){
        // 有错误
        console.log("有错误:",err)
        return 
    }
    // 没有错误，成功运行
    console.log("结果:",res)
})
console.log("end")