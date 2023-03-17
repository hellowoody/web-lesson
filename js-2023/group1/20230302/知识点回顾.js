/*

    1.字符串转number的几种方式

        Number("123hello") NaN   
        parseFloat(p)
        parseInt(p1,p2)    123

    2.if判断的一些注意事项？
        
          stmt ""
          if(){
            有且仅有一句话
          }

          if(){

          }else{

          }

          if(){

          }else if(){

          }else if(){
            
          }else{

          }

    3.如何获取[20,50)的随机整数
        [0,1)
       Math.floor( Math.random()*(50-20) + 20)

    4.字符串转boolean时，什么时候返回false

        Boolean("")       false
        Boolean(非空字符串) true

    5.number转boolean时，什么时候返回false，什么时候返回true

        Boolean(0)         false
        Boolean(非零)       true
        Boolean(NaN)       false
        Boolean(Infinity)  true

        

*/ 