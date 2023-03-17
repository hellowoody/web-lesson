/*
    1.符号类型的普通使用，Symbol()的特点是什么?

        a.不能new 
        b.Symbol() === Symbol() false
          Symbol("123") === Symbol("123") false
        c.Symbol(123) 123 -> "123" 接受的是字符串
        d.const a = Symbol("a") 如果未来还想用Symbol("a"),建议存到一个变量中

    2.符号全局注册是什么，和Symbol()有什么区别

        Symbol.for()  “幂等”

        const b = Symbol.for("b")
        const b2 = Symbol.for("b")

        b === b2 true 

        Symbol.for()  Symbol.for(undefined) Symbol.for("undefined")
         Symbol.for("undefined")

        Symbol()     Symbol()


        const c = Symbol.for("c")
        Symbol.keyFor(c)  // "c"

        Symbol.keyFor(Symbol.key("hello"))  // hello
        Symbol.keyFor(Symbol("hello"))      // undefined
        Symbol.keyFor(123)                  // error


    3.数组可以使用for-of但是对象不能使用的for-of的原因是什么

        数组对象里有内置符号 
        Symbol.iterator 是个变量名字(内置的变量名字)

        const arr = [1,2,3]

        arr[Symbol.iterator]



*/
