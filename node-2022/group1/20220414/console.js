
// console.log("log:","日志")
// console.error("error:","错误信息")
// console.trace("trace:","打印信息来自哪个文件哪一行")

function sub(a,b){
    if(a-b >= 0){
        return a-b
    }else{
        console.trace(new Date(),"a-b:负数")
        return a-b
    }
}

// console.log("sub(2,1):",sub(2,1))
// console.log("sub(0,1):",sub(0,1))