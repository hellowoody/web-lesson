# 标准的html模板页面

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <div></div>
        </body>
    </html>
    ```

# 三大类标签

 - block
 - inline
 - inline-block

# 三大类标签的转换

 ```css
 display: block; /* 块级元素 */
 display: inline; /* 行内元素 */
 display: inline-block; /* 行内块级元素 */
 ```

# 盒子模型

 - 四层

  content -> padding -> border -> margin

 - 默认/标准情况下盒子模型

   ```css
   width: 200px; /* 内容content宽度 */ 
   height: 200px; /* 内容content高度 */
   ```
 - 盒子模型中的尺寸计算

   ```css
    box-sizing: border-box; 
    width: 200px;  /* content+padding+border宽度 */ 
    height: 200px; /* content+padding+border高度 */
   ```

 - 使用margin-top时，有可能出现“穿透效果”

   - 1.场景要满足嵌套 

    ```html
     <div>
        <div></div>
     </div>
        
    ```

   - 2.要对子标签设置

   - 3.父标签的position是static、relative时

   - 4.解决穿透的方式:父标签的position是fixed absolute

  

# html文件引用css样式的三种方式

 - 1.行内式
 - 2.内嵌式
    ```html
    <style>
        .abc {
            width:100px
        }
    </style>
    ```
 - 3.外链式

    ```html
    <link rel="stylesheet" href="./css/index.css">
    ```
