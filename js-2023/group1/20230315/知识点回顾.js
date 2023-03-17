/*

    1.[1,2,3].toString() 和 join()传什么参数的结果一样

        [1,2,3].toString()
        [1,2,3].join(",")

        // [1,2,3].join() 

    2."春来发几支,愿君多采撷,此物最相思" 用indexOf和lastIndexOf分别找到第二个","的索引位置

        const str = "春来发几支,愿君多采撷,此物最相思"
        const arr = Array.from(str)

        const one = arr.indexOf(",")
        const two = arr.indexOf(",",one+1)

        str.indexOf(",",str.indexOf(",")+1)

        const second = arr.lastIndexOf(",")
        const second = str.lastIndexOf(",",str.length-1)

        slice(startIndex)
        substring
        
    3."helloworld" 如何变成 “hello world”
       0123456789

        const arr = Array.from("helloworld")
        // arr.splice(5,0," ")

        arr.splice(4,1,"o ")


      
*/ 