const a = require("./a")
console.log("a:",a)
const {name} = require("./a")
console.log("id:",require.resolve("./a"))
console.log("a name:",name)

// const module = {
//     id:"d:/code/a.js",
//     exports:{
//         name:"a.js"
//     }
// }

// const cache = {
//     "d:/code/a.js":module
// }

// const obj = {
//     a:1000,
//     b:2000,
//     c:3000,
//     d:4000,
//     e:5000,
// }
// function getVal(key){
//     return obj[key]
// }
// function setVal(key){
//     obj[key] = "abc"
// }

// console.log(setVal("a"))
// console.log(getVal("a"))
// console.log(getVal("b"))
console.log("==========")
const obj = {
    id:"001",
    exports:{
        name:"my obj"
    }
}
let exps = obj.exports
exps = "1111111"
exps.a = 1000
exps.b = 2000


console.log(JSON.stringify(obj,"","\t"))
