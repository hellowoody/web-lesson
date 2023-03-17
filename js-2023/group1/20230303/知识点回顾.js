/*
    1. == vs === 的区别?
        
        == 只比较值 如果类型不同时，会自动转型  console.log(10 == true ) // ？ false
        === 即比较类型又比较值，而且是先比较类型 console.log(10 === true )

    2.下面的语句输出多少

        let count = 5;
        count--                          //4
        console.log("count:",count++)    // 4  5
        console.log("count:",count)      // 5
        if(count++ === 6){
            console.log("count:",++count)  // 不会被打印 
        }    
         

    3.下面的输出

        const obj = {
            a:1
        }

        const obj2 = obj

        console.log(obj == obj2)    // ? true
        console.log(obj === obj2)   // ? true

        obj2.b = 2
        obj2.a = 3

        console.log("obj.a:",obj.a) // ? 3
        console.log("obj.b:",obj.b) // ? 2
        console.log("obj.c:",obj.c) // ? undefined

    4. 如何用日期对象指定2023-3-8女神节？

        // const sd = new Date("2023-03-08")

        // const sd = new Date("3/8/2023")

        new Date(2023,2,8)

    5. if和switch的小括号 有什么区别

        if(表达式 )

        switch(表达式){
            case exp:
        }

        

*/