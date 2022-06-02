// p 是Promise的实例
// 如我们所讲 执行函数是同步的 
// 实例p的then方法是异步
// 只有当执行了resolve之后 ，then的回调函数才会被执行
console.log(1000)
const p = new Promise((resolve,reject) => {
    console.log(2000)
    resolve("我拿快递了,放你桌子上了")
    console.log(3000)
})
console.log(4000)
p.then((res) => {
    console.log(6000,"res:",res)
})
console.log(5000)

// fetch("http://localhost:3000/getusername")
//  .then((res) => res.json())
//  .then((name) => {
//      console.log(name)
//  })