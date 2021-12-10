# JS 基础 教程

## JavaScript

    JavaScript 是一种轻量级的编程语言

### 1.使用

 - 配合html页面使用（重点）

 - 在nodejs环境使用

 - 在deno环境使用

### 2.script标签

  - script标签用来放置javascript代码

  - 直接在script中写js代码

    ```
    <script>
      console.log("hello js")
    </script>
    ```

  - 通过src属性引用外部js文件

    ```
    <script src="index.js" ></script>
    ```

  - 关于script在页面的最佳位置以及html执行顺序

    - html文件是自上而下的执行方式，引入css时会阻塞dom的渲染，不会阻塞dom的解析，而执行到< script >脚本是则中断线程(阻塞)，待该script脚本执行结束之后程序才继续往下执行。

    - 所以，一般推荐将script脚本放在body或html之后，那样dom的生成就不会因为长时间执行script脚本而延迟阻塞，加快了页面的加载速度。

    - 但又不能将所有的script放在body之后，因为有一些页面的效果的实现，是需要预先动态的加载一些js脚本。所以这些脚本应该放在body标签之前。

    - 其次，不能将需要访问dom元素的js放在body之前，因为此时还没有开始生成dom，所以在body之前的访问dom元素的js会出错，或者无效。

      ```

      <!DOCTYPE html>
      <html>
        <head></head>
        <script type="text/javascript">
          document.getElementById("text").innerHTML = "Test script";
        </script>
        
        <body>
          <h1 id="text"></h1>
        </body>
      </html>

      ```

      控制台将出现：Uncaught TypeError: Cannot set property 'innerHTML' of null at test.html?__hbt=1537172343687:5

      将script脚本放在body之后

      ```

      <!DOCTYPE html>
      <html>
        <head></head>
        
        <body>
          <h1 id="text"></h1>
        </body>
        
        <script type="text/javascript">
          document.getElementById("text").innerHTML = "Test script";
        </script>
      </html>
      ```

    - 最后，script放置位置的原则：

      - 页面效果实现类的js应该放在body之前

      - 动作，交互，事件驱动，需要访问dom属性的js都可以放在body之后




### 3.输出

 - window.alert() 

    弹出警告框

 - document.write()

    将内容写到 HTML 文档中

 - innerHTML

    写入到 HTML 元素

 - console.log() 

    写入到浏览器的控制台

    ```
    console.log()
    ```

### 4.更多基础内容

    https://www.runoob.com/js/js-tutorial.html

## jQuery

### 1.下载地址

    https://www.bootcdn.cn/

    https://www.bootcdn.cn/jquery/

### 2.安装

 - 直接引用链接

 - 下载到本地

### 3.jQuery的初始化

 - 第一种(推荐)

    ```
    $(function(){
 
    // 开始写 jQuery 代码...
    
    });
    ```
 - 第二种

    ```
    $(document).ready(function(){
 
    // 开始写 jQuery 代码...
    
    });
    ```

### 4.选择器

- 元素选择器

    ```
    $("p")
    ```
- #id 选择器

    ```
    $("#test")
    ```

- .class 选择器

    ```
    $(".test")
    ```

- 代码例子

    ```
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta content="width=device-width,initial-scale=1" name="viewport" />
            <title>标准模板</title>
            <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        </head>
        <body>
            <p>p标签</p>
            <input id="test" value="1" />
            <div class="test">div test 样式</div>
        </body>
    <html>
    <script>
    $(function(){

        console.log($("p").text())
        console.log($("#test").val())
        console.log($(".test").text())

    });
    </script>
    ```

- 更多使用方法

    https://www.runoob.com/jquery/jquery-selectors.html

