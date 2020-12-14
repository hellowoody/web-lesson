# Html 基础 教程

## 1.什么是html

 - 超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序以及移动应用程序的用户界面。网页浏览器可以读取HTML文件，并将其渲染成可视化网页。HTML描述了一个网站的结构语义随着线索的呈现，使之成为一种标记语言而非编程语言。

 - HTML元素是构建网站的基石。HTML允许嵌入图像与对象，并且可以用于创建交互式表单，它被用来结构化信息——例如标题、段落和列表等等，也可用来在一定程度上描述文档的外观和语义。HTML的语言形式为尖括号包围的HTML元素（如<html>），浏览器使用HTML标签和脚本来诠释网页内容，但不会将它们显示在页面上。

 - HTML可以嵌入如JavaScript的脚本语言，它们会影响HTML网页的行为。
 
 - 网页浏览器也可以引用层叠样式表（CSS）来定义文本和其它元素的外观与布局。

## 2.html的“官网”

  - html不属于任何一家公司，它从1996起由一个组件进行维护，这个组织就行--万维网联盟（W3C）

  - 万维网联盟（W3C）：维护HTML的规范

  - 为解决网络应用中不同平台、技术和开发者带来的不兼容问题，保障网络信息的顺利和完整流通，万维网联盟制定了一系列标准并督促网络应用开发者和内容提供者遵循这些标准。标准的内容包括使用语言的规范，开发中使用的导则和解释引擎的行为等等。W3C也制定了包括XML和CSS等的众多影响深远的标准规范。
    但是，W3C制定的网络标准似乎并非强制，而只是推荐标准。因此部分网站仍然不能完全实现这些标准，特别是使用早期所见即所得网页编辑软件设计的网页往往会包含大量非标准代码。
  
## 3.参考网站

  - https://www.w3schools.com/ (访问比较慢)

  - https://www.w3school.com.cn/

  - https://developer.mozilla.org/zh-CN/docs/Web  (后面学js时会时常访问它)

  - https://developer.mozilla.org/zh-CN/docs/Web/CSS

## 4.什么是Html5 (H5)

  - 我们俗称的H5，是w3c在2004年发布一个的html最新规范，可以简单认为就是html的版本号。如果你之前学习过java，那么java的jdk是有版本区别的，如jdk7，jdk8。H5就是html的一个版本，而且是现在的最新版本。未来也许会有H6，H7等。

## 5.什么是XHtml

  - 为了规范HTML，W3C结合XML制定了XHTML 1.0标准，这个标准没有增加任何新的tag，只是按照XML的要求来规范HTML，形成了XHTML。也就是说，XHTML是能满足XML要求的HTML。

    ```
    //在xhtml中 DOCTYPE 必须写
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

    //例如单标签 hr br，在xhtml中必须带有结束符/
    <br />
    <hr />
    ```
 
  - 不过后来W3C比较激进，制定的XHTML 2.0标准竟然不兼容HTML，现已被证明不符合潮流而淘汰

  - html5已经普及，xhtml只能特定场景下才会用到或是面试时作为考察知识点广度才会涉及到，所以初学者可以基本忽略。

## 6.浏览器兼容性

  - 浏览器兼容性是一个比较复杂的问题，现阶段主流市场一般默认支持谷歌的chrome浏览器和mozilla firefox的火狐浏览器，所以我们学习时可以任选其一当作我们开发时的默认浏览器。随堂讲课时，使用的是chrome浏览器

  - chrome下载地址

    https://www.google.com/intl/zh-CN/chrome/

  - 火狐下载地址

    https://www.mozilla.org/zh-CN/firefox/new/

## 7.开发环境

  因为html，css，js都属于“脚本语言”，而且主要基于浏览器展现，所以浏览器就是我们的开发环境。也就是说我们不用像别的后端语言需要配置环境变量等问题。

## 8.开发工具-IDE

  - 理论上说开发脚本语言没有强制规定需要某一编辑器，如果你技术熟练完全可以用记事本编写。但是为了上手简单或是开发效率，我们会推荐一些好用的编辑器，因为好的编辑器可以有代码高亮，错误提示等功能，这样更加方便我们的学习。

  - 下面就是推荐的几款编辑器

    - vs code (上课时使用)

    - sublime text

    - notepad++

    - WebStorm （功能最强大，但需要收费）

  - vs code下载地址

    https://code.visualstudio.com/

## 8.DOCTYPE标签

  - <!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 <html> 标签之前。

  - <!DOCTYPE> 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令（重点，也就是说用DOCTYPE指定使用哪个版本html进行解析）。

  - 在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。

  - HTML5 不基于 SGML，所以不需要引用 DTD。

  - 请始终向 HTML 文档添加 <!DOCTYPE> 声明，这样浏览器才能获知文档类型。

  - 如果未进行声明，浏览器会使用“怪异模式”进行渲染

  - <!DOCTYPE> 声明没有结束标签

  - <!DOCTYPE> 声明对大小写不敏感。

  - 下面这个网站是不同版本html支持的标签明细

    https://www.w3school.com.cn/tags/html_ref_dtd.asp

  - 不同版本html的 DOCTYPE 声明

    - HTML 5

      ```
      <!DOCTYPE html>
      ```

    - HTML 4.01 Strict

      该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

      ```
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
      ```
    
    - HTML 4.01 Transitional

      该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

      ```
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
      ```
    
    - HTML 4.01 Frameset

      该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容.

      ```
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
      ```

    - XHTML 1.0 Strict

      该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。

      ```
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      ```

    - XHTML 1.0 Transitional

      该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。

      ```
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      ```

    - XHTML 1.0 Frameset

      该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容。

      ```
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
      ```

    - XHTML 1.1

      该 DTD 等同于 XHTML 1.0 Strict，但允许添加模型（例如提供对东亚语系的 ruby 支持）。

      ```
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
      ```

## 9.html 基本语法

  - 以尖括号包裹起来<>

  - 成对出现，比如< h1 >与</ h1 >。这些成对出现的标签中，第一个标签是开始标签，第二个标签是结束标签。

  - 空元素/单元素，有些标签没有内容，为空元素，如<img> <br> <hr>

## 10.html标准模板

  - 标签架构图

    ![image](https://raw.githubusercontent.com/hellowoody/web-lesson/master/%E5%8E%9F%E5%9E%8B/html.png)
  
  - head标签需要填充的内容

    - title 网站的标题

    - meta标签

      - 字符集
       
        ```
        <meta charset="utf-8"></meta>
        //or
        <meta charset="utf-8" />
        ```

      - 响应式声明

        ```
        <meta content="width=device-width,initial-scale=1" name="viewport">
        ```

    - link标签：css文件引用

    - style标签: 直接写css样式

  - html标准模板

    ```
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta content="width=device-width,initial-scale=1" name="viewport" />
            <title>标准模板</title>
        </head>
        <body>
        </body>
    </html>
    ```



## 11.常用标签

  - 标题标签h1-h6

    ```
    <h1></h1>
    ```

  - 段落标签p

    ```
    <p>段落内容</p>
    ```

  - 换行br (单标签)

    ```
    <br />
    ```

  - 盒子标签

    - div 块级元素，占满一整行

      ```
      <div></div>
      ```
    - span 行级元素

      ```
      <span></span>
      ```
  
  - 图像标签img 单标签

    - src 是标签的属性(arribute)

      ```
      <img src="图片url" />
      ```
    
    - img其他属性

      ![image](https://raw.githubusercontent.com/hellowoody/web-lesson/master/%E5%8E%9F%E5%9E%8B/img.png)

    - 路径

      - 相对路径 
        
        ./ : .代表当前目录，如果寻找当前目录上某一文件可以使用./文件名称，有时./也可以省略
        ../ : 上一层目录
        ../../ : 上上一层目录

      - 绝对路径

        - 本机中的某一文件的路径，如D:/xxx/1.jpeg

        - 网络图片地址

  - 超链接a

    ```
    <a href="跳转地址" target="目标窗口弹出方式">文本或图片</a>
    ```

    - herf 用于指定链接目标的url地址

      - 外部链接

        ```
        <a href="https://baidu.com">跳转百度</a>
        ```

      - 内部链接

        ```
        <a href="login.html">登录</a>
        ```

      - 空链接

        ```
        <a href="#">空链接</a>
        ```
      
      - 锚点链接

        可以快速定位到页面中的某个位置

        ```
        <a href="#footer">底部内容</a>
        ```

      - 下载链接

        ```
        <a href="xxx.zip">下载资料</a>
        ```

    - target 用于指定链接页面打开方式

      - _self : 在当前窗口打开 (默认值)

      - _blank ：在新窗口中打开

  - 注释标签

    ```
    <!-- 注释 -->
    ```

    - 快捷键 ctrl + /

    - 目的:给程序员看的，用于后期维护和阅读代码

  - 特殊字符

    | HTML原代码 |显示结果 | 描述 |
    |  ----| ----| ----|
    | &amp;lt;  | <       | 小于号或显示标记       |
    | &amp;gt;  | >       | 大于号或显示标记       |
    | &amp;amp; | &       | 可用于显示其它特殊字符  |
    | &amp;quot;| "       | 引号                 |
    | &amp;reg; | ®       | 已注册               |
    | &amp;copy;| ©       | 版权                 |
    | &amp;trade;| ™      | 商标                 |
    | &amp;ensp; |        | 半个空白位            |
    | &amp;ensp; |        | 一个空白位            |
    | &amp;nbsp; |        | 不断行的空白          |

    还有很多特殊字符，如想了解可以访问下面的网址

    https://tool.lu/htmlentity/

    一般只需要记住下面三个特殊字符就行，其他的需要用时再从网上查找就行

    - &amp;nbsp; ： 空格

    - &amp;lt;  ： 小于

    - &amp;gt;  ： 大于



  - 表格标签

    - table标签

    - tr 行标签

    - td 单元格

      ```
      <table>
          <tr>
            <td>id</td>
            <td>姓名</td>
            <td>成绩</td>
          </tr>
          <tr>
            <td>1</td>
            <td>张三</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>李四</td>
            <td>90</td>
          </tr>
      </table>
      ```

    - 表头标签 th （table head）

      ```
      <table>
          <tr>
            <th>id</th>
            <th>姓名</th>
            <th>成绩</th>
          </tr>
          <tr>
            <td>1</td>
            <td>张三</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>李四</td>
            <td>90</td>
          </tr>
      </table>
      ```





 
    - 其他属性

      ![image](https://github.com/hellowoody/web-lesson/blob/master/%E5%8E%9F%E5%9E%8B/table.png?raw=true)

      ```
      <table align="center" border="1" cellpadding="2" cellspacing="0" width="200">
           ...
      </table>
      ```


    - 表格结果标签

      - 表格头部区域 thead

        必须含有tr标签

      - 表格主题区域 tbody

      - 代码例子

        ```
        <table align="center" border="1" cellpadding="2" cellspacing="0" width="200">
            <thead>
                <tr>
                    <th>id</th>
                    <th>姓名</th>
                    <th>成绩</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>张三</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>李四</td>
                    <td>90</td>
                </tr>
            </tbody>
        </table>
        ```

    - 合并单元格

      - 跨行合并: rowspan="合并单元格的个数"

        - 目标单元格:最上侧单元格为目标单元格

      - 跨列合并: colspan="合并单元格的个数"

        - 目标单元格:最左侧单元格为目标单元格

      - 代码例子

        ```
        <table  border="1" cellpadding="1" cellspacing="0" width="240" height="240">
            <tr>
                <td></td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2"></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
        ```

    - 列表标签

      - 无序列表

        ```
        <ul>
          <li>列表项1</li>
          <li>列表项2</li>
          <li>列表项3</li>
        </ul>
        ```

      - 有序列表

        ```
        <ol>
          <li>列表项1</li>
          <li>列表项2</li>
          <li>列表项3</li>
        </ol>
        ```

      - 自定义列表

        ```
        <dl>
          <dt>联系方式</dt>
          <dd>微信</dd>
          <dd>微博</dd>
          <dd>邮箱</dd>
        </dl>
        ```
    
    - 表单标签

      - 表单域 form

        ```
        <form action="url地址" method="提交方式" name="表单域名称">
          表单元素控件
        </form>
        ```

        - action ： 指定接收并处理表单数据服务器url地址

        - method ： get/post 表单提交方式

        - name : 用于指定表单名称，以区分同一个页面中的多个表单域


 
      
      - 表单元素

        - 输入框 input

          - 单标签

            ```
            <input />
            ```

          - type属性

            ![image](https://github.com/hellowoody/web-lesson/blob/master/%E5%8E%9F%E5%9E%8B/input.png?raw=true)


        - 下拉列表 select 
       
        - 文本域 textarea


## 12.script标签

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

    - html文件是自上而下的执行方式，但引入的css和javascript的顺序有所不同，css引入执行加载时，程序仍然往下执行，而执行到< script >脚本是则中断线程，待该script脚本执行结束之后程序才继续往下执行。

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