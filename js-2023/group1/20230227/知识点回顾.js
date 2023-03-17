/*
    1.下面的代码代表什么操作

        var a;        声明    undefined
        var a = undefined;  // “废话文学”
        var b = 1;    初始化
        b = 100;      赋值

    2. 声明变量的形式有哪两种

        var a = 1;
        var b = 2;

        var a = 1 , b =2;

        var a = 1,
            b = 2;

        var a,b,c = 10;  // 不推荐

        var a=b=c=100;  // 不推荐

        var a , b ,c ;
        
        c = 100
        b = 100;
        a = 100;

    3.var 关键字声明变量时的副作用有哪些

        1.提升
        2.自动往全局对象window中增加变量

    4.let 解决了哪些问题

        1.不会加到window
        2.没有提升 暂时性死区
        3.让普通代码块{} 拥有函数作用域的特性保护变量

            if(1 === 1){
                var a = 1;
            }

            if(1 === 1){
                let b = 1;
            }

    5.const使用时的特点

            1.声明时必须初始化
            2.初始化后不能修改字面量的值 literal  “hello” 100 true/false
            3.引用对象（object {},array []） 可以增删改其属性

*/



