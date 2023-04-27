const date1 = {
    time:new Date()
}

console.log("date1:",date1.time)
console.log("date1:",date1.time)
console.log("date1:",date1.time)

console.log("========================")
const date2 = {
    time:function(){
        console.log(1000)
        return new Date()
    }
}

console.log("date2:",date2.time())
console.log("date2:",date2.time())
console.log("date2:",date2.time())

const o1 = {
    name:"zhang"
}
// 复制
const o2 = new Object()
o2.name= "zhang"

o1.name= "LI"

console.log("o1",o1)
console.log("o2",o2)

