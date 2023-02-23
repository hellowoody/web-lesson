/*
    1.下面的代码代表什么操作

        var a ;      声明变量
        var b = 1;   初始化
        b = 100;     赋值

    2. 声明变量的形式有哪两种

        var a = 1;
        var b = 1;

        var a = 1, b=2;

        不推荐的写法

        var a,b,c=10;

        console.log("a:",a) 
        console.log("b:",b)
        console.log("c:",c) 


        var a=b=c=100;

        console.log("a:",a)  
        console.log("b:",b)
        console.log("c:",c) 

        var a
        var b;
        var c;

        c = 100;

        b = 100;

        a = 100;

    3.var 关键字声明变量时的副作用有哪些

        1.提升
        2.自动添加到window对象

    4.let 解决了哪些问题

        1.不会提升，暂时性死区
        2.不添加到window对象
        3.让普通代码块有了函数作用域的效果

    5.const使用时的特点

        1.必须初始化
        2.不能字面量改变 （number string true false）
        3.可以修改对象和数组中的元素，并且也可以添加/删除

*/



