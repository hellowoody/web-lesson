# javascript

 - 语法ES  ecmascript
 - DOM     和html标签交互
 - BOM     借助浏览器获取客户端系统信息

# 打印语句

 - console.log()

   ```js
   console.log(p1,p2,p3...)
   ```
  
 - console.table()
   
   调试代码时如果遇到二维数组，可以用它


# js的代码应该html文件的哪个位置

  - 放在head标签中（css代码的后面或下面）

    > 放在head标签中的js代码，不要对body中的标签进行操作
    > 放在head标签中的js代码，不要进行dom操作
  
  - html结束标签之后