/*
1.几种引号修饰字符串

    ""
    ''
    ``

2.模版引号的特点

    1.保留格式
    2.接受参数 let a = "hello";  `${a},world`
    3.可以函数

    function sum(){

    }

    sum ``

3.如何正确获取null或者undefined的类型

    String(null)       // null
    String(undefined)  // null

    typeof null        // "object"

    let a ;
    typeof a ; // undefined;
    typeof b ; // undefined;

4.包装对象是什么？

    const str = "hello";
    const str_obj = new String("hello")

    const tmp = new String(str)
    销毁 tmp
    str.toString()
    str.valueOf()
    
    console.log(str) "hello"
    console.log(str_obj)
    console.log(str_obj.valueOf())   
    
    {
        0:"h",
        1:"h",
        2:"h",
        3:"h",
        4:"0",
        length:5
    }

5.浮点数的几种表现方式

    1.1  1e-1

    .1 0.1

    1. 1.0

6.浮点数需要注意什么？

    1/3

    0.1

    0.3-0.2

    0.1+0.2

7.NaN的特点？

    NaN !== NaN  // true;

    0/0

    isNaN(0/0) 
    isNaN(123) 
    isNaN("123") 

    Object.is(a,b) 有点像 ===
    Object.is(NaN,NaN) true

8.Number的取值范围

    Number.MIN_VALUE Number.MAX_VALUE

*/