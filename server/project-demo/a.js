console.log("this is project demo")
let tmp = 0
if (1<0){
    tmp = 100
    console.log("step in debug")
}

let m = require("./modules/math")

console.log(m.add(10,5))
console.log(m.square(10))


