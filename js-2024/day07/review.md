# function 声明的函数

 - 函数声明
    
    ```js
    function foo(){

    }
    ```

 - 函数表达式
  
   ```js
   const bar = function(){
       
   }
   ```
 
 - 函数里的内置对象 
  - arguments
  - this


# 箭头函数

 - 声明方式
    ```js
    const foo = () => { 

    }
    ```

 - 箭头函数内置对象

  > 只有this

# 函数的返回值

 - 一个函数必有return

 - 函数中只要遇到return就退出函数，return“后面”代码不执行



# 上下文this

 - function声明的

  > A B C 

 - arrow function 

  > 本函数的外层有没有函数，有的话本函数的this就是外层函数的this，没有就是window