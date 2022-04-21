/*
    // ES5
    // 函数
    function foo(){}
    // 构造器 new Bar()
    function Bar(){}

    // ES6
    // 用class 声明的是 构造器，也就是ES5中 function Bar(){}
    // new Person()
    // class 为了方便我们使用 继承 接口等
    class Person {}
*/ 
// 构造器 constructor  PersonNo1就是构造器
// 原型  prototype     [constructor].prototype  PersonNo1.prototype
// 实例  new 构造器返回的结果
// 原型链__proto__  实例.__proto__ 得到的是原型
function PersonNo1(gender){
    this.name = "张三"
    this.country = "china"
    this.gender = gender
    this.smile = () => "哈哈"
}

PersonNo1.prototype.fn1 = () => "fn1"
PersonNo1.prototype.fn2 = () => "fn2"

const no1 = new PersonNo1("male")
console.log("no1:",no1)
console.log("no1 smile:",no1.smile())
console.log("no1 fn1:",no1.fn1())
console.log("no1 fn2:",no1.fn2())
console.log("no1 原型:",PersonNo1.prototype)

class PersonNo2 {
    constructor(gender){
        this.name = "Lee";
        this.country = "USA"
        this.gender = gender
        this.smile = () => "haha"
    }
    // 原型上的方法
    fn1(){
        return "fn1"
    }

    fn2(){
        return "fn2"
    }
}

const no2 = new PersonNo2("female")
const no3 = new PersonNo2("female")
console.log("no2:",no2)
console.log("no2:",no2.fn1())
console.log("no2 原型:",PersonNo2.prototype)
console.log("fn1 比较:",no2.fn1 === no3.fn1)          // true
console.log("smile 比较:",no2.smile === no3.smile)    // false
console.log("haha 比较:",no2.smile() === no3.smile()) //true?


