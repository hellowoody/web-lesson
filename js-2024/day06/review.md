# 迭代、循环、遍历

 - for
    ```js
    for(;;){

    }

    for(let i = 0 ; i < 3 ;i++){

    }

    let i = 0
    for( ; i < 3 ;){
        i++
    }

    
    for(let i = 0 ; i < 3 ;){

        if(true){
            i += 1
        }else{
            i += 2
        }
        
    }
    ```
 - while
   ```js
    let i = 0
    for( ; i < 3 ;){
        i++
    }

    let i = 0
    while(i < 3){
        i++
    }


   ```
 - do...while（可以忽略）
 - for-of
    ```js
    let arr = ['a','b']
    for(let i of arr){
        console.log(i) // a,b
    }
    ```
 - for-in
    ```js
    let arr = ['a','b']
    for(let i in arr){
        console.log(i) // 0,1
    }

    let obj = {
        a:1,
        b:2
    }
    for(let i in obj){
        console.log(i) // a,b
    }
    ```


# 比较四种迭代

 - for 适合固定次数或者遍历一个数组
 - while 适合不确定次数
 - for-of 适合数据量不大的数组遍历
 - for-in 适合数据量不大数组和对象遍历
 - 效率
   - 数据量大于千万级：for，while > for-of > for-in 
   - 日常使用：效率都差不多 
  
# Date

 - new Date() 当前时间 
 - new Date(year,month,day,hour,minute,second) 指定任意时间 month [0,11]
 - Date.now() 时间戳 距1970-1-1 00：00：00的毫秒差
  