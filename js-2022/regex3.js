const regex = /(\w+\.?)+/
const regex2 = /\w+/
const regex3 = /(\w)+/

console.log(regex.exec("aaa.bbb.ccc"))

console.log(regex2.exec("aaa"))
console.log(regex3.exec("aaa"))