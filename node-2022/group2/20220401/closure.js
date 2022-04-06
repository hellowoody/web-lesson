/*
    闭包条件
        1.函数套函数
        2.内层函数使用/引用外层函数的变量
*/
function outter(a){
    // let a = 1000
    function inner(){
        console.log(a)
    }
    return inner
}

const inner_print = outter(2000)
inner_print()

function acc(){
    let res = 0
    function sum(){
        // res = res + 1
        // res++
        res += 1
        console.log(res)
    }
    return sum
}

const a = acc()
a()  //1
a()  //2
a()  //3
a()  //4
a()  //5
a()  //6

function sum(a){
    function add(b){
        a += b
        return a
    }
    return add
}
console.log("==============")
const s = sum(1)
console.log(s(2))
console.log(s(3))
console.log(s(4))
// 1+2+3+4+5...

console.log("=================")

for(let i = 0; i <3; i++){
    setTimeout(() => console.log(i),10)
}



