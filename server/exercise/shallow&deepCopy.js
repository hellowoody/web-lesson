/*

浅拷贝 & 深拷贝

*/

// 赋值
// let a = {
//     age:10
// }

// console.log(a.age)

// let b = a

// b.age = 20

// console.log(a.age)
// console.log(b.age)

// copy

// let a = {
//     age : 10
// }

// let b = {}

// b["age"] = a["age"]

// console.log(b)

// b.age = 200
// a.age = 30
// console.log("a:",a)
// console.log("b:",b)

// 浅拷贝  shallow copy

// 当值的类型是 stirng，number ，bool ，null 基本类型

// let a = "hello world"

// let b = a

// b = "你好"

// console.log(a)


let a = {
    name:"hello",
    age:10,
    friends:[
        "zhang",
        "li",
        "wang"
    ]
}

let b = {}


for(let key in a) {
    b[key] = a[key]
}

console.log(b)
b.name= "你好"
b.age = 100

b.friends[1] = "zhao"
console.log(a)




