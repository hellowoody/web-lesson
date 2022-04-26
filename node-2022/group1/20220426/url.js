const {URL} = require("url");

// http://127.0.0.1:3000/zhang?a=1&b=2
// const u = new URL("http://127.0.0.1:3000/zhang?a=1&b=2")
const u = new URL("http://127.0.0.1:3000/1?a=1&b=2&id=a0001")

console.log(u)
console.log("pathname :",u.pathname)
console.log("pathname 想要的内容 :",u.pathname.slice(1))
console.log("pathname 想要的内容的类型 :", typeof u.pathname.slice(1))
console.log("pathname 想要的内容转型成整数 :", parseInt(u.pathname.slice(1),10))

console.log("search 参数字符串:",u.search)
console.log("searchParams 参数对象(Map):",u.searchParams)
console.log("a:",u.searchParams.get("a"))
console.log("b:",u.searchParams.get("b"))
console.log("id:",u.searchParams.get("id"))