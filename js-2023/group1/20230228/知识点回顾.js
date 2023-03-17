/*

    1.js中dom操作，其中给html标签加事件监听方式有哪些？
    
        a.document.querySelector("css选择器").addEventListener("事件名称",callback)

        b.  <tag 属性名=""></tag>
            <tag onclick="当成函数作用域"></tag>
            <tag onclick="方法名字();"></tag>


            function 方法名字(){

            }

    2.js中的定时器开启后可以停止吗？

        可以
        定时器启动时的返回值
        clearTimeout(定时器启动时的返回值)
        clearInterval(定时器启动时的返回值)

    3.我们一般用什么模拟异步事件

        setTimeout()

    4.简单说一下异步事件的处理过程

        主事件处理完
        然后再处理异步事件

        console.log(1000)
        setTimeout(function(){
            console.log(2000)
        },0)
        console.log(3000)

        1000
        3000
        2000

    5.使用for-loop（循环迭代）时，是用var，let，const中哪一个？

        let

        var    有提升
        const  不可变

*/