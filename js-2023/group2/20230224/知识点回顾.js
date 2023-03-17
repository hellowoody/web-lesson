/*
    1.js中dom操作，其中给html标签加事件监听方式有哪些？
    
        <tag onclick="fn();"></tag>

        document.querySelector("选择器").addEventListener("事件名称",callback)

    2.js中的定时器开启后可以停止吗？

        可以
        
        clearTimeout(启动定时器时的返回值)
        clearInterval(启动定时器时的返回值)

    3.我们一般用什么模拟异步事件

        setTimeout(callback,duration)

    4.简单说一下异步事件的处理过程

        var a = 1;
        setTimeout(callback,duration)

    5.使用for-loop（循环迭代）时，是用var，let，const中哪一个？

        let 

        原因：
            var：  因为有提升效果，当for代码块中异步事件时，会产生与预期不同的效果
            const：不可修改变量

    6.js中有几种类型？

        String 
        Number
        Boolean 布尔类型
        Undefined
        Null  
        Object
        Symbol

    7.js中可以获取变量的类型吗？

        可以 
        let a = "hi"
        typeof a  
        typeof(a)

        typeof null 返回的时Object

        String(null)  null


*/