/*
    1.构造函数中是否可以写return语句

        function Foo(){
            return stmt;
        }


        function Foo(){
            this.a = 1
            this.b = 2

            return "hello"
        }

        const foo = new Foo()
        console.log(foo)

        stmt
            a:对象            忽略构造函数中this的操作
            b:字面量/常量      忽略return

    2.原型对象prototype的作用

        function Bar(){
            this.prop1 = ""
            this.prop2 = ""
            this.prop3 = ""
            this.prop4 = ""
        }

        const b1 = new Bar()
        const b2 = new Bar()
        Bar.prototype.prop5 = ""
        const b3 = new Bar()


        function Person(){
            this.p1 = ""
        }

        Person.prototype
        // const person = new Person

        Person.prototype.pn = ""

    3.原型链(属性__proto__)的作用

        1.实例对象可以调用构造器以及构造器原型链上所有原型对象的属性/方法
            instance -》Array -> Object
            instance -》Dog -> Animal -> 灵长类动物 -》 细胞
        2.__proto__的代码例子

            const arr = new Array()

            console.log(arr.__proto__)           // Array的原型对象
            console.log(arr.__proto__.__proto__) // Object的原型对象
*/

function Foo(){
    this.a = 1
    this.b = 2

    return "hello"
}

const foo = new Foo()
console.log(foo)