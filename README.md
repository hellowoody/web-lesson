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

IE3 和 Netscape Navigator 3 提供了浏览器对象模型（BOM） API，用于支持访问和操作浏览器的窗口。使用 BOM，开发者可以操控浏览器显示页面之外的部分。而 BOM 真正独一无二的地方，当然也是问题最多的地方，就是它是唯一一个没有相关标准的 JavaScript 实现。HTML5 改变了这个局面，这个版本的 HTML 以正式规范的形式涵盖了尽可能多的 BOM 特性。由于 HTML5 的出现，之前很多与 BOM有关的问题都迎刃而解了。

- 总体来说，BOM 主要针对浏览器窗口和子窗口（frame），不过人们通常会把任何特定于浏览器的扩展都归在 BOM 的范畴内。比如，下面就是这样一些扩展：

	- 弹出新浏览器窗口的能力；

		```
		window.open("about:blank", "_blank","height=100,width=100,top=0,left=0,resizable=yes");
		```
	
	- 移动、缩放和关闭浏览器窗口的能力；
	
		```
		var open = window.open("about:blank", "_blank","height=100,width=100,top=0,left=0,resizable=yes");
		open.moveTo(100, 100);
		open.moveBy(100, 100);
		open.resizeTo(500, 500);
		open.close();
		```
	
	- navigator 对象，提供关于浏览器的详尽信息；

		```
		navigator.appName  // 浏览器全名
		navigator.platform  // 返回浏览器运行的系统平台
		navigator.deviceMemory // 返回单位为 GB 的设备内存容量
		navigator.onLine      //是否联网，但不能判断是互联网还是局域网
		navigator.getBattery().then((b) => console.log(b));  // 查看电脑电量
		```

	- location 对象，提供浏览器加载页面的详尽信息；

		```
		navigator.geolocation.getCurrentPosition((position) => p = position);
		console.log(p.timestamp); // 1525364883361 
		console.log(p.coords); // Coordinates {...}
		console.log(p.coords.latitude, p.coords.longitude); // 37.4854409, -122.2325506
		```

	- screen 对象，提供关于用户屏幕分辨率的详尽信息；

		```
		 screen.height
		 screen.width
		 screen.colorDepth
		 screen.pixelDepth
		```
	- performance 对象，提供浏览器内存占用、导航行为和时间统计的详尽信息；
	- history 对象；

		```
		// 后退一页
		history.go(-1); 
		// 前进一页
		history.go(1); 
		// 前进两页
		history.go(2);
		// 后退一页
		history.back();
		// 前进一页
		history.forward();
		```

	- 其他自定义对象，如 XMLHttpRequest 和 IE 的 ActiveXObject。

- 因为在很长时间内都没有标准，所以每个浏览器实现的都是自己的 BOM。有一些所谓的事实标准，比如对于 window 对象和 navigator 对象，每个浏览器都会给它们定义自己的属性和方法。现在有了HTML5，BOM 的实现细节应该会日趋一致。


# 第二章 HTML 引入 JavaScript

## script标签
 
 将 JavaScript 插入 HTML 的主要方法是使用&lt;script&gt;元素。这个元素是由网景公司创造出来，并最早在 Netscape Navigator 2 中实现的。后来，这个元素被正式加入到 HTML 规范。&lt;script&gt;元素有下列 8 个属性。

 - async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。
 - charset：可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。
 - crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin= "anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。
 - defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在 IE7 及更早的版本中，对行内脚本也可以指定这个属性。
 - integrity：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容。
 - language：废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。
 - src：可选。表示包含要执行的代码的外部文件。
 - type：可选。代替 language，表示代码块中脚本语言的内容类型（也称 MIME 类型）。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript 文件的 MIME 类型通常是"application/x-javascript"，不过给type 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。如果这个值是 module，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。