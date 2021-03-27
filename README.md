# 第一章 什么是 JavaScript

## 1.1 JavaScript包含的内容

 - ECMAScript-核心
 - DOM-文档对象模型
 - BOM-浏览器对象模型

## 1.2 ECMAScript

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

## 1.3 浏览器的支持

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

## 1.4 DOM

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

## 1.5 BOM

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

## 2.1 script标签
 
 将 JavaScript 插入 HTML 的主要方法是使用&lt;script&gt;元素。这个元素是由网景公司创造出来，并最早在 Netscape Navigator 2 中实现的。后来，这个元素被正式加入到 HTML 规范。&lt;script&gt;元素有下列 8 个属性。

 - async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。
 - charset：可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。
 - crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin= "anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。
 - defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在 IE7 及更早的版本中，对行内脚本也可以指定这个属性。
 - integrity：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容。
 - language：废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。
 - src：可选。表示包含要执行的代码的外部文件。
 - type：可选。代替 language，表示代码块中脚本语言的内容类型（也称 MIME 类型）。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript 文件的 MIME 类型通常是"application/x-javascript"，不过给type 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。如果这个值是 module，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。

 使用&lt;script&gt;的方式有两种：通过它直接在网页中嵌入 JavaScript 代码，以及通过它在网页中包含外部 JavaScript 文件。
 要嵌入行内 JavaScript 代码，直接把代码放在&lt;script&gt;元素中就行：

 ```
 <script> 
 function sayHi() { 
	console.log("Hi!"); 
 } 
 </script>
 ```

 包含在&lt;script&gt;内的代码会被从上到下解释。在上面的例子中，被解释的是一个函数定义，并且该函数会被保存在解释器环境中。在&lt;script&gt;元素中的代码被计算完成之前，页面的其余内容不会被加载，也不会被显示。

## 2.2 标签位置

```
	<!DOCTYPE html> 
	<html> 
	<head> 
	<title>Example HTML Page</title> 
	<script src="example1.js"></script> 
	<script src="example2.js"></script> 
	</head> 
	<body> 
	<!-- 这里是页面内容 --> 
	</body> 
	</html>
```
 这种做法的主要目的是把外部的 CSS 和 JavaScript 文件都集中放到一起。不过，把所有 JavaScript文件都放在&lt;head&gt;里，也就意味着必须把所有 JavaScript 代码都下载、解析和解释完成后，才能开始渲染页面（页面在浏览器解析到&lt;body&gt;的起始标签时开始渲染）。对于需要很多 JavaScript 的页面，这会导致页面渲染的明显延迟，在此期间浏览器窗口完全空白。为解决这个问题，现代 Web 应用程序通常将所有 JavaScript 引用放在&lt;body&gt;元素中的页面内容后面，如下面的例子所示：

```
	<!DOCTYPE html> 
	<html> 
	<head> 
	<title>Example HTML Page</title> 
	</head> 
	<body> 
	<!-- 这里是页面内容 --> 
	<script src="example1.js"></script> 
	<script src="example2.js"></script> 
	</body> 
	</html>
```

 这样一来，页面会在处理 JavaScript 代码之前完全渲染页面。用户会感觉页面加载更快了，因为浏览器显示空白页面的时间短了。

## 2.3 推迟执行脚本

```
	<!DOCTYPE html> 
	<html> 
	<head> 
		<title>Example HTML Page</title> 
		<script defer src="example1.js"></script> 
		<script defer src="example2.js"></script> 
	</head> 
		<body> 
		<!-- 这里是页面内容 --> 
		</body> 
	</html>
```

 虽然这个例子中的&lt;script&gt;元素包含在页面的<head>中，但它们会在浏览器解析到结束的&lt;/html&gt;标签后才会执行。HTML5 规范要求脚本应该按照它们出现的顺序执行，因此第一个推迟的脚本会在第二个推迟的脚本之前执行，而且两者都会在 DOMContentLoaded 事件之前执行。不过在实际当中，推迟执行的脚本不一定总会按顺序执行或者在 DOMContentLoaded事件之前执行，因此最好只包含一个这样的脚本。
	
 对 defer 属性的支持是从 IE4、Firefox 3.5、Safari 5 和 Chrome 7 开始的。其他所有浏览器则会忽略这个属性，按照通常的做法来处理脚本。考虑到这一点，还是把要推迟执行的脚本放在页面底部比较好。

## 2.4 异步执行脚本

 HTML5 为&lt;script&gt;元素定义了 async 属性。从改变脚本处理方式上看，async 属性与 defer 类似。当然，它们两者也都只适用于外部脚本，都会告诉浏览器立即开始下载。不过，与 defer 不同的是，标记为 async 的脚本并不保证能按照它们出现的次序执行，比如：

```
<!DOCTYPE html> 
<html> 
 <head> 
 <title>Example HTML Page</title> 
<script async src="example1.js"></script> 
<script async src="example2.js"></script> 
 </head> 
 <body> 
 <!-- 这里是页面内容 --> 
 </body> 
</html>
```

 在这个例子中，第二个脚本可能先于第一个脚本执行。因此，重点在于它们之间没有依赖关系。给脚本添加 async 属性的目的是告诉浏览器，不必等脚本下载和执行完后再加载页面，同样也不必等到该异步脚本下载和执行后再加载其他脚本。正因为如此，异步脚本不应该在加载期间修改 DOM。

 异步脚本保证会在页面的 load 事件前执行，但可能会在 DOMContentLoaded之前或之后。Firefox 3.6、Safari 5 和 Chrome 7 支持异步脚本。使用 async 也会告诉页面你不会使用document.write，不过好的 Web 开发实践根本就不推荐使用这个方法。

## 2.5 动态加载脚本

```
 	let script = document.createElement('script'); 
	script.src = 'gibberish.js'; 
	script.async = false; 
	document.head.appendChild(script);
```

 在把 HTMLElement 元素添加到 DOM 且执行到这段代码之前不会发送请求。默认情况下，以这种方式创建的&lt;script&gt;元素是以异步方式加载的，相当于添加了 async 属性。不过这样做可能会有问题，因为所有浏览器都支持 createElement()方法，但不是所有浏览器都支持 async 属性。因此，如果要统一动态脚本的加载行为，可以明确将其设置为同步加载.

 以这种方式获取的资源对浏览器预加载器是不可见的。这会严重影响它们在资源获取队列中的优先级。根据应用程序的工作方式以及怎么使用，这种方式可能会严重影响性能。要想让预加载器知道这些动态请求文件的存在，可以在文档头部显式声明它们：

```
	<link rel="preload" href="gibberish.js">
```

## 2.6 XHTML 中的变化

可扩展超文本标记语言（XHTML，Extensible HyperText Markup Language）是将 HTML 作为 XML的应用重新包装的结果。与 HTML 不同，在 XHTML 中使用 JavaScript 必须指定 type 属性且值为text/javascript，HTML 中则可以没有这个属性。XHTML 虽然已经退出历史舞台，但实践中偶尔可能也会遇到遗留代码，这里稍作介绍。

在 XHTML 中编写代码的规则比 HTML 中严格，这会影响使用&lt;script&gt;元素嵌入 JavaScript 代码。下面的代码块虽然在 HTML 中有效，但在 XHML 中是无效的。

```
<script type="text/javascript"> 
 function compare(a, b) { 
 if (a < b) { 
 console.log("A is less than B"); 
 } else if (a > b) { 
 console.log("A is greater than B"); 
 } else { 
 console.log("A is equal to B"); 
 } 
 } 
</script>
```

在 HTML 中，解析&lt;script&gt;元素会应用特殊规则。XHTML 中则没有这些规则。这意味着 a < b语句中的小于号（<）会被解释成一个标签的开始，并且由于作为标签开始的小于号后面不能有空格，这会导致语法错误。
避免 XHTML 中这种语法错误的方法有两种。第一种是把所有小于号（<）都替换成对应的 HTML实体形式（&lt;）。结果代码就是这样的:

```
<script type="text/javascript"> 
 function compare(a, b) { 
if (a &lt; b) { 
 console.log("A is less than B"); 
} else if (a > b) { 
 console.log("A is greater than B"); 
 } else { 
 console.log("A is equal to B"); 
 } 
 } 
</script>
```

这样代码就可以在 XHTML 页面中运行了。不过，缺点是会影响阅读。好在还有另一种方法。第二种方法是把所有代码都包含到一个 CDATA 块中。在 XHTML（及 XML）中，CDATA 块表示文档中可以包含任意文本的区块，其内容不作为标签来解析，因此可以在其中包含任意字符，包括小于号，并且不会引发语法错误。使用 CDATA 的格式如下：

```
<script type="text/javascript"><![CDATA[ 
 function compare(a, b) { 
 if (a < b) { 
 console.log("A is less than B"); 
 } else if (a > b) { 
 console.log("A is greater than B"); 
 } else { 
 console.log("A is equal to B"); 
 } 
 } 
]]></script>
```

在兼容 XHTML 的浏览器中，这样能解决问题。但在不支持 CDATA 块的非 XHTML 兼容浏览器中则不行。为此，CDATA 标记必须使用 JavaScript 注释来抵消：

```
<script type="text/javascript"> 
//<![CDATA[ 
 function compare(a, b) { 
 if (a < b) { 
 console.log("A is less than B"); 
 } else if (a > b) { 
 console.log("A is greater than B"); 
 } else { 
 console.log("A is equal to B"); 
 } 
 } 
//]]> 
</script>
```

这种格式适用于所有现代浏览器。虽然有点黑科技的味道，但它可以通过 XHTML 验证，而且对XHTML 之前的浏览器也能优雅地降级。

## 2.7 行内代码与外部文件

虽然可以直接在 HTML 文件中嵌入 JavaScript 代码，但通常认为最佳实践是尽可能将 JavaScript 代码放在外部文件中。不过这个最佳实践并不是明确的强制性规则。推荐使用外部文件的理由如下。

 - 可维护性。
  JavaScript 代码如果分散到很多 HTML 页面，会导致维护困难。而用一个目录保存所有 JavaScript 文件，则更容易维护，这样开发者就可以独立于使用它们的 HTML 页面来编辑代码。
 - 缓存。
  浏览器会根据特定的设置缓存所有外部链接的 JavaScript 文件，这意味着如果两个页面都用到同一个文件，则该文件只需下载一次。这最终意味着页面加载更快。
 - 适应未来。
  通过把 JavaScript 放到外部文件中，就不必考虑用 XHTML 或前面提到的注释黑科技。包含外部 JavaScript 文件的语法在 HTML 和 XHTML 中是一样的。

在配置浏览器请求外部文件时，要重点考虑的一点是它们会占用多少带宽。在 SPDY/HTTP2 中，预请求的消耗已显著降低，以轻量、独立 JavaScript 组件形式向客户端送达脚本更具优势。
比如，第一个页面包含如下脚本：

```
<script src="mainA.js"></script> 
<script src="component1.js"></script> 
<script src="component2.js"></script> 
<script src="component3.js"></script> 
...
```

后续页面可能包含如下脚本：

```
<script src="mainB.js"></script> 
<script src="component3.js"></script> 
<script src="component4.js"></script> 
<script src="component5.js"></script> 
...
```

在初次请求时，如果浏览器支持 SPDY/HTTP2，就可以从同一个地方取得一批文件，并将它们逐个放到浏览器缓存中。从浏览器角度看，通过 SPDY/HTTP2 获取所有这些独立的资源与获取一个大JavaScript 文件的延迟差不多。

在第二个页面请求时，由于你已经把应用程序切割成了轻量可缓存的文件，第二个页面也依赖的某些组件此时已经存在于浏览器缓存中了。

当然，这里假设浏览器支持 SPDY/HTTP2，只有比较新的浏览器才满足。如果你还想支持那些比较老的浏览器，可能还是用一个大文件更合适。

## 2.8 文档模式

IE5.5 发明了文档模式的概念，即可以使用 doctype 切换文档模式。最初的文档模式有两种：混杂模式（quirks mode）和标准模式（standards mode）。

IE 初次支持文档模式切换以后，其他浏览器也跟着实现了。随着浏览器的普遍实现，又出现了第三种文档模式：准标准模式（almost standards mode）。这种模式下的浏览器支持很多标准的特性，但是没有标准规定得那么严格。主要区别在于如何对待图片元素周围的空白（在表格中使用图片时最明显）。

混杂模式在所有浏览器中都以省略文档开头的 doctype 声明作为开关。这种约定并不合理，因为混杂模式在不同浏览器中的差异非常大，不使用黑科技基本上就没有浏览器一致性可言。

标准模式通过下列几种文档类型声明开启：
```
<!-- HTML 4.01 Strict --> 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
"http://www.w3.org/TR/html4/strict.dtd"> 
<!-- XHTML 1.0 Strict --> 
<!DOCTYPE html PUBLIC 
"-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<!-- HTML5 --> 
<!DOCTYPE html>
```
准标准模式通过过渡性文档类型（Transitional）和框架集文档类型（Frameset）来触发：

```
<!-- HTML 4.01 Transitional --> 
<!DOCTYPE HTML PUBLIC 
"-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd"> 
<!-- HTML 4.01 Frameset --> 
<!DOCTYPE HTML PUBLIC 
"-//W3C//DTD HTML 4.01 Frameset//EN" 
"http://www.w3.org/TR/html4/frameset.dtd"> 
<!-- XHTML 1.0 Transitional --> 
<!DOCTYPE html PUBLIC 
"-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<!-- XHTML 1.0 Frameset --> 
<!DOCTYPE html PUBLIC 
"-//W3C//DTD XHTML 1.0 Frameset//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

准标准模式与标准模式非常接近，很少需要区分。人们在说到“标准模式”时，可能指其中任何一个。而对文档模式的检测（本书后面会讨论）也不会区分它们。一般所说的标准模式，指的就是除混杂模式以外的模式。




## 2.9 <noscript>元素

针对早期浏览器不支持 JavaScript 的问题，需要一个页面优雅降级的处理方案。最终，&lt;noscript&gt;元素出现，被用于给不支持JavaScript 的浏览器提供替代内容。虽然如今的浏览器已经 100%支持JavaScript，但对于禁用 JavaScript 的浏览器来说，这个元素仍然有它的用处。
&lt;noscript&gt;元素可以包含任何可以出现在&lt;body&gt;中的 HTML 元素，&lt;script&gt;除外。在下列两种情况下，浏览器将显示包含在&lt;noscript&gt;中的内容：

 - 浏览器不支持脚本;
 - 浏览器对脚本的支持被关闭;

任何一个条件被满足，包含在&lt;noscript&gt;中的内容就会被渲染。否则，浏览器不会渲染&lt;noscript&gt;中的内容。
下面是一个例子：
```
<!DOCTYPE html> 
<html> 
 <head> 
 <title>Example HTML Page</title> 
 <script defer="defer" src="example1.js"></script> 
 <script defer="defer" src="example2.js"></script> 
 </head> 
 <body> 
<noscript> 
<p>This page requires a JavaScript-enabled browser.</p> 
</noscript> 
 </body> 
</html>
```
这个例子是在脚本不可用时让浏览器显示一段话。如果浏览器支持脚本，则用户永远不会看到它。

# 第三章 语言基础

  ## 3.1 语法

ECMAScript 的语法很大程度上借鉴了 C 语言和其他类 C 语言，如 Java 和 Perl。熟悉这些语言的开发者，应该很容易理解ECMAScript 宽松的语法。

- 区分大小写
- 标识符
  - 第一个字符必须是一个字母、下划线（_）或美元符号（$）
  - 剩下的其他字符可以是字母、下划线、美元符号或数字
- 注释
  - 单行注释 //
  - 块注释 
	```
	/*
	这是多行
	注释
	*/
	```
- 严格模式

	```
	"use strict";
	```

- 语句

	```
	let sum = a + b // 没有分号也有效，但不推荐
	let diff = a - b; // 加分号有效，推荐
	```

	```
	if (test) { 
		test = false; 
		console.log(test); 
	}

	// 有效，但容易导致错误，应该避免
	if (test) 
	console.log(test); 
	// 推荐
	if (test) { 
	console.log(test); 
	}

	```

- 关键字与保留字

- var 关键字

   ```
   var message; // undefined
   ```

  ```
  var message = "hi"; 
  message = 100; // 合法，但不推荐
  ```
  在这个例子中，变量 message 首先被定义为一个保存字符串值 hi 的变量，然后又被重写为保存了数值 100。虽然不推荐改变变量保存值的类型，但这在 ECMAScript 中是完全有效的。

- var 声明作用域

  ```
  function test() { 
	var message = "hi"; // 局部变量
  } 
  test(); 
  console.log(message); // 出错！
  ```

  ```
  // 不推荐
  function test() { 
    message = "hi"; // 全局变量
  } 
  test(); 
  console.log(message); // "hi"
  ```

  ```
  var message = "hi", 
      found = false, 
      age = 29;
  ```
 
- var 声明提升

  ```
  function foo() { 
	console.log(age); 
	var age = 26; 
   } 
  foo(); // undefined
  ```
  之所以不会报错，是因为 ECMAScript 运行时把它看成等价于如下代码：
  ```
  function foo() { 
	var age; 
	console.log(age); 
	age = 26; 
  } 
  foo(); // undefined
  ```
  这就是所谓的“提升”（hoist），也就是把所有变量声明都拉到函数作用域的顶部。

  ```
  function foo() { 
	var age = 16; 
	var age = 26; 
	var age = 36; 
	console.log(age); 
  } 
  foo(); // 36
  ```

- let 声明 

  let 跟 var 的作用差不多，但有着非常重要的区别。最明显的区别是，let 声明的范围是块作用域，而 var 声明的范围是函数作用域。
  
  ```
  if (true) { 
	var name = 'Matt'; 
	console.log(name); // Matt 
  } 
	console.log(name); // Matt
  ```

  ```
  if (true) { 
	let age = 26; 
	console.log(age); // 26 
  } 
	console.log(age); // ReferenceError: age 没有定义
  ```

- 暂时性死区

  ```
  // name 会被提升
	console.log(name); // undefined 
	var name = 'Matt'; 
	// age 不会被提升
	console.log(age); // ReferenceError：age 没有定义
	let age = 26;
  ```
  在解析代码时，JavaScript 引擎也会注意出现在块后面的 let 声明，只不过在此之前不能以任何方式来引用未声明的变量。在 let 声明之前的执行瞬间被称为“暂时性死区”（temporal dead zone），在此阶段引用任何后面才声明的变量都会抛出 ReferenceError。

- 全局声明

  ```
  var name = 'Matt'; 
	console.log(window.name); // 'Matt' 
	let age = 26; 
	console.log(window.age); // undefined
  ```
  
  不过，let 声明仍然是在全局作用域中发生的，相应变量会在页面的生命周期内存续。因此，为了避免 SyntaxError，必须确保页面不会重复声明同一个变量。

-  for 循环中的 let 声明
  
  在 let 出现之前，for 循环定义的迭代变量会渗透到循环体外部：
  ```
   for (var i = 0; i < 5; ++i) { 
	// 循环逻辑
   } 
   console.log(i); // 5
  ```
  改成使用 let 之后，这个问题就消失了，因为迭代变量的作用域仅限于 for 循环块内部：
  ```
  	for (let i = 0; i < 5; ++i) { 
	// 循环逻辑
	} 
	console.log(i); // ReferenceError: i 没有定义
  ```
  在使用 var 的时候，最常见的问题就是对迭代变量的奇特声明和修改：
  ```
    for (var i = 0; i < 5; ++i) { 
		setTimeout(() => console.log(i), 0) 
	} 
	// 你可能以为会输出 0、1、2、3、4 
	// 实际上会输出 5、5、5、5、5
  ```

  ```
  for (let i = 0; i < 5; ++i) { 
	setTimeout(() => console.log(i), 0) 
  } 
	// 会输出 0、1、2、3、4
  ```
  这种每次迭代声明一个独立变量实例的行为适用于所有风格的 for 循环，包括 for-in 和 for-of循环。

- const 声明
 
   const 的行为与 let 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且尝试修改 const 声明的变量会导致运行时错误。 
   ```
   const age = 26; 
   age = 36; // TypeError: 给常量赋值
   ```

   ```
   // const 也不允许重复声明
	const name = 'Matt'; 
	const name = 'Nicholas'; // SyntaxError
   ```

   ```
   // const 声明的作用域也是块
	const name = 'Matt'; 
	if (true) { 
	const name = 'Nicholas'; 
	} 
	console.log(name); // Matt
   ```

   const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 的限制。

   ```
    const person = {}; 
	person.name = 'Matt'; // ok
   ```

  ## 3.2 数据类型

    ECMAScript 有 6 种简单数据类型（也称为原始类型）：Undefined、Null、Boolean、Number、String 和 Symbol。Symbol（符号）是 ECMAScript 6 新增的。还有一种复杂数据类型叫 Object（对象）。Object 是一种无序名值对的集合。因为在 ECMAScript 中不能定义自己的数据类型，所有值都可以用上述 7 种数据类型之一来表示。

    - typeof 操作符

      因为 ECMAScript 的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型。typeof操作符就是为此而生的。

		```
		let message = "some string"; 
			console.log(typeof message); // "string" 
			console.log(typeof(message)); // "string" 
			console.log(typeof 95); // "number"
		```

      注意typeof在某些情况下返回的结果可能会让人费解，但技术上讲还是正确的。比如，调用typeof null 返回的是"object"。这是因为特殊值 null 被认为是一个对空对象的引用。

    - NaN

		```
		console.log(NaN !== NaN);  // true
		```

    - 数值转换

      parseInt(string, radix)   解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。

      - string
	
        要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用  ToString 抽象操作)。字符串开头的空白符将会被忽略。

      - radix 可选
        从 2 到 36，表示字符串的基数。例如指定 16 表示被解析值是十六进制数。请注意，10不是默认值！

			```
			let num1 = parseInt("10", 2); // 2，按二进制解析
				let num2 = parseInt("10", 8); // 8，按八进制解析
				let num3 = parseInt("10", 10); // 10，按十进制解析
				let num4 = parseInt("10", 16); // 16，按十六进制解析
			```

    - Number类型

      ECMAScript 中最有意思的数据类型或许就是 Number 了。Number 类型使用 IEEE 754 格式表示整数和浮点值（在某些语言中也叫双精度值）。

		```
		let intNum = 55; // 整数
		let octalNum1 = 070; // 八进制的 56
		let octalNum2 = 079; // 无效的八进制值，当成 79 处理
		let octalNum3 = 08; // 无效的八进制值，当成 8 处理
		```

      整数也可以用八进制（以 8 为基数）或十六进制（以 16 为基数）字面量表示。对于八进制字面量，第一个数字必须是零（0），然后是相应的八进制数字（数值 0~7）。如果字面量中包含的数字超出了应有的范围，就会忽略前缀的零，后面的数字序列会被当成十进制.

      要创建十六进制字面量，必须让真正的数值前缀 0x（区分大小写），然后是十六进制数字（0~9 以 及 A~F）。十六进制数字中的字母大小写均可。下面是几个例子：

		```
		let hexNum1 = 0xA; // 十六进制 10 
		let hexNum2 = 0x1f; // 十六进制 31
		```

      - 值的范围

        由于内存的限制，ECMAScript 并不支持表示这个世界上的所有数值。ECMAScript 可以表示的最小数值保存在 Number.MIN_VALUE 中，这个值在多数浏览器中是 5e324；可以表示的最大数值保存在Number.MAX_VALUE 中，这个值在多数浏览器中是 1.797 693 134 862 315 7e+308。如果某个计算得到的数值结果超出了 JavaScript 可以表示的范围，那么这个数值会被自动转换为一个特殊的 Infinity（无穷）值。任何无法表示的负数以-Infinity（负无穷大）表示，任何无法表示的正数以 Infinity（正无穷大）表示。

        如果计算返回正 Infinity 或负 Infinity，则该值将不能再进一步用于任何计算。这是因为Infinity 没有可用于计算的数值表示形式。要确定一个值是不是有限大（即介于 JavaScript 能表示的最小值和最大值之间），可以使用 isFinite()函数。

			```
			let result = Number.MAX_VALUE + Number.MAX_VALUE; 
				console.log(isFinite(result)); // false
			```

    - String类型

      String（字符串）数据类型表示零或多个 16 位 Unicode 字符序列。字符串可以使用双引号（"）、单引号（'）或反引号（`）标示，因此下面的代码都是合法的：

		```
		let firstName = "John"; 
			let lastName = 'Jacob'; 
			let lastName = `Jingleheimerschmidt`
		```

     - 字符串特点
  
       ECMAScript 中的字符串是不可变的（immutable），意思是一旦创建，它们的值就不能变了。要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量，如下所示：

			```
			let lang = "Java"; 
				lang = lang + "Script";
			```
      
	 - toString()转换为字符串

       几乎所有值都有的 toString()方法。这个方法唯一的用途就是返回当前值的字符串等价物。比如：

		```
			let value1 = 10; 
			let value2 = true; 
			let value3 = null; 
			let value4; 
			console.log(String(value1)); // "10" 
			console.log(String(value2)); // "true" 
			console.log(String(value3)); // "null" 
			console.log(String(value4)); // "undefined"
		```

  	   多数情况下，toString()不接收任何参数。不过，在对数值调用这个方法时，toString()可以接收一个底数参数，即以什么底数来输出数值的字符串表示。默认情况下，toString()返回数值的十进制字符串表示。而通过传入参数，可以得到数值的二进制、八进制、十六进制，或者其他任何有效基数的字符串表示，比如：

		```
		let num = 10; 
			console.log(num.toString()); // "10" 
			console.log(num.toString(2)); // "1010" 
			console.log(num.toString(8)); // "12" 
			console.log(num.toString(10)); // "10" 
			console.log(num.toString(16)); // "a"
		```

       这个例子展示了传入底数参数时，toString()输出的字符串值也会随之改变。数值 10 可以输出为任意数值格式。注意，默认情况下（不传参数）的输出与传入参数 10 得到的结果相同。

    - 模板字面量

      ECMAScript 6 新增了使用模板字面量定义字符串的能力。与使用单引号或双引号不同，模板字面量保留换行字符，可以跨行定义字符串：

		```
		let myMultiLineString = 'first line\nsecond line'; 
		let myMultiLineTemplateLiteral = `first line 
		second line`;
		```	

	  字符串插值通过在${}中使用一个 JavaScript 表达式实现：

		```
		let value = 5; 
		let exponent = 'second';

		let interpolatedTemplateLiteral = 
		`${ value } to the ${ exponent } power is ${ value * value }`;

			console.log(interpolatedTemplateLiteral); // 5 to the second power is 25
		```

    - Object 类型
  
      ECMAScript 中的对象其实就是一组数据和功能的集合。对象通过 new 操作符后跟对象类型的名称来创建。开发者可以通过创建 Object 类型的实例来创建自己的对象，然后再给对象添加属性和方法：
    
	  ```
	  let o = new Object();

	  let o = new Object; // 合法，但不推荐
	  ```

	  每个 Object 实例都有如下属性和方法。

	  - constructor

	    用于创建当前对象的函数。在前面的例子中，这个属性的值就是 Object() 函数。

	  - hasOwnProperty(propertyName)

	    用于判断当前对象实例（不是原型）上是否存在给定的属性。要检查的属性名必须是字符串（如 o.hasOwnProperty("name")）或符号。

	  - isPrototypeOf(object)

	    用于判断当前对象是否为另一个对象的原型。

	  - propertyIsEnumerable(propertyName)

	    用于判断给定的属性是否可以使用for-in 语句枚举。与 hasOwnProperty()一样，属性名必须是字符串。

	  - toLocaleString()

	    返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。

	  - toString()

	    返回对象的字符串表示。

	  - valueOf()

	    返回对象对应的字符串、数值或布尔值表示。通常与 toString()的返回值相同。
    

  ## 3.3 操作符

    - 一元操作符

	  ```
	  let age = 29; 
		++age;

	  let age = 29; 
		age = age + 1;
	  ```

	  ```
	  let age = 29; 
		let anotherAge = --age + 2;

		console.log(age); // 28 
		console.log(anotherAge); // 30
	  ```

	- 位操作符

	  ECMAScript中的所有数值都以 IEEE 754 64 位格式存储，但位操作并不直接应用到 64 位表示，而是先把值转换为32 位整数，再进行位操作，之后再把结果转换为 64 位。对开发者而言，就好像只有 32 位整数一样，因为 64 位整数存储格式是不可见的。既然知道了这些，就只需要考虑 32 位整数即可。

	  有符号整数使用 32 位的前 31 位表示整数值。第 32 位表示数值的符号，如 0 表示正，1 表示负。

	  
      这一位称为符号位（sign bit），它的值决定了数值其余部分的格式。正值以真正的二进制格式存储，即 31位中的每一位都代表 2 的幂。

      数值18的二进制是10010，写全了就是00000000000000000000000000010010
      
	  负值以一种称为二补数（或补码）的二进制编码存储。一个数值的二补数通过如下 3 个步骤计算得到：

      - 确定绝对值的二进制表示（如，对于18，先确定 18 的二进制表示）;

	  - 找到数值的一补数（或反码），换句话说，就是每个 0 都变成 1，每个 1 都变成 0；

	  - 给结果加 1。

		```
		基于上述步骤确定 18 的二进制表示，首先从 18 的二进制表示开始：

		0000 0000 0000 0000 0000 0000 0001 0010

		然后，计算一补数，即反转每一位的二进制值：

		1111 1111 1111 1111 1111 1111 1110 1101

		最后，给一补数加 1：

		1111 1111 1111 1111 1111 1111 1110 1101 
							1 
		----------------------------------------
		1111 1111 1111 1111 1111 1111 1110 1110
		```

		那么， 18 的二进制表示就是 11111111111111111111111111101110。要注意的是，在处理有符号整数时，我们无法访问第 31 位。





    - 按位非

	  按位非操作符用波浪符（~）表示，它的作用是返回数值的一补数。按位非是 ECMAScript 中为数不多的几个二进制数学操作符之一。
      
	  ```
	  let num1 = 25; // 二进制 00000000000000000000000000011001 
		let num2 = ~num1; // 二进制 11111111111111111111111111100110 
		console.log(num2); // -26
	  ```

	  这里，按位非操作符作用到了数值 25，得到的结果是26。由此可以看出，按位非的最终效果是对数值取反并减 1

	- 按位与

	- 按位或

	- 按位异或

	- 左移

	  左移操作符用两个小于号（<<）表示，会按照指定的位数将数值的所有位向左移动。

	  ```
	  let oldValue = 2; // 等于二进制 10 
		let newValue = oldValue << 5; // 等于二进制 1000000，即十进制 64
	  ```

	- 有符号右移

	  ```
	  let oldValue = 64; // 等于二进制 1000000 
		let newValue = oldValue >> 5; // 等于二进制 10，即十进制 2
	  ```
	
	- 无符号右移

	  ```
	  let oldValue = 64; // 等于二进制 1000000 
		let newValue = oldValue >>> 5; // 等于二进制 10，即十进制 2

	  let oldValue = -64; // 等于二进制 11111111111111111111111111000000 
		let newValue = oldValue >>> 5; // 等于十进制 134217726
	  ```
	 
	- 布尔操作符

	  - 逻辑非 !

	  - 逻辑与 &&

	  - 逻辑或 ||

	- 相等操作符
    
	  - 全等和不全等

	    全等和不全等操作符与相等和不相等操作符类似，只不过它们在比较相等时不转换操作数。全等操作符由 3 个等于号（===）表示，只有两个操作数在不转换的前提下相等才返回 true，比如：

	    ```
		let result1 = ("55" == 55); // true，转换后相等
		let result2 = ("55" === 55); // false，不相等，因为数据类型不同
	    ``` 
    
	- 条件操作符

      ```
	  variable = boolean_expression ? true_value : false_value;
	  ```

	  上面的代码执行了条件赋值操作，即根据条件表达式 boolean_expression 的值决定将哪个值赋给变量 variable 。如果 boolean_expression 是 true ，则赋值 true_value ；如果boolean_expression 是 false，则赋值 false_value。比如：

	  ```
	  let max = (num1 > num2) ? num1 : num2;
	  ```

  ## 3.4 Date 日期对象
  
    Date 类型将日期保存为自协调世界时（UTC，Universal Time Coordinated）时间 1970 年 1 月 1 日午夜（零时）至今所经过的毫秒数。使用这种存储格式，Date 类型可以精确表示 1970 年 1 月 1 日之前及之后 285 616 年的日期。
    要创建日期对象，就使用 new 操作符来调用 Date 构造函数：
	
	```
	let now = new Date();
	```
	
    指定某一具体日期
	
	- Date.parse()
	  
	 - “月/日/年”，如"5/23/2019"；
	 - “月名 日, 年”，如"May 23, 2019"；
	 - “周几 月名 日 年 时:分:秒 时区”，如"Tue May 23 2019 00:00:00 GMT-0700"；
	 - ISO 8601 扩展格式“YYYY-MM-DDTHH:mm:ss.sssZ”，如 2019-05-23T00:00:00（只适用于兼容 ES5 的实现）。
	
	```
	//比如，要创建一个表示“2021 年 3 月 1 日”的日期对象，可以使用以下代码：
	let someDate = new Date(Date.parse("Mar 1, 2021"));
	let someDate = new Date(Date.parse("3/1/2021"));
	```
	
    如果直接把表示日期的字符串传给 Date 构造函数，那么 Date 会在后台调用 Date.parse()。换句话说，下面这行代码跟前面那行代码是等价的：
	
	```
	let someDate = new Date("3/1/2021");
	let someDate = new Date("2021-03-23T17:20:00")
	```
	
	- Date.UTC()
    
      默认是GTM时间，也就是传入的参数是格林威治标准时间，但生成的是转成本地的时间
	
        ```
        // GMT 时间 2000 年 1 月 1 日零点
        let y2k = new Date(Date.UTC(2021, 0)); 
        // GMT 时间 2021 年 5 月 5 日 2 点 55 分 55 秒  其实是本地时间 10 点 55 分 55 秒 ，也就是时间往后移8小时。
        let allFives = new Date(Date.UTC(2021, 4, 5, 2, 55, 55));
        ```
	
      与 Date.parse()一样，Date.UTC()也会被 Date 构造函数隐式调用，但有一个区别：这种情况下创建的是本地日期，不是 GMT 日期。不过 Date 构造函数跟 Date.UTC()接收的参数是一样的。
	
	
        ```
        // 传入什么时间就是返回什么时间

        let allFives = new Date(2021, 4, 5, 2, 55, 55);
        
        ```
	
    - Date.now()

    ECMAScript 还提供了 Date.now()方法，返回表示方法执行时日期和时间的毫秒数。这个方法可以方便地计算运行程序
	
        ```
        let start = Date.now(); 
        // 调用函数
        doSomething(); 
        // 结束时间
        let stop = Date.now(), 
        result = stop - start;
        ```
	
    - 常用的方法

      - getYear()

      - getMonth()

      - getDay()   一周之内 day of week   1 2 3 4 5 6 0

      - getDate()   一月之内 day of month

  
  
  ## 3.5 语句

   - if语句

     范德萨发的

   - fdas

  ## 3.6 数组 Array

   - 数组的定义

      在连续的内存空间中，储存一组相同类型的元素
	
   - js数组的特殊点

	  跟其他语言中的数组一样，ECMAScript 数组也是一组有序的数据。
	  但跟其他语言不同的是，数组中每个槽位可以存储任意类型的数据。
	  这意味着可以创建一个数组，它的第一个元素是字符串，第二个元素是数值，第三个是对象。
	  ECMAScript 数组也是动态大小的，会随着数据添加而自动增长。


        有几种基本的方式可以创建数组。一种是使用 Array 构造函数，比如：

        ```
        let colors = new Array();
        ```

        如果知道数组中元素的数量，那么可以给构造函数传入一个数值，然后 length 属性就会被自动创建并设置为这个值。比如，下面的代码会创建一个初始 length 为 20 的数组：

        ```
        let colors = new Array(20);
        ```

        也可以给 Array 构造函数传入要保存的元素。比如，下面的代码会创建一个包含 3 个字符串值的数组：

        ```
        let colors = new Array("red", "blue", "green");
        ```

        另一种创建数组的方式是使用数组字面量（array literal）表示法。数组字面量是在中括号中包含以逗号分隔的元素列表，如下面的例子所示：

        ```
        let colors = ["red", "blue", "green"]; // 创建一个包含 3 个元素的数组
        let names = []; // 创建一个空数组
        let values = [1,2,]; // 创建一个包含 2 个元素的数组
        ```

        Array.from()用于将类数组结构转换为数组实例

        ```
        // 字符串会被拆分为单字符数组
        console.log(Array.from("Matt")); // ["M", "a", "t", "t"]

        const a1 = [1, 2, 3, 4]; 
        const a2 = Array.from(a1, x => x**2);
        console.log(a2); // [1, 4, 9, 16]
        ```

        Array.of()可以把一组参数转换为数组。这个方法用于替代在 ES6之前常用的 Array.prototype. slice.call(arguments)，一种异常笨拙的将 arguments 对象转换为数组的写法：

        ```
        console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
        ```

   - 检测数组

      ```
      if (value instanceof Array){ 
        // 操作数组
      }
      ```
    
   - 转换方法

      ```
      let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
        alert(colors.toString()); // red,blue,green 
        alert(colors.valueOf()); // red,blue,green 
        alert(colors); // red,blue,green
      ```
    
   - 栈方法 

      栈是一种后进先出（LIFO，Last-In-First-Out）的结构

     - push

       ```
       let colors = new Array(); // 创建一个数组
        let count = colors.push("red", "green"); // 推入两项
        alert(count); // 2 
        count = colors.push("black"); // 再推入一项
        alert(count); // 3
       ```
     - pop

       ```
       let item = colors.pop(); // 取得最后一项
        alert(item); // black 
        alert(colors.length); // 2
       ```

   - 队列方法

      队列以先进先出（FIFO，First-In-First-Out）形式限制访问

      ```
      let colors = new Array(); // 创建一个数组
        let count = colors.push("red", "green"); // 推入两项
        alert(count); // 2

        count = colors.push("black"); // 再推入一项
        alert(count); // 3
      ```

      ```
      let item = colors.shift(); // 取得第一项
        alert(item); // red 
        alert(colors.length); // 2
      ```
    
   - 排序方法

      - reverse()方法就是将数组元素反向排列

       ```
        let values = [1, 2, 3, 4, 5]; 
            values.reverse(); 
            alert(values); // 5,4,3,2,1
       ```
      - sort()会按照升序重新排列数组元素

       ```
        let values = [0, 1, 5, 10, 15]; 
        values.sort(); 
        alert(values); // 0,1,10,15,5
       ```

       ```
       function compare(value1, value2) { 
        if (value1 < value2) { 
            return -1; 
        } else if (value1 > value2) { 
            return 1; 
        } else { 
            return 0; 
        } 
       }

        let values = [0, 1, 5, 10, 15]; 
        values.sort(compare); 
        alert(values); // 0,1,5,10,15
       ```

   - 操作方法

      - concat

        ```
        let colors = ["red", "green", "blue"]; 
            let colors2 = colors.concat("yellow", ["black", "brown"]); 
            console.log(colors); // ["red", "green","blue"] 
            console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]
        ```
      
      - slice

        ```
        let colors = ["red", "green", "blue", "yellow", "purple"]; 
            let colors2 = colors.slice(1); 
            let colors3 = colors.slice(1, 4);

            alert(colors2); // green,blue,yellow,purple 
            alert(colors3); // green,blue,yellow
        ```
      
      - splice

        - 删除

        ```
        let colors = ["red", "green", "blue"]; 
        let removed = colors.splice(0,1); // 删除第一项
        alert(colors); // green,blue 
        alert(removed); // red，只有一个元素的数组
        ```

        - 插入

        ```
        let colors = [ "green", "blue"]; 
        inserted = colors.splice(1, 0, "yellow", "orange"); // 在位置 1 插入两个元素
        alert(colors); // green,yellow,orange,blue 
        alert(inserted); // 空数组
        ```

        - 替换

        ```
        let colors = [ "green", "yellow","orange","blue"]; 
        replaced = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
        alert(colors); // green,red,purple,orange,blue 
        alert(replaced); // yellow，只有一个元素的数组
        ```

       
      - indexOf
       
        indexOf()方法从数组前头（第一项）开始向后搜索   

        ```
        let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
            alert(numbers.indexOf(4)); // 3 
        ```
      
      - lastIndexOf

        lastIndexOf()从数组末尾（最后一项）开始向前搜索

        ```
        let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
            alert(numbers.lastIndexOf(4)); // 5
        ```

    
   - 迭代方法

      - every()：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true。

      - filter()：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。

      - forEach()：对数组每一项都运行传入的函数，没有返回值。

      - map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。

      - some()：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。

      注意：这些方法都不改变调用它们的数组。

      ```
      let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
        let everyResult = numbers.every((item, index, array) => item > 2); 
        alert(everyResult); // false 
        let someResult = numbers.some((item, index, array) => item > 2); 
        alert(someResult); // true
      ```

      ```
      let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
        let filterResult = numbers.filter((item, index, array) => item > 2); 
        alert(filterResult); // 3,4,5,4,3
      ```

      ```
      let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
        let mapResult = numbers.map((item, index, array) => item * 2); 
        alert(mapResult); // 2,4,6,8,10,8,6,4,2
      ```

    
   - 归并方法 reduce()

      ```
      let values = [1, 2, 3, 4, 5]; 
        let sum = values.reduce((prev, cur, index, array) => prev + cur); 
        alert(sum); // 15
      ```

   - 各个方法的效率

      - 访问access O(1)

      - 搜索search O(N)

      - 插入Insert O(N)

      - 删除Delete O(N)

   - 数组的特点

      - 适合读取

      - 不适合写入或删除

   - leetcode

      27 283 485


# 第四章 DOM

  DOM 表示由多层节点构成的文档，通过它开发者可以添加、删除和修改页面的各个部分。之所以介绍DOM，主要因为它与浏览器中的 HTML 网页相关，并且在 JavaScript 中提供了 DOM API。

  ## 4.1 节点层级

    任何 HTML 或 XML 文档都可以用 DOM 表示为一个由节点构成的层级结构。
	这些关系构成了层级，让标记可以表示为一个以特定节点为根的树形结构。

	```
	<html> 
		<head> 
			<title>Sample Page</title> 
		</head> 
		<body> 
			<p>Hello World!</p> 
		</body> 
	</html>
	```

	其中，document 节点表示每个文档的根节点。在这里，根节点的唯一子节点是<html>元素，我们称之为文档元素（documentElement）。
	文档元素是文档最外层的元素，所有其他元素都存在于这个元素之内。每个文档只能有一个文档元素。
	HTML 页面中，文档元素始终是<html>元素。在 XML 文档中，则没有这样预定义的元素，任何元素都可能成为文档元素。

  ## 4.2 Node 类型

   Node 接口在 JavaScript中被实现为 Node 类型，在除 IE之外的所有浏览器中都可以直接访问这个类型。
   在 JavaScript中，所有节点类型都继承 Node 类型，因此所有类型都共享相同的基本属性和方法。

   每个节点都有 nodeType 属性，表示该节点的类型。
   node类型有12种，常用的有3种：

   - Node.ELEMENT_NODE - 1
   - Node.ATTRIBUTE_NODE - 2
   - Node.TEXT_NODE - 3

   节点类型可通过与这些常量比较来确定，比如：

   ```
   if (someNode.nodeType == Node.ELEMENT_NODE){ 
	alert("Node is an element."); 
   }
   ```

   ```
   <!DOCTYPE html>
	<html>
		<head>
			<title>dom</title>
		</head>
		<body>
			<h1 id="a" name="aaa">hello world</h1>
			<h1 id="b">标题二</h1>
		</body>
	</html>
	<script>
	var a = document.getElementById("a")
	console.log(a.nodeType) //元素节点
	console.log(a.childNodes[0].nodeType) // 文本类型节点
	console.log(a.childNodes[0].nodeValue)
	console.log(a.attributes[0].nodeType) // 属性节点
	console.log(a.attributes[0].nodeValue)
	console.log(a.attributes[1].nodeValue)
	</script>
   ```
   
   使用node类型一般应用在底层框架中，例如使用nodeType，nodeValue，nodeName，先检查了节点是不是元素。如果是，则将其 nodeName 的值赋给一个变量。对元素而言，nodeName 始终等于元素的标签名，而 nodeValue 则始终为 null。


   

  ## 4.3 节点关系

   文档中的所有节点都与其他节点有关系。这些关系可以形容为家族关系，相当于把文档树比作家谱。在 HTML 中，&lt;body&gt;元素是&lt;html&gt;元素的子元素，而&lt;html&gt;元素则是&lt;body&gt;元素的父元素。&lt;head&gt;元素是&lt;body&gt;元素的同胞元素，因为它们有共同的父元素&lt;html&gt;。
   
   每个节点都有一个 childNodes 属性，其中包含一个 NodeList 的实例。NodeList 是一个类数组对象，用于存储可以按位置存取的有序节点。

   NodeList 对象独特的地方在于，它其实是一个对 DOM 结构的查询，因此 DOM 结构的变化会自动地在 NodeList 中反映出来。我们通常说 NodeList 是实时的活动对象，而不是第一次访问时所获得内容的快照。

   ```
   let firstChild = someNode.childNodes[0]; 
	let secondChild = someNode.childNodes.item(1); 
	let count = someNode.childNodes.length;
   ```

   无论是使用中括号还是 item()方法都是可以的，但多数开发者倾向于使用中括号，因为它是一个类数组对象。

 
  ## 4.4 常用的节点方法

   - hasChildNodes()

   - appendChild()

   - insertBefore()

     ```
	 // 作为最后一个子节点插入
	returnedNode = someNode.insertBefore(newNode, null); 
	alert(newNode == someNode.lastChild); // true 
	// 作为新的第一个子节点插入
	returnedNode = someNode.insertBefore(newNode, someNode.firstChild); 
	alert(returnedNode == newNode); // true 
	alert(newNode == someNode.firstChild); // true 
	// 插入最后一个子节点前面
	returnedNode = someNode.insertBefore(newNode, someNode.lastChild); 
	alert(newNode == someNode.childNodes[someNode.childNodes.length - 2]); // true
	 ```

   -  replaceChild()

   -  removeChild()

   上面介绍的方法都用于操纵某个节点的子元素，也就是说使用它们之前必须先取得父节点（使用前面介绍的 parentNode 属性）。

  ## 4.5 Document 类型

   Document 类型是 JavaScript 中表示文档节点的类型。在浏览器中，文档对象 document 是HTMLDocument 的实例（HTMLDocument 继承 Document），表示整个 HTML 页面。

   document.documentElement 属性，始终指向 HTML 页面中的&lt;html&gt;元素。

   虽然 document.childNodes 中始终有<html>元素，但使用 documentElement 属性可以更快更直接地访问该元素。

   ```
	let html = document.documentElement; // 取得对<html>的引用
	let body = document.body; // 取得对<body>的引用
	let doctype = document.doctype; // 取得对<!doctype>的引用
   ```
 
  ## 4.6 定位元素

   getElementById()和 getElementsByTagName(),getElementsByName()就是 Document 类型提供的三个方法。
   getElementsByTagName()，getElementsByName() 返回的是HTMLCollection 对象
   HTMLCollection 对象还有一个额外的方法 namedItem()，可通过标签的 name 属性取得某一项的引用。
   要取得文档中的所有元素，可以给 getElementsByTagName()传入*。在 JavaScript 和 CSS 中，*一般被认为是匹配一切的字符。来看下面的例子：

   ```
   let allElements = document.getElementsByTagName("*");
   ```

   - 特殊集合

     - document.anchors 包含文档中所有带 name 属性的&lt;a&gt;元素。
	 - document.forms 包含文档中所有&lt;form&gt;元素（与 document.getElementsByTagName ("form")返回的结果相同）
	 - document.images 包含文档中所有&lt;img&gt;元素（与 document.getElementsByTagName ("img")返回的结果相同）
	 - document.links 包含文档中所有带 href 属性的&lt;a&gt;元素。


 
  ## 4.7 文档写入
   
   document 对象有一个古老的能力，即向网页输出流中写入内容。这个能力对应 4 个方法：write()、writeln()、open()和 close()。其中，write()和 writeln()方法都接收一个字符串参数，可以将这个字符串写入网页中。write()简单地写入文本，而 writeln()还会在字符串末尾追加一个换行符（\n）。
  
   ```
   <html> 
	<head> 
	<title>document.write() Example</title> 
	</head> 
	<body> 
	<p>The current date and time is: 
	<script type="text/javascript"> 
	document.write("<strong>" + (new Date()).toString() + "</strong>"); 
	</script> 
	</p> 
	</body> 
	</html>
   ```

   前面的例子展示了在页面渲染期间通过 document.write()向文档中输出内容。如果是在页面加载完之后再调用 document.write()，则输出的内容会重写整个页面，如下面的例子所示：


   ```
	<html> 
	<head> 
	<title>document.write() Example</title> 
	</head> 
	<body> 
	<p>This is some content that you won't get to see because it will be 
	overwritten.</p> 
	<script type="text/javascript"> 
	window.onload = function(){ 
	document.write("Hello world!"); 
	}; 
	</script> 
	</body> 
	</html>
   ```


  ## 4.8 html

   - 属性

     - id
	 - name
	 - class
	 - style
	 - title
	 - 还有一些特有属性

   - getAttribute()

   - setAttribute()

   - removeAttribute()

   - 创建元素 createElement()

   - 创建属性 createAttribute()

     ```
	 let attr = document.createAttribute("align"); 
		attr.value = "left"; 
		element.setAttributeNode(attr); 
		alert(element.attributes["align"].value); // "left" 
		alert(element.getAttributeNode("align").value); // "left" 
		alert(element.getAttribute("align")); // "left"
	 ```
   




  ## 4.9 table

   ```
   <table border="1" width="100%"> 
	<tbody> 
		<tr> 
			<td>Cell 1,1</td> 
			<td>Cell 2,1</td> 
		</tr> 
		<tr> 
			<td>Cell 1,2</td> 
			<td>Cell 2,2</td> 
		</tr> 
		</tbody> 
	</table>
   ```

   ```
   // 创建表格
	let table = document.createElement("table"); 
	table.border = 1; 
	table.width = "100%"; 
	// 创建表体
	let tbody = document.createElement("tbody"); 
	table.appendChild(tbody); 
	// 创建第一行
	let row1 = document.createElement("tr"); 
	tbody.appendChild(row1); 
	let cell1_1 = document.createElement("td"); 
	cell1_1.appendChild(document.createTextNode("Cell 1,1")); 
	row1.appendChild(cell1_1); 
	let cell2_1 = document.createElement("td"); 
	cell2_1.appendChild(document.createTextNode("Cell 2,1")); 
	row1.appendChild(cell2_1); 
	// 创建第二行
	let row2 = document.createElement("tr"); 
	tbody.appendChild(row2); 
	let cell1_2 = document.createElement("td"); 
	cell1_2.appendChild(document.createTextNode("Cell 1,2")); 
	row2.appendChild(cell1_2); 
	let cell2_2= document.createElement("td"); 
	cell2_2.appendChild(document.createTextNode("Cell 2,2")); 
	row2.appendChild(cell2_2); 
	// 把表格添加到文档主体
	document.body.appendChild(table);
   ```

   ```
   // 创建表格
	let table = document.createElement("table"); 
	table.border = 1; 
	table.width = "100%"; 
	// 创建表体
	let tbody = document.createElement("tbody"); 
	table.appendChild(tbody); 
	// 创建第一行
	tbody.insertRow(0); 
	tbody.rows[0].insertCell(0); 
	tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1")); 
	tbody.rows[0].insertCell(1); 
	tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1")); 
	// 创建第二行
	tbody.insertRow(1); 
	tbody.rows[1].insertCell(0); 
	tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1,2")); 
	tbody.rows[1].insertCell(1); 
	tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2"));
	// 把表格添加到文档主体
	document.body.appendChild(table);
   ```


 
  ## 4.10 DOM扩展

   - querySelector()

     querySelector()方法接收 CSS 选择符参数，返回匹配该模式的第一个后代元素，如果没有匹配项则返回 null。下面是一些例子：

		```
		// 取得<body>元素
			let body = document.querySelector("body"); 
			// 取得 ID 为"myDiv"的元素
			let myDiv = document.querySelector("#myDiv");
			// 取得类名为"selected"的第一个元素
			let selected = document.querySelector(".selected"); 
			// 取得类名为"button"的图片
			let img = document.body.querySelector("img.button");
		```

   - querySelectorAll()

     querySelectorAll()方法跟 querySelector()一样，也接收一个用于查询的参数，但它会返回所有匹配的节点，而不止一个。这个方法返回的是一个 NodeList 的静态实例。
	 再强调一次，querySelectorAll()返回的 NodeList 实例一个属性和方法都不缺，但它是一个静态的“快照”，而非“实时”的查询。

   - matches() 用的比较少

     matches()方法（在规范草案中称为 matchesSelector()）接收一个 CSS 选择符参数，如果元素匹配则该选择符返回 true，否则返回 false。例如：

		```
		if (document.body.matches("body.page1")){ 
			// true 
			}
		```

	 使用这个方法可以方便地检测某个元素会不会被 querySelector()或 querySelectorAll()方法返回。

   - document.characterSet

  ## 4.11 自定义数据属性

    HTML5 允许给元素指定非标准的属性，但要使用前缀 data-以便告诉浏览器，这些属性既不包含与渲染有关的信息，也不包含元素的语义信息。除了前缀，自定义属性对命名是没有限制的，data-后面跟什么都可以。下面是一个例子：
    
		```
		<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
		```
    
		```
		// 本例中使用的方法仅用于示范
		let div = document.getElementById("myDiv"); 
		// 取得自定义数据属性的值
		let appId = div.dataset.appId; 
		let myName = div.dataset.myname; 
		// 设置自定义数据属性的值
		div.dataset.appId = 23456; 
		div.dataset.myname = "Michael"; 
		// 有"myname"吗？
		if (div.dataset.myname){ 
		console.log(`Hello, ${div.dataset.myname}`); 
		}
		```
  
