const {URL} = require("url")

const u = new URL(`http://localhost:3000/10?a=1&b=2&name=zhang`)

console.log(u)

console.log("pathname :",u.pathname)
console.log("pathname 的想要的内容:",u.pathname.slice(1))
console.log("pathname 的想要的内容转型成数值:",parseInt(u.pathname.slice(1),10))
// searchParams not a object , is Map
console.log("a:",u.searchParams.get("a"))
console.log("b:",u.searchParams.get("b"))
console.log("name:",u.searchParams.get("name"))