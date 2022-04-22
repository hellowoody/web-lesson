/*
    // 普通函数           foo()
    function foo() {}
    // 构造器 construtor  new Bar()
    function Bar() {}
    // 用ES6 定义对象 - “类”
    class Person {}
*/

// 构造器  constructor  ，PersonNO1 就是 构造器本身
// 原型    pototype    ，【constructor】.prototype  => PersonNO1.prototype
// 实例   instance     ， new 构造器返回的结果就是实例  const instance = new PersonNO1()
// 原型链  __proto__   ,  实例.__proto__  instance.__proto__
function PersonNO1(name){
    this.name = name
    this.country = "china"
    this.smile = () => "哈哈"   
}
PersonNO1.prototype.eat = () => "米饭"
const no1 = new PersonNO1("张三")
const no1_2 = new PersonNO1("张四")
console.log("************")
console.log(no1.smile === no1_2.smile)
console.log(no1.eat === no1_2.eat)
console.log("************")
console.log("no1",no1)
console.log("no1.smile",no1.smile())
console.log("no1.eat",no1.eat())
console.log("PersonNO1原型:",PersonNO1.prototype)

console.log("=============================")

class PersonNO2 {
    constructor(name){
        this.name = name
        this.country = "usa"
        this.smile = () => "haha"  
    }

    eat(){
        return "rice"
    }
}

const no2 = new PersonNO2("Mr Lee")
console.log("no2",no2)
console.log("no2.smile",no2.smile())
console.log("no2.eat",no2.eat())
console.log("PersonNO2原型:",PersonNO2.prototype)
