/*

// 构造器
function Car(){
    this.fn1 = () => console.log("普通方法")
}

Car.fn3 = () => console.log("静态方法")

Car.fn3()

Car.prototype.fn2 = () => console.log("普通方法2")

const car = new Car()

car.fn1()
car.fn2()

*/

/*
    Promise静态方法

    Promise.resolve() 
    等价于
    new Promise((resolve,reject) => {
        resolve()
    })


    Promise.reject()
        等价于
    new Promise((resolve,reject) => {
        reject()
    })

*/ 

const p1 = Promise.resolve("我拿快递了")
console.log(p1)
p1.then(res => console.log(res))

const p2 = Promise.reject("忘记拿了")
console.log(p2)
p2.catch(e => console.log("原因：",e))





