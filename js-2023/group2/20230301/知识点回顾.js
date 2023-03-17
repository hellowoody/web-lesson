/*
    1. == vs === 的区别?

        ==  比较值
        === 比较类型和值

        console.log(true == 1)  true
        console.log(true === 1) false 

    2.下面的语句输出多少

        let count = 5;
        count--                         // 4
        console.log("count:",count++)   //  ? 4
        console.log("count:",count)     //  ? 5
        console.log("count:",++count)   //  ? 6 

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

        const d = new Date(2023,2,8)
        console.log("d:",d)
        const date = new Date()
        date.setDate(8)
        console.log("date:",date)

    5. if和switch的小括号 有什么区别

        stmt 
        2 > 1
        {}  ->  true
        null -> false
        
        if(stmt){

        }   
        
        switch(stmt){
            case 逻辑运算:   
                break;
            default:
        }

*/