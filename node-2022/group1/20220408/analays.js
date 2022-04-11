["1","2","3"].map((item,index,arr) => {
    console.log(item,index,arr)
})

console.log("===============================")

const my_func = (item,index,arr) => {
    console.log(item,index,arr)
}
["1","2","3"].map(my_func)

console.log("===============================")
// parseInt  将字符串按照制定的进制转换成10进制
// const parseInt = (str,radix) => {

// }

// ["1","2","3"].map(parseInt)

// parseInt("1",0) // 1
// parseInt("2",1) // NaN not a number
// parseInt("3",2) // NaN

console.log("===============================")

let a = 1000

let aa = a

a = 2000

console.log("a",a,"aa",aa) // 2000 , 1000

let b = {
    n:1
}

let bb = b
b = {num:3.14}
// b.n = 1000

console.log("b",b,"bb",bb)  // {num:3.14}  {n:1000}