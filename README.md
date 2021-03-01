# 第一章 什么是 JavaScript

## 1.JavaScript包含的内容

 - ECMAScript-核心
 - DOM-文档对象模型
 - BOM-浏览器对象模型

## 2.ECMAScript

 - ECMAScript，即 ECMA-262 定义的语言，并不局限于 Web 浏览器。事实上，这门语言没有输入和输出之类的方法。ECMA-262 将这门语言作为一个基准来定义，以便在它之上再构建更稳健的脚本语言。Web 浏览器只是 ECMAScript 实现可能存在的一种宿主环境（host environment）。其他宿主环境还有服务器端 JavaScript 平台 Node.js 和即将被淘汰的 Adobe Flash，以及即将被流行的Deno。

 - 宿主环境提供ECMAScript 的基准实现和与环境自身交互必需的扩展。扩展（比如 DOM）使用 ECMAScript 核心类型和语法，提供特定于环境的额外功能。

 - ECMAScript 版本
	- ES5 - 2009年提出,最流行最兼容那版本
	- ES6 - 2015年提出（ES2015）
		- ES6 正式支持了类、模块、迭代器、生成器、箭头、函数、期约、反射、代理和众多新的数据类型。
	- ES7 - 2016年提出（ES2016）
		- 如 Array.prototype.includes 和指数操作符
	- ES8 - 2017年提出（ES2017）
		- 要增加了异步函数（async/ await）、SharedArrayBuffer 及 Atomics API，以及 Object.values()/Object.entries()/Object. getOwnPropertyDescriptors()和字符串填充方法，另外明确支持对象字面量最后的逗号。
	- ES9 - 2018年提出（ES2018）
		- 异步迭代、剩余和扩展属性、一组新的正则表达式特性、Promise finally()，以及模板字面量
	- ES10 - 2019年提出（ES2019）
		- 增加了 Array.prototype.flat()/flatMap()、String.prototype.trimStart()/trimEnd()、Object.fromEntries()方法，以及 Symbol.prototype.description 属性，明确定义了 Function.prototype.toString()的返回值并固定了 Array.prototype.sort()的顺序。另外，这次修订解决了与 JSON 字符串兼容的问题，并定义了 catch 子句的可选绑定。

## 3.浏览器的支持

  | 浏览器            |             ECMAScript 符合性     |
| -----------------------    | ------------------------ |
| Netscape Navigator 2 | — |  
| Netscape Navigator 3 | — | 
| Netscape Navigator 4~4.05 | — | 
| Netscape Navigator 4.06~4.79 | 第 1 版| 
| Netscape 6+（Mozilla 0.6.0+） | 第 3 版 | 
| IE3 | — |  
| IE4 | — | 
| IE5 | 第 1 版 | 
| IE5.5~8 | 第 3 版 | 
| IE9 | 第 5 版（部分）| 
| IE10~11 | 第 5 版 | 
| Edge 12+ | 第 6 版 | 
| Opera 6~7.1 | 第 2 版 | 
| Opera 7.2+ | 第 3 版 | 
| Opera 15~28 | 第 5 版 | 
| Opera 29~35 | 第 6 版（部分）| 
| Opera 36+ | 第 6 版 | 
| Safari 1~2.0.x | 第 3 版（部分）| 
| Safari 3.1~5.1 | 第 5 版（部分）| 
| Safari 6~8 | 第 5 版 | 
| Safari 9+ | 第 6 版 | 
| iOS Safari 3.2~5.1 | 第 5 版（部分）| 
| iOS Safari 6~8.4 | 第 5 版 | 
| iOS Safari 9.2+ | 第 6 版 | 
| Chrome 1~3 | 第 3 版 | 
| Chrome 4~22 | 第 5 版（部分）| 
| Chrome 23+ | 第 5 版 | 
| Chrome 42~48 | 第 6 版（部分）| 
| Chrome 49+ | 第 6 版 | 
| Firefox 1~2 | 第 3 版 | 
| Firefox 3.0.x~20 | 第 5 版（部分）| 
| Firefox 21~44 | 第 5 版 | 
| Firefox 45+ | 第 6 版 | 

## 4.DOM

 文档对象模型（DOM，Document Object Model）是一个应用编程接口（API），用于在 HTML 中使用扩展的 XML。DOM 将整个页面抽象为一组分层节点。HTML 或 XML 页面的每个组成部分都是一种节点，包含不同的数据。比如下面的 HTML 页面：
 
 ```
 <html> 
	<head> 
	<title>Sample Page</title> 
	</head> 
	<body> 
	<p> Hello World!</p> 
	</body> 
 </html>
 ```

 这些代码通过 DOM 可以表示为一组分层节点.
 DOM 通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用 DOM API，可以轻松地删除、添加、替换、修改节点。

 - 添加元素

	```
	var para=document.createElement("p");
	var node=document.createTextNode("这是一个新段落。");
	para.appendChild(node);
	var element=document.getElementsByTagName("body")[0];
	element.appendChild(para);
	```

 - 替换元素

	```
	var parent=document.getElementsByTagName("body")[0];
	var child=document.getElementsByTagName("p")[0];
	var para=document.createElement("p");
	var node=document.createTextNode("这是一个新的段落。");
	para.appendChild(node);
	parent.replaceChild(para,child);
	```

 - 删除元素
	
	```
	var parent=document.getElementsByTagName("body")[0];
	var child=document.getElementsByTagName("p")[0];
	parent.removeChild(child);
	```


### 4.1 为什么 DOM 是必需的

 在 IE4 和 Netscape Navigator 4 支持不同形式的动态 HTML（DHTML）的情况下，开发者首先可以做到不刷新页面而修改页面外观和内容。这代表了 Web 技术的一个巨大进步，但也暴露了很大的问题。由于网景和微软采用不同思路开发 DHTML，开发者写一个 HTML 页面就可以在任何浏览器中运行的好日子就此终结。为了保持 Web 跨平台的本性，必须要做点什么。人们担心如果无法控制网景和微软各行其是，那么 Web 就会发生分裂，导致人们面向浏览器开发网页。就在这时，万维网联盟（W3C，World Wide Web Consortium）开始了制定 DOM标准的进程。

### 4.2 DOM 级别

 1998 年 10 月，DOM Level 1 成为 W3C 的推荐标准。这个规范由两个模块组成：DOM Core 和 DOM HTML。前者提供了一种映射 XML 文档，从而方便访问和操作文档任意部分的方式；后者扩展了前者，并增加了特定于 HTML 的对象和方法。

 - DOM Level 1 的目标是映射文档结构，而 DOM Level 2 的目标则宽泛得多。这个对最初 DOM 的扩展增加了对（DHTML 早就支持的）鼠标和用户界面事件、范围、遍历（迭代 DOM 节点的方法）的支持，而且通过对象接口支持了层叠样式表（CSS）。另外，DOM Level 1 中的 DOM Core 也被扩展以包含对 XML 命名空间的支持。

 - DOM Level 2 新增了以下模块，以支持新的接口。
  - DOM 视图：描述追踪文档不同视图（如应用 CSS 样式前后的文档）的接口。
  - DOM 事件：描述事件及事件处理的接口。
  - DOM 样式：描述处理元素 CSS 样式的接口。
  - DOM 遍历和范围：描述遍历和操作 DOM 树的接口。

 - DOM Level 3 进一步扩展了 DOM，增加了以统一的方式加载和保存文档的方法（包含在一个叫 DOM Load and Save 的新模块中），还有验证文档的方法（DOM Validation）。在 Level 3 中，DOM Core 经过扩展支持了所有 XML 1.0 的特性，包括 XML Infoset、XPath 和 XML Base。

 - 目前，W3C 不再按照 Level 来维护 DOM 了，而是作为 DOM Living Standard 来维护，其快照称为DOM4。DOM4 新增的内容包括替代 Mutation Events 的 Mutation Observers。

### 4.3 DOM 兼容性

 DOM也有不同浏览器支持不同的兼容性问题，但兼容表和上一节的兼容表不一样，推荐从网上搜索一下某一版本的浏览器是否支持对应版本的DOM

## 5.BOM



