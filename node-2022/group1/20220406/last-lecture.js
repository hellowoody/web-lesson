/*
    1.闭包 closure

        function outter(){
            let a = 1000
            function inner(){
                console.log(a)
            }
            return inner
        }
    
    2.递归是闭包的一种

        function recursion(){
            console.log("我是递归")
            if(Math.random() > 0.5){
                recursion()
            }   
        }

    3.IIFE立即执行函数也是闭包的一种

        ;(function(){
            let a = 1000
            function inner(){
                console.log(a)
            }
            return inner
        })()

        ;(function(){
            console.log("立即执行函数")
        })()

        ;(function(){
            console.log("立即执行函数")
        }())
    
    4.IIFE -> revealing module的解决方案

        jquery就是IIFE的典型代表
*/

// ()()
;(function(){
    console.log("立即执行函数,1000")
})()

// (fn())
;(function(){
    console.log("立即执行函数,2000")
}())