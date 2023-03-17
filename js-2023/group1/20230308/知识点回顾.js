/*
    1.符号类型的普通使用，Symbol()的特点是什么?

       Symbol("s2") === Symbol("s2") // false

       不能new

    2.符号全局注册是什么，和Symbol()有什么区别

        Symbol.for()
        "幂等" .for() 1次 ，2次 。。。 n次，返回的都是第一次创建的那个值

        Symbol.for("s2") === Symbol.for("s2") // true

        
        const s = Symbol.for("s2")

        Symbol.keyFor(s)  // "s2"

            typeof s   symbol


    3.用什么方式可以检查某个构造函数是否在实例的原型链上

        instanceof 

        A instanceof B
        A:实例
        B:构造函数

        new String("123") instanceof String  true

    4.写一个js的继承

        class A {
            constuctor(){
                this.a = 1
            }
        }

        class B extends A {
          constuctor(){ 
            super() // 目的是拿A中的a属性
            this.b = "123"
          }
        }

        

*/
