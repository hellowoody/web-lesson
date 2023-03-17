/*

    1.上节课讲了几种遍历模式

        for-loop
        while
        do-while
        for-of
            数组

            const obj = {
                a:1,
                b:2
            }

            for(const _ of obj){
                
            }

            const obj = {
                a:1,
                b:2
            }
            // Object.keys(obj) // ["a","b"]
            // Object.values(obj) // [1,2]
            // Object.entries(obj) // [["a",1],["b",2]]
            for(const _ of Object.keys(obj)){
                console.log(_)
            }
            for(const _ of Object.values(obj)){
                console.log(_)
            }
            for(const _ of Object.entries(obj)){
                console.log(_)
            }
        
        for-in  
            对象的属性，数组的索引
        
    2.入口条件循环和出口条件循环的区别，说出一两种典型代表

        for
        while
        先判断后执行

        let i = -1

        while(i > 0){
            console.log()
        }


        do-while
        先执行后判断

        let i = -1;

        do {
            console.log("====")
        } while (i > 0)
            

    3.如何测试遍历的效率

        1.创建大数组
        2.Date.now()
        3.遍历大数组
        4.Date.now()
        5.计算两点之间的时间差

    4.除了Date.now()还有什么方式获取距离1970年的毫秒差

        const d = new Date()
        d.getTime() // Date.now()
*/

