/*
    静态方法/属性
*/ 

// 构造器
function Car(){
    this.fn1 = () => console.log("普通属性1")
}

Car.fn3 = () => console.log("静态属性")

// 调用静态方法或属性时，不需要实例化
Car.fn3()

Car.prototype.fn2 = () => console.log("普通属性2")


// 调用普通方法或属性时 ，需要先实例化
const car = new Car()
car.fn1()
car.fn2()