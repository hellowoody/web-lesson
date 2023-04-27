// 浅拷贝
// 拷贝  复制

// 赋值 / 复制

let a = 10
let b = a ;   //既是赋值也是复制


const o1 = {
    name:"zhang",
    p1:1,
    p2:2,
    p3:3,
    p4:4,
    p5:5,
    p100:100
}

const o2 = o1  //只是赋值

const o3 = {}
o3.name = "zhang"

const o4 = new Array()
o4.name = "zhang"

const o5 = {
    name:"zhang"
}

// ES5 拷贝
const o6 = {}
for(const key in o1){
    o6[key] = o1[key]
}
// ES6 Object.assign() 拷贝

const o7 = Object.assign({},o1)
console.log("o7",o7)
o1.name= "123"
console.log("o1",o1)
console.log("o7",o7)

const target = {}
const o8 = Object.assign(target,o1)
console.log(o8 == target)
console.log(o8 === target)
console.log(o8)
console.log(target)

const obj1 = {
    name:"zhang"
}
const obj2 = {
    score:90
}
const obj3 = {
    gender:"male"
}

const o9 = Object.assign({},obj1,obj2,obj3)

console.log(o9)

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
 