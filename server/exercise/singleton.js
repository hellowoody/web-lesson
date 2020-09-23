// singleton - 单例

// singleton.prototype.add = function(){

// }

// 1. new singleton()
// 2. singleton()

// function foo(){
// }

// foo.prototype.name = "123"

// foo.age = 20

// let a = new foo()

// foo.age 

// java calendar

/**
 //java 语法

 import "xxx.calendar"
 import "java.util.Date"

 Calendar c = Calendar.getInstnace()

 Date d = new Date()

*/

// new Singleton()

// Singleton.getInstance = (name)=>{
//     if (this.instance) {
//         return this.instance
//     }else{
//         this.instance = new Singleton(name)
//         return this.instance
//     }
// }

// let a = new Singleton()
// let b = new Singleton()

// let i1 = Singleton.getInstance("张三")
// let i2 = Singleton.getInstance("李四")

// console.log("new singleton : ",a.name)
// console.log("i1 getInstance : ",i1.name)
// console.log("i2 getInstance : ",i2.name)
// console.log(a === b)
// console.log(i1 === i2)


//1 安装面向对象的方式 写一个例子

// let Singleton = function(name){
//     this.name = name
//     this.instance = null
// }

// Singleton.getInstance = (name)=>{
//     if (this.instance) {
//         return this.instance
//     }else{
//         this.instance = new Singleton(name)
//         return this.instance
//     }
// }

// let i1 = Singleton.getInstance("张三")
// let i2 = Singleton.getInstance("李四")

// console.log("i1 getInstance : ",i1.name)
// console.log("i2 getInstance : ",i2.name)
// console.log(i1 === i2)

//2.闭包(IIFE)方式 写一个例子

//这里用到的IIFE立即执行函数 其实就是 模拟了静态方法

let SessionSingleton = (()=>{
    let instance = null
    return function(name){
        if (instance) {
            return instance
        }else{
            this.name = name
            instance = this
            return instance
        }  
    }
})()

let ss1 = new SessionSingleton("zhangsan")
let ss2 = new SessionSingleton("lisi")

console.log(ss1 === ss2)
console.log(ss1.name)
console.log(ss2.name)