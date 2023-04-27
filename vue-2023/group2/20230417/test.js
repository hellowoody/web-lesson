const date1 = {
    time:new Date()
}

console.log("date1:",date1.time)
console.log("date1:",date1.time)
console.log("date1:",date1.time)

console.log("===================")
const date2 = {
    time:function(){
        return new Date()
    }
}

console.log("date2:",date2.time())
console.log("date2:",date2.time())
console.log("date2:",date2.time())


const obj = {
    name:"zhang"
}
// 复制
// const obj2 = {
//     name:"zhang"
// }
const obj2 = new Object()
obj2.name = "zhang"

obj.name = "1000"
console.log("obj",obj)
console.log("obj2",obj2)

