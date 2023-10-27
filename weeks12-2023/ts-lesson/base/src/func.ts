function fn1(p1:any,p2:any){

}

function fn2(p1:number,p2:number):string{
    return p1+p2+""
}

const fn2Res = fn2(1,2)
console.log(fn2Res,typeof fn2Res) //3 string

function fn3(p1:string,p2:number):[string,number]{
    // const arr:[string,number] = [p1,p2]
    // return arr
    const arr = []
    arr.push(p1)
    arr.push(p2)
    const arr2 = [{},false]
    return arr2 as [string,number]   // 强制转型(开发时语法校验先成功)
    // return <[string,number]>arr2  // 强制转型(开发时语法校验先成功)
}

console.log(fn3("1",2))

function fn4(p1:string,...p_rest:string[]){
    console.log(arguments)
}
fn4("1")
fn4("1","a")
fn4("1","a","b")
fn4("1","a","b","c")

function fn5(p1:string,...p_rest:any[]){
    console.log(p1,p_rest)
}

fn5("p1")
fn5("p1","p2")
fn5("p1","p2","p3")
fn5("p1","p2","p3","p4")

function fn6(p1:string,p2?:number){
    console.log(p1,p2)
}

fn6("hello",100)
fn6("world")

function fn7(p1:string,p2:number = 314){
    console.log(p1,p2)
}

fn7("hello",100)
fn7("world")

const fn8 = (p1:string):string[] => {
    return [p1]
}