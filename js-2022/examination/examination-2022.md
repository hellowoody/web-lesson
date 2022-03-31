# JS 试题

## 单选题

 - 表达式1/0的结果为

    - A.1
    - B.0
    - C.NAN
    - D.Infinity

    > 答案：D
 
 - ['1', '2', '3'].map(parseInt)？

    - A.[1, 2, 3]
    - B.[1, NaN, NaN]
    - C.['1','2','3']
    - D.[NaN,NaN,NaN]

    > 答案：B

 - 数组里面有 10 万个数据，取第一个元素和第10万个元素的时间相差多少?

    - A.消耗时间几乎一致，差异可以忽略不计
    - B.时间是遍历整个数组所花的时间
    - C.时间是遍历整个数组所花的一半时间
    - D.时间是很大，达到无法接受

    > 答案：A

 - for-loop，for-in，for-of，forEach这四个遍历方法，再遍历很大的数组时谁的性能更高？

    - A.for-loop
    - B.for-in
    - C.for-of
    - D.forEach

    > 答案：A

 - 输出以下代码的执行结果？
    ```
    var a = {n: 1};
    var b = a;a.x = a = {n: 2};
    console.log(a.x)
    console.log(b.x)
    ```

    - A.1 , 2
    - B.{n:2},undefined
    - C.2,1
    - D.undefined,{n:2}

    > 答案：D

 - 下面代码输出什么？
    ```
    var a = 10;
    (function(){
        console.log(a)
        a = 5;
        console.log(window.a)
        var a = 20;
        console.log(a)      
    })()
    ```
    
    - A.undefined,10,20
    - B.10,5,20
    - C.20,10,20
    - D.20,20,20

    > 答案：A



## 多选题

 - 可以定位的DOM方法

    - A.getElementById
    - B.querySelecor
    - C.getElementsTagName
    - D.document.body

    > 答案: ABCD

 - 可以操作标签属性的方法

    - A.getAttribute
    - B.setAttribute
    - C.removeAttribute
    - D.deleteAttribute

    > 答案： ABC

 - 下列属于内置对象的为

    - A.Math
    - B.Date
    - C.RegExp
    - D.Array

    > 答案： ABCD

## 判断题

 - setInterval 方法的返回值是该方法指定毫秒数么？

    - 是
    - 否

    > 答案： 否   一个唯一的id

 - 空字符串（“”）也是字符串常量？

    - 是
    - 否

    > 答案： 是

 - JS中单引号和双引号标记的内容不一样？

    - 是
    - 否

    > 答案： 否   一样的

 - 用var定义一个变量后，如果没有赋予任何值，那么它的值为空置，即null？

    - 是
    - 否

    > 答案： 否 undefined

## 简单题

   > 数组编程题  
   > 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下(凡是连续数字分为一组)，例如 [[2, 3, 4, 5], [10, 11], [20]]。

   > 答案

   ```
    function formArray(arr: any[]) { 
        const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b); 
        
        return sortedArr.reduce((acc, cur) => { 
            const lastArr = acc.slice().pop() || []; 
            const lastVal = lastArr.slice().pop(); 
            if (lastVal!=null && cur-lastVal === 1) { 
                lastArr.push(cur); 
            } else { 
                acc.push([cur]); 
            }
            return acc;
        }, []);
    }

    function genNumArray(num: number, base = 100) { 
        return Array.from({length: num}, () => Math.floor(Math.random()*base)); 
    }

    const arr = genNumArray(10, 20); //[2, 10, 3, 4, 5, 11, 10, 11, 20]; 

    const res = formArray(arr);

    console.log(`res ${JSON.stringify(res)}`);
   ```