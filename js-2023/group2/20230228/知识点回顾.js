/*

    1.字符串转number的几种方式

        parseInt("字符串",radix)
        
        返回10进制

        parseFloat()

    2.条件判断的几种形式？

        1.if
            if(表达式){

            }

            if(1) console.log(1000)

            if(1) {
                console.log(1000)
            }

            if(1){

            }else{

            }

            if(expr1){

            }else if(expr2){

            }else{

            }

        2.lamda
            
            2>1 ? stmt1 : stmt2

        3.switch-case

            

    3.如何获取[20,50)的随机整数

        Math.random() [0,1)

        Math.floor()

        [m,n)  先乘后加

        先乘(n-m)      Math.random()*(n-m)      [0,n-m)
        再加m          Math.random()*(n-m)+m    [m,n)

        50-20 = 30
        
        Math.floor(Math.random()*30+20)

    4.字符串转boolean时，什么时候返回false

        Boolean("") false
        Boolean("非空") true

    5.number转boolean时，什么时候返回false，什么时候返回true

        Boolean(0)   false
        Boolean(!0)  true

*/ 