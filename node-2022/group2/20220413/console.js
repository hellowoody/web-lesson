console.log(1000)
global.console.log(2000)


// console.log("log:","日志")
// console.error("error:","错误信息")
// console.trace("trace:","trace")

function sub(a,b){
    if(a-b>=0){
        return a-b
    }else{
        console.trace("a-b：负数")
        return a-b
    }
}


console.log("sub(2,1):",sub(2,1))
console.log("sub(0,1):",sub(0,1))