# Css 基础 教程

## 1.什么是css

 - css是层叠样式表（Cascading style sheets）的简称，翻译过来叫css样式或级联样式表
    
 - css和html一样，也是标记语言

 - 用于html的文本内容，图片外形，以及版面的布局和外观的显示样式

## 2.css 语法规范

 - 选择器

 - 一条或多条声明 (键值对，k/v)

 - 代码例子

    ```
    h1 {
        color:blue;  //key:value
        font-size:32px;
    }
    ```

## 3.css 声明

 - 在html的head中用style标签进行声明


    ```
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta content="width=device-width,initial-scale=1" name="viewport" />
            <title>标准模板</title>
            <style>
                h1 {
                    color:blue;
                    font-size:32px;
                }
            </style>
        </head>
        <body>
            <h1>hello world</h1>
        </body>
    <html>
    ```

## 4.css选择器简单使用

 - 代码例子

    ```
    <div>this is div one </div>
    <div>this is div two </div>
    <p>this is p content </p>
    <ul>
        <li>li of ul</li>
    </ul>
    <ol>
        <li>li of ol</li>
    </ol>
    ```
 - 小需求

    - 把div里面的文字改为红色

        ```
        <style>
            div {
                color:red
            }
        </style>
        ```

    - 把第一个div里面的文字改为蓝色

        ```
        <style>
            div:nth-of-type(1) {
                color:red
            }
        </style>
        ```

        ```
        <style>
            div:first-child {
                color:blue
            }
        </style>
        ```

        ```
        <style>
            .xxx {
                color:red
            }
        </style>
        ```

    - 把ul中的li改为红色

        ```
        <style>
            ul li  {
                color:red
            }
        </style>
        ```

## 5.选择器

 - 基础选择器

    - 标签选择器

        ```
        标签名 {
            属性1:属性值1;
            属性2:属性值2;
            属性3:属性值3;
        }
        ```

    - 类选择器

        - 样例

            ```
            <div class="类名"></div>
            ```

            ```
            .类名 {
                属性1:属性值1;
                ...
            }
            ```

        - 注:类名不要使用纯数字，中文等命名

        - 多类名

            - 可以给一个标签多个类名，从而达到更多的选择目的。简单理解就是一个标签多个名字

            - 使用方式

                多个类名中间必须用空格隔开

                ```
                <div class="cname1 cname2">多类名</div>
                ```

                ```
                .cname1 {
                    background-color:red;
                }

                .cname2 {
                    font-size:50px;
                }
                ```

            - 多类名的使用场景

                避免重复编写相同的样式

        - 练习

            利用类选择器画三个盒子（正方形），要求1和3盒子是红色的，2是蓝色的

    - id选择器

        - 样例

            ```
            <div id="div-id"></div>
            ```

            ```
            #div-id {
                属性1:属性值1;
                ...
            }
            ```

        - 注: id是不能重复的 (id一样虽然页面不会报错，但是在后期编写业务代码时会有问题)

    - 通配符选择器

        - 在css中，通配符选择器使用"*"定义，它表示选取页面中所有元素（标签）。

        - 样例

            ```
            * {
                属性1:属性值1;
                ...
            }
            ```
    - 总结

        ![image](https://raw.githubusercontent.com/hellowoody/web-lesson/master/%E5%8E%9F%E5%9E%8B/css-selector.png)

 - 复合选择器

 - 常用选择器表格

| 选择器                | 例子                   | 例子描述            | css版本 |
| -------------------- | --------------------- | ---------------------------------------- | - |
| .class               | .intro                | 选择 class="intro" 的所有元素。             | 1 |
| #id                  | #firstname            | 选择 id="firstname" 的所有元素。            | 1 |
| *                    | *                     | 选择所有元素。                               | 2 |
| element              | p                     | 选择所有 &lt;p&gt; 元素。                          | 1 |
| element,element      | div,p                 | 选择所有 &lt;div&gt; 元素和所有 &lt;p&gt; 元素。    | 1 |
| element element      | div p                 | 选择 &lt;div&gt; 元素内部的所有 &lt;p&gt; 元素。    | 1 |
| element>element      | div>p                 | 选择父元素为 &lt;div&gt; 元素的所有 &lt;p&gt; 元素。 | 2 |
| element+element      | div+p                 | 选择紧接在 &lt;div&gt; 元素之后的所有 &lt;p&gt; 元素。 | 2 |
| [attribute]          | [target]              | 选择带有 target 属性所有元素。           | 2 |
| [attribute=value]    | [target=_blank]       | 选择 target="_blank" 的所有元素。           | 2 |
| [attribute~=value]   | [title~=flower]       | 选择 title 属性包含单词 "flower" 的所有元素。 | 2 |
| [attribute|=value]   | [lang|=en]            | 选择 lang 属性值以 "en" 开头的所有元素。 | 2 |
| :link                | a:link                | 选择所有未被访问的链接。                | 1 |
| :visited             | a:visited             | 选择所有已被访问的链接。                | 1 |
| :active              | a:active              | 选择活动链接。                               | 1 |
| :hover               | a:hover               | 选择鼠标指针位于其上的链接。          | 1 |
| :focus               | input:focus           | 选择获得焦点的 input 元素。               | 2 |
| :first-letter        | p:first-letter        | 选择每个 &lt;p&gt; 元素的首字母。              | 1 |
| :first-line          | p:first-line          | 选择每个 &lt;p&gt; 元素的首行。                 | 1 |
| :first-child         | p:first-child         | 选择属于父元素的第一个子元素的每个 &lt;p&gt; 元素。 | 2 |
| :before              | p:before              | 在每个 &lt;p&gt; 元素的内容之前插入内容。  | 2 |
| :after               | p:after               | 在每个 &lt;p&gt; 元素的内容之后插入内容。  | 2 |
| :lang(language)      | p:lang(it)            | 选择带有以 "it" 开头的 lang 属性值的每个 &lt;p&gt; 元素。 | 2 |
| element1~element2    | p~ul                  | 选择前面有 &lt;p&gt; 元素的每个 &lt;ul&gt; 元素。  | 3 |
| [attribute^=value]   | a[src^="https"]       | 选择其 src 属性值以 "https" 开头的每个 &lt;a&gt; 元素。 | 3 |
| [attribute$=value]   | a[src$=".pdf"]        | 选择其 src 属性以 ".pdf" 结尾的所有 &lt;a&gt; 元素。 | 3 |
| [attribute*=value]   | a[src*="abc"]         | 选择其 src 属性中包含 "abc" 子串的每个 &lt;a&gt; 元素。 | 3 |
| :first-of-type       | p:first-of-type       | 选择属于其父元素的首个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。 | 3 |
| :last-of-type        | p:last-of-type        | 选择属于其父元素的最后 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。 | 3 |
| :only-of-type        | p:only-of-type        | 选择属于其父元素唯一的 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。 | 3 |
| :only-child          | p:only-child          | 选择属于其父元素的唯一子元素的每个 &lt;p&gt; 元素。 | 3 |
| :nth-child(n)        | p:nth-child(2)        | 选择属于其父元素的第二个子元素的每个 &lt;p&gt; 元素。 | 3 |
| :nth-last-child(n)   | p:nth-last-child(2)   | 同上，从最后一个子元素开始计数。    | 3 |
| :nth-of-type(n)      | p:nth-of-type(2)      | 选择属于其父元素第二个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。 | 3 |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。 | 3 |
| :last-child          | p:last-child          | 选择属于其父元素最后一个子元素每个 &lt;p&gt; 元素。 | 3 |
| :root                | :root                 | 选择文档的根元素。                         | 3 |
| :empty               | p:empty               | 选择没有子元素的每个 &lt;p&gt; 元素（包括文本节点）。 | 3 |
| :target              | #news:target          | 选择当前活动的 #news 元素。               | 3 |
| :enabled             | input:enabled         | 选择每个启用的 &lt;input&gt; 元素。             | 3 |
| :disabled            | input:disabled        | 选择每个禁用的 &lt;input&gt; 元素                | 3 |
| :checked             | input:checked         | 选择每个被选中的 &lt;input&gt; 元素。          | 3 |
| :not(selector)       | :not(p)               | 选择非 &lt;p&gt; 元素的每个元素。              | 3 |
| ::selection          | ::selection           | 选择被用户选取的元素部分。             | 3 |


## 6.font

 - 字体font-famliy

    ```
    p {
        font-famliy:Arial,"Microsoft Yahei"; // 多个字体，会按从左到右的顺序依次检查客服端机器中是否含有此字体，如果有则使用
    }
    ```

    注：字体是有版权的，实际开发时根据开发团队的要求设置字体，如果是自己开发的画，一般不设置此项

 - 字体大小font-size

    ```
    p {
        font-size:24px
    }
    ```

    谷歌浏览器默认字体大小16px，不同浏览器的默认字体不一样。

    注意：浏览器中支持最小字体是12px

 - 字体粗细(磅重)font-weight

    ```
    p {
        font-weight: normal; // normal | bold | bolder | lighter | number (100 - 900，默认是400和normal一样)
    }
    ```

 - font-style

    ```
    p {
        font-style: normal ; // normal | italic 斜体
    }
    ```

 - 复合属性

    ```
    p {
        font:italic bold 16px 'Microsoft Yahei' ;// font-style font-weight font-size font-family  必须按照这个顺序声明，其中 font-style font-weight可以
    }
    ```


## 7.文本属性

    css text 属性可定义外观，比如文本的颜色，对齐文本，装饰文本，文本缩进，行间距等

 - 文本颜色color

    ```
    div {
        color : red; // 十六进制表示 #363636 ; rgb表示 rgb(200,200,200)
    }
    ```

    注：red,blue是预定义值，一般测试时经常用到。但在实际项目开发时十六进制表示法是最常用到的

 - 对齐文本text-align

    ```
    div {
        text-align:center;
    }
    ```

    |属性值 |解释 |
    |---   |---  |
    |left  |左对齐(默认值) |
    |right |右对齐 ｜
    |center|居中对齐|