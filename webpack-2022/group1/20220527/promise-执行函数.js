// Promise 是 构造器
// p 是 实例
/*
    function(resolve,reject){
        
    }

    这个匿名函数是Promis构造器的参数，我们也常常称之为执行函数

    执行函数中的代码是同步

*/

console.log(1000)

const p = new Promise(function(resolve,reject){
    console.log(2000)
})

console.log(3000)

// output
// 1000
// 2000
// 3000