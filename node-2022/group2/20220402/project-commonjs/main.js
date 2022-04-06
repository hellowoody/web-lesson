const a = require("./a")
const {desc,person} = require("./a")

const b = require("./b")
const { desc:descForB } = require("./b")

console.log("a:",a)
console.log("desc of a:",desc)
console.log("person of a:",person)

console.log("b:",b)
console.log("desc of b:",descForB)

const id = "123456"
const obj = {
    // "id":id
    // id:id
    id
}
console.log(obj)