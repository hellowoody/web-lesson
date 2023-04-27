// 浅拷贝
// 拷贝 Object.assign()
// 拷贝 ES5 老的方式如何拷贝

// 如果是常量/字面量的 赋值和复制是一个动作

const str = "hello"
const txt = str

// 如果是引用类型 Object Array

const o1 = {
    name:"zhang"
}

const o2 = o1 // 仅仅是赋值动作

const o3 = {}
o3.name = "zhang"
const o4 = new Object()
o4.name = "zhang"

const o5 = {
    name:"zhang"
}

// o3 ,o4 , o5 复制
// const my_window = {}
// for(const key in window){
//     my_window[key] = window[key]
// }

// ES6 Object.assign()
const target = {}
const res = Object.assign(target,o1)

console.log("target:",target)
console.log("res:",res)

console.log("==",target == res)
console.log("===",target === res)

const obj1 = {
    name:"name"
}
const obj2 = {
    score:100
}
const obj3 = {
    gender:"male"
}

const obj_group = Object.assign({},obj1,obj2,obj3)

console.log(obj_group)


const obj_complex = {
    name:"zhang",
    hobbys:["rapper","dance","basketball"],
}

const obj_c2 = Object.assign({},obj_complex)

obj_c2.name = "LI"

console.log("obj_complex",obj_complex)
console.log("obj_c2",obj_c2)
obj_complex.hobbys.pop()
console.log("obj_complex",obj_complex)
console.log("obj_c2",obj_c2)

// deep copy 深拷贝
// 多次进行浅拷贝
// 递归的调用浅拷贝 

