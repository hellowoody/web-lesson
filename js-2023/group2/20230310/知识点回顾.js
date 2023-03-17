/*

    1.[1,2,3].toString() 和 join()传什么参数的结果一样

        [1,2,3] -> Array -> Object
                    toString   toString

        [1,2,3].join(",")  1,2,3

        {}.toString()   [object Object]

    2."愿君多采撷,此物多相思" 用indexOf和lastIndexOf分别找到第二个"多"的索引位置

        
        "愿君多采撷,此物多相思".indexOf("多",5)           // 8
         0 1 2 345 6 78

         "愿君多采撷,此物多相思".indexOf("多","愿君多采撷,此物多相思".indexOf("多")+1) 

        "愿君多采撷,此物多相思".lastIndexOf("多")       // 8


    3.两个数组拼接一起用哪个方法

        [1,2]  ["a","b"]
        a       b

        Object.concat(a,b)   error

        Array.concat(a,b)    error

        Array.prototype.concat([1,2],[3,4])  [1,2,3,4]

        Array.call().concat([1,2],[3,4])     [1,2,3,4]

        a.concat(b)  [1,2,a,b]

        b.concat(a)  [a,b,1,2]

    4."此地别燕丹"如何截取“燕丹”，用两种方法

        "此地别燕丹".slice(3)  // 不推荐

        Array.from("此地别燕丹").slice(3)

        "此地别燕丹".substring(3)

        Array.from("此地别燕丹").slice(-2)  [5-2,5)  [3,5)


    5."helloworld" 如何变成 “hello world”
       012345
        
            "helloworld".replace("owo","o wo")

            "helloworld".splice(5,0," ")
            const arr = Array.from("helloworld")
            arr.splice(5,0," ")
            arr.join("")

            const arr = Array.from("helloworld")
            arr.splice(4,3,"o wo")
            arr.join("")
*/ 