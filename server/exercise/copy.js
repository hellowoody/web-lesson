// let obj1 = {
//     a:1
// }

// //1 赋值

// let t1 = obj1

// t1.a = 100
// t1.b = "hello"
// console.log("obj1",obj1)
// console.log("t1",t1)

// // 2 copy shallow copy deep copy
// let obj2 = {
//     a:1
// }

// let t2 = {}
// for (let key in obj2) {
//     t2[key] = obj2[key]
// }


// t2.a = 100
// t2.b = "hello"
// console.log("obj2",obj2)
// console.log("t2",t2)


// let obj4 = {
//     a:1
// }

// let t4 = Object.assign({},obj4)
// t4.a = 100
// t4.b = "你好"
// obj4.b = "aaaaaadfasdsaaa"
// console.log("obj4",obj4)
// console.log("t4",t4)


// let obj3 = {
//     a:1
// }

// let t3 = JSON.parse(JSON.stringify(obj3))

// t3.a = 100
// t3.b = "你好"
// obj3.b = "aaaaaaaa"
// console.log("obj3",obj3)
// console.log("t3",t3)


// 3 在 copy 三种方案中只有JSON.parse(JSON.stringify()）是 deep copy

// let obj5 = {
//     a:1,
//     b:{
//         name:"zhang"
//     }
// }

// let t5 = Object.assign({},obj5)

// t5.a = 1000
// obj5.a = -10
// t5.b.name = "li"
// obj5.b.age = 20
// console.log("obj5",obj5)
// console.log("t5",t5)

let obj6 = {
    a:1,
    b: {
        name:"zhang"
    }
}

let t6 = JSON.parse(JSON.stringify(obj6))

t6.a = 1000
t6.b.name = "li"
t6.b.age = 30
console.log("obj6",obj6)
console.log("t6",t6)