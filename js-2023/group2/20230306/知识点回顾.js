/*
    1.上节课讲了几种遍历模式

        for 
        while
        do-while
        for-of
            数组 

            const arr = ["a","b","c"]

            for(const _ of arr){
                // console.log("_",元素)
                console.log("_",_)
            }

            const obj = {
                a:1,
                b:2
            }

            // Object.keys(obj) //  ["a","b"]

            for(const _ of Object.keys(obj)){
                console.log("prop:",_)
            }

            for(const _ of Object.values(obj)){
                console.log("prop:",_)
            }

            for(const _ of Object.entries(obj)){
                console.log("prop:",_)
            }

            for(const _ of obj){

            }

        for-in
            数组和对象

            const obj = {
                a:1,
                b:2
            }

            for(const key in obj){
                console.log(key,obj[key])
            }

    2.入口条件循环和出口条件循环的区别，说出一两种典型代表

            for
            while

            do-while



            for(let i = 0 ; i < 3 ; i++){
                console.log(i)
            }

            let i = 0
            while(i < 3){
                console.log(i)
                i++
            }

    3.如何测试遍历的效率

            1.创建数组
            2.Date.now()
            3.循环
            4.Date.now()
            5.计算时间差

        效率(遍历的次数大于百万时)  for > while > for-of > for-in  

        Date.now()静态方法是一个快速获得毫秒差的方式

        const curr = new Date()
        curr.getTime() 也是距离1970年的毫秒差

    4.对象声明的几种方式

            const obj = {
                a:1,
                b:2
            }

            const obj = {}
            obj.a = 1
            obj.b = 2

            const obj = new Object()
            obj.a = 1
            obj.b = 2


    5.对象的属性如何执行crud (create/read/update/delete)？

        const obj = {}

        // 创建一个属性name
        obj.name = "张三"
        // 获取name属性
        console.log("name:",obj.name)
        // name改成“李四”
        obj.name = "李四"
        // 删除 name
        delete obj.name    

    6.如何用很细的颗粒度进行属性定义

        const obj = {}

        // 定义name属性 
        // Object.defineProperty(目标对象,定义的属性名,option config)
        Object.defineProperty(obj,"name",{
            value:-1,
            writable:false,    // 是否可写
            configurable:true, // 是否可配置
            enumerable:true    // 是否枚举（是否可以用for-in）
        })

        Object.defineProperty(obj,"a",{
            value:100,
            writable:true,    // 是否可写
            configurable:true, // 是否可配置
            enumerable:true    // 是否枚举（是否可以用for-in）
        })

    7.创建一个对象实例的过程中，有哪些比较重要的概念

        const obj = new Object()
        // const obj = {}
        // Object             构造函数/构造器 construtor
        // obj                实例对象       instance
        // Object.prototype   原型对象       {construtor:Object}

        Object.prototype.construtor === Object
*/

// 可以通过getTime()计算两个任意时间点的时间差
// const start = new Date(2023,2,6,9)
const start = new Date()
const target = new Date(2023,2,8,8)

const duration = target.getTime() - start.getTime();

/*
1s = 1ms * 1000
1min = 1s * 60 = 1000*60
1h = 1min * 60 = 1000*60*60
1d = 1h * 24 = 1000*60*60*24

整除 / 得到完整d/h/min
取余 % 得到还剩h/min/s... 
*/ 

// 差几天
const day = Math.floor(duration/(1000*60*60*24))
// 差几个小时
const hour = Math.floor((duration%(1000*60*60*24))/(1000*60*60))
// 差几个分钟
const min = Math.floor(((duration%(1000*60*60*24))%(1000*60*60))/(1000*60))
// 差多少秒
const sec = Math.floor((((duration%(1000*60*60*24))%(1000*60*60))%(1000*60))/1000)
console.log("duration:",duration)
console.log(`差${day}天${hour}小时${min}分钟${sec}秒`)
