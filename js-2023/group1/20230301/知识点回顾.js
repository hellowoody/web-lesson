/*
1.几种引号修饰字符串

    ""
    ''
    ``
    "xxx,'xxx'"

2.模版引号的特点

    1.保留格式
    2.传参    let a = "你好"  `${a}，世界`
    3.调用函数

3.如何正确获取null或者undefined的类型

    String(null/undefined)

    typeof null         object
    typeof undefined    

    let a ;

    typeof a;   undefined
    typeof b;   undefined
    String(b)

4.包装对象是什么？
    let num = 123
    const num_obj = new Number(num)

    let str = "hello"
    str.anchor()
    str.at()
    str.toString()
    str.valueOf()
    const str_obj = new String(str)
    str_obj.anchor()
    str_obj.at()
    str_obj.toString()
    str_obj.valueOf()

    console.log("str:",str)                  //  "hello"
    console.log("str_obj",str_obj)
    console.log("str_obj",str_obj.valueOf()) // "hello"

5.浮点数的几种表现方式

    3.14
    1e2  100
    1e-2 0.01 
    小数点后超过6个0时，自动转成科学计数法

    0.14 .14

    1.00 1.

6.浮点数需要注意什么？

    0.1+0.2
    0.3-0.2

7.Number的取值范围

    Number.MIN_VALUE 
    Number.MAX_VALUE

*/