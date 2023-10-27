// assertion 断言 强制转型

function sub(p1:number,p2:number){
    return p1+p2
}

const num1:string = "100"
const num2:number = 3.14

// console.log(sum(num1,num2))
console.log("1==>>",sub(num1 as unknown as number,num2))
console.log("2==>>",sub(<number><unknown>num1,num2))

function fn(p1:string,p2:number):[string,number]{
    const arr = []
    arr.push(p1)
    arr.push(p2)
    const arr2 = [{},false]
    // return arr2 as [string,number]   // 强制转型(开发时语法校验先成功)
    return <[string,number]>arr2  // 强制转型(开发时语法校验先成功)
}

console.log(fn("hello",100))
