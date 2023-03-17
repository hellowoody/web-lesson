/*
    1.构造函数中是否可以写return语句

        function Foo(){
            this.a = 1;
            this.b = 2;

            return obj/字面量
        }

        a.构造函数中返回一个对象，new Foo()得到的就是return的那个对象

        b.构造函数中返回一个字面量，new Foo()忽略这个return的返回值

            function Foo(){
                this.a = 1;
                this.b = 2;

                return "hello"
            }

            const foo = new Foo()
            console.log("foo:",foo)

    2.原型对象prototype的作用

        function Foo(){
            this.a = 1;
            this.b = 2;
            this.c = 3;
        }

        const foo = new Foo()
        const foo2 = new Foo()
        foo.d = 4;   // crud

        Foo.prototype.e = 5;

        console.log("c:",foo.c)
        console.log("d:",foo.d)
        console.log("e:",foo.e)

        const foo3 = new Foo()


    3.原型链(属性__proto__)的作用

        
        原型链:“绳子” 一端：instance 另一端：object

        const arr = new Array(1,2,3)

        arr -> Array.prototype -> Object.prototype
                toString()           toString()
                                     valueOf()
                join() cancat()

        console.log(arr.__proto__)           // Array
        console.log(arr.__proto__.__proto__) // Object
        
*/
