// 阶乘
// 方法一：遍历
function factorial(n){
    if(typeof n !== "number"){
        return "参数类型不对"
    }
    let res = 1
    while(n > 0){
        res *= n
        n--
    }
    return res;
}
console.log(factorial("2")) // 2*1
console.log(factorial("3.0")) // 3*2*1
console.log(factorial("four")) // 4*3*2*1
console.log(factorial(5)) // 5*4*3*2*1
console.log(factorial(6)) // 6*5*4*3*2*1

// 方法二：递归
function factorialByRecusion(n){
    if(n < 1){
        return 1
    }
    return n*factorialByRecusion(n-1)
}
console.log("=====")
console.log(factorialByRecusion(2)) // 2*1
console.log(factorialByRecusion(3)) // 3*2*1
console.log(factorialByRecusion(4)) // 4*3*2*1
console.log(factorialByRecusion(5)) // 5*4*3*2*1
console.log(factorialByRecusion(6)) // 6*5*4*3*2*1