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

 - 内部样式（优先级居中）

    在html的head中用style标签进行声明

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


 - 行间样式（优先级最高）

    ```
    <div style="color:red">行间样式</div>
    ```   
 
 - 外部样式（优先级最低）

    ```
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta content="width=device-width,initial-scale=1" name="viewport" />
            <title>标准模板</title>
            <link rel="stylesheet" href="index.css">
        </head>
        <body>
            <h1>hello world</h1>
        </body>
    <html>
    ```

    ```
    //css文件 index.css

    h1 {
        color:blue;
    }

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

    - 更准确更高效的选择目标元素(标签)

    - 由两个或多个基础选择器，通过不同方式组合而成

    - 常用的复合选择器

        - 后代选择器

            ```
            <ol>
                <li>a</li>
                <li>b</li>
                <li><div>c</div></li>
            </ol>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            ```

            要求：把ol里面的li全部改为red

            ```
            ol li {
                color:red;
            }

            ol div {
                color:blue
            }
            ```

            注意：1.ol和li中间需要用空格隔开
                 2.ol必须是li的父节点
                 3.ol和li不是必须父子关系，也可以是“爷孙”关系，只要满足后代就行

        - 子选择器
            
            - 只能作为某元素的最近一级子元素，简单理解就是“亲儿子”元素

                ```
                <div class="nav">
                    <a href="#">i am son</a>
                    <p>
                        <a href="#">i am grandson</a>
                    </p>
                </div>
                ```

                ```
                .nav>a {
                    color:red;
                }
                ```

        - 并集选择器

            可以选择多组标签，同时为他们定义相同的样式，通常用于集体声明

            ```
            <div>100</div>
            <p>200</p>
            <span>300</span>
            <ul class="u-class">
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
            ```

            - 将div，p改为红色

                ```
                div , p {
                    color:red;
                }
                ```

            - 将div，p，ul中的li 的字体改完蓝色

                ```
                div,p,u-class li {
                    color:blue;
                }
                ```

        - 伪类选择器

            - 用于向某些选择器添加特殊的效果，比如给链接添加特殊效果，或选择第一个，第n个元素

            - 伪类选择器最大的特点是用冒号:表示，比如:hover,:first-child

            - 伪类选择器有很多，下面讲比较常用的

                - 链接伪类

                    ```
                    a:link /* 选择所有未被访问的元素 */ 
                    a:visited /* 选择所有已被访问的元素 */ 
                    a:hover /* 选择鼠标指针位于其上的元素 */ 
                    a:active /* 选择活动链接(鼠标按下未弹起的链接) */ 
                    ```

                    ```
                    <a href="#">hello world</a>
                    ```

                    ```
                    /* 未访问的链接a:link */
                    a:link {
                        color:#333;
                        text-decoration:none;
                    }
                    /* 选择点击过的链接 */
                    a:visited {
                        color:red;
                    }
                    /* 选择鼠标经过的那个链接 */
                    a:hover {
                        color:blue;
                    }

                    a:active {
                        color:grey;
                    }
                    ```

                - 链接伪类注意事项

                    - 为了确保生效，安照LVHA顺序声明 :link - :visited - :hover - :active
                    
                    - a标签在浏览器有默认样式，所以实际工作中，都需要给a链接单独的样式

                - 链接伪类常用的写法

                    ```
                    a {
                        text-decoration:none;
                        color:#363636;
                    }

                    a:hover {
                        color:red;
                    }
                    ```




                - :focus 伪类选择器

                    - 用于选取获取焦点的表单元素

                    - 焦点就是光标，一般情况&lt;input&gt;元素才能获取，因此这个选择器主要针对input来说

                        ```
                        input:focus {
                            backgound-color:red;
                        }
                        ```

                        ```
                        <input type="text" />
                        ```



                        
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

    ```
    <div>测试text align属性</div>
    ```

    |属性值 |解释 |
    |---   |---  |
    |left  |左对齐(默认值) |
    |right |右对齐  |
    |center|居中对齐|

 - 装饰文本text-decoration

    text-decoration属性文本的修饰，可以添加下划线，删除线，上划线

    ```
    div {
        text-decoration:underline; // none | underline下划线 | overline上划线 | line-through删除线
    }
    ```

    主要用于a标签 去掉下划线

 - 文本缩进text-indent

    文本的第一行缩进，通常是段落的首行缩进

    ```
    div {
        text-indent:10px;
    }
    ```

 - 行间距line-height

    用于设置行间的距离(行高),可以控制文字与行与行之间的距离

    line-height包含上间距，文字高度（大小），下间距

    ```
    div {
        line-height:24px
    }
    ```

## 8.元素显示模式

 - 显示元素分类

    - 块元素

        div,p,h1-h6,ul,ol,li都是常用的块元素

        - 独占一行

        - 高度，宽度，外边距，内边距可以控制

        - 宽度默认是容器（父级容器）的100%

        - 里面可以放块元素和行元素

        - 注意 类似p，h1-h6文字类的块级元素，内部不允许再放块级元素

    - 行元素

        也叫行内元素，内联元素
        a,span都是常用的行元素

        - 相邻行内元素在一行上，一行显示多个

        - 高，宽度直接设置是无效的

        - 默认宽度就是它本身内容的宽度

        - 只能容纳文本和其他行元素

        - 注意
            - a标签里不能再放a 
            
            - a标签里面可以放块级元素，但是需要给a转换一下块级模式

    - 行内块元素

        img,input,td 他们同时具有块元素和行元素的特点
        
        - 一行上可以放多个

        - 默认块度就是其本身宽度

        - 高度，行高，内外边距都是控制

 - 显示模式转换

    - 转换为块元素：display:block

        ```
        a {
            display:block;
            width:100px;
            height:100px;
            background-color:red;
        }
        ```

        ```
        <a href="#">显示模式转换</a>
        ```

    - 转换为行元素:display:inline

        ```
        div {
            display:inline;
        }
        ```

        ```
        <div>aaa</div>
        <div>bbb</div>
        ```

    - 转换为行内块元素:display:inline-block

        ```
        span {
            display:inline-block;
            width:100px;
            height:100px;
            background-color:blue;
        }
        ```

        ```
        <span>100</span>
        <span>200</span>
        ```



## 9.背景设置background

 - 背景颜色background-color

    ```
    div {
        background-color:red; /* transparent 透明(默认值) | 16进制 ｜ rgb ｜ 内置颜色 */
    }
    ```

 - 背景图片background-image

    ```
    div {
        background-image:none 默认值 | url(url);
    }
    ```

    - 背景平铺background-repeat

        ```
        background-repeat: repeat 默认值 | no-repeat | repeat-x | repeat-y;
        ```

        ```
        <div class="imgclass"></div>
        ```

        ```
        .imgclass {
            width:500px;
            height:500px;
            background-image:url(i.jpg);
            background-repeat: repeat;
        }
        ```
    - 背景图片位置background-position

        ```
        background-position: x y ;
        ```
        x,y 可以是具体数值也可以是内置的方位position (center left right top bottom)

    - 背景图片固定background-attachment

        设置背景图片是否固定或随着页面滚动

        ```
        background-attachment: scroll | fixed ;
        ```

    - 背景复合写法

        ```
        background:颜色 图片地址 平铺 是否滚动 图片位置  //注： 这个顺序没有强制性要求，但一般按这个顺序写
        ```

    - 背景半透明

        a对应alpha值 在0～1之间

        ```
        background:rgba(0,0,0,0.3)
        ```

## 10.css三大特定

 - 层叠性

    如果样式冲突时，选择离标签最近的样式

 - 继承性

 - 优先性

    ![image](https://raw.githubusercontent.com/hellowoody/web-lesson/master/%E5%8E%9F%E5%9E%8B/css-important.png)