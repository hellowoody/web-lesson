//ES5语法 构造器
function Car(name){
    this.name = name
    this.dirve = "dirve"
    this.stop = "stop"
    this.fn1 = () => "fn1"
}

Car.prototype.fn2 = () => "fn2"

// 方法在构造器中和在原型上声明，对实际使用其实没啥区别
const car = new Car("大众")
console.log("car fn1:",car.fn1())
console.log("car fn2:",car.fn2())

console.log("===============================")

// ES6 "类" 
class Boat {
    constructor(name){
        this.name = name
        this.dirve = "dirve"
        this.stop = "stop"
        this.swimming = "swimming"
        this.fn1 = () => "fn1"
    }

    fn2(){
        return "fn2"
    }
}

const boat = new Boat("游艇")
console.log("boat fn1:",boat.fn1())
console.log("boat fn2:",boat.fn2())
