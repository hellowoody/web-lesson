// week type 弱类型
function sum(a,b){
    if(typeof a !== "number"){
        return "第一个参数格式不对"
    }
    if(typeof b !== "number"){
        return "第二个参数格式不对"
    }
    return a+b
}

console.log(sum(1,2))
console.log(sum(1,"20"))
console.log(sum(true,2))
console.log(sum(1,{}))