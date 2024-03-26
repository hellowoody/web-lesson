# Symbol

 - 语法

  ```js

    Symbol("描述")
    Symbol.for("描述") 
    Symbol.keyfor(符号) //  描述

  ```

 - 用途对象的属性

  - 我们可以自己加一个唯一性的属性
  - js本身的使用的Symbol属性

    ```js

        const obj = {
            [Symbol.Iterator]: function(){
                
            }
        }

        for(const v of obj){

        }

       
    ```

 
# 数组

 - 声明

  ```js
  const arr = []
  const arr = new Array()
  const arr = Array.of()
  const arr = Array.from()

  ```

 - 数组的四个常用方法

   - push
   - pop
   - unshift
   - shift

 - concat

 - flat

 - join