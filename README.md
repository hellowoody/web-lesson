# 第一章 什么是 JavaScript

## 1. JavaScript包含的内容

 - ECMAScript-核心
 - DOM-文档对象模型
 - BOM-浏览器对象模型

 | JavaScript                   |
| ---------- | --- | ---------- |
| ECMAScript | DOM | DOM        |

### 1.1  jQuery的优势

​		jQuery的理念是写得少，做得多。jQuery独特的选择器、链式操作、事件处理机制和封装完善的Ajax都是JavaScript库望尘莫及的。   

- 轻量级
- 强大的选择器
- 出色的DOM操作的封装
- 可靠的事件处理机制
- 完善的Ajax
- 不污染顶级变量
- 出色的浏览器兼容性
- 链式操作方式
- 隐式迭代
- 开源
- 等等

### 1.2 jQuery代码编写

#### 1.2.1 下载jQuery

​		获取jQuery最新版本，https://jquery.com/download/。

![image-20210201115302927](动态界面设计与开发（jQuery）.assets/image-20210201115302927.png)

#### 1.2.2 jQuery库类型

| 名称                    | 大小    | 说明                                                     |
| ----------------------- | ------- | -------------------------------------------------------- |
| jquery.js（开发版）     | 约229KB | 完整的无压缩版本，主要用于测试、学习和开发               |
| jquery.min.js（生产版） | 约31KB  | 经过工具压缩或经过服务器开启Gzip压缩，主要用于产品和项目 |

#### 1.2.3 jQuery环境配置

​		jQuery不需要安装，把下载好的jQuery.js放到网页的一个公共位置，想要在某个页面使用jQuery时，只需要在HTML中引入库文件。

#### 1.2.4 在页面中引入jQuery

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>jQuery案例</title>
		<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
	</head>
	<body>
	</body>
</html>
```

#### 1.2.5 编写简单的jQuery代码

​		在编写第一个jQuery程序之前，首先应该明确一点，在jQuery库中，$就是jQuery的一个简写形式，例如：

```
$("#foo") 和 jQuery("#foo")  是等价的
$.ajax()和jQuery.ajax()   是等价的
```

案例：页面加载完成弹出窗口

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>jQuery案例</title>
		<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
		<script>
			$(document).ready(
				function() {
					alert("hello  jQuery!");
				});
		</script>
	</head>
	<body>
	</body>
</html>
```

#### 1.2.6 jQuery代码风格--链式操作

代码风格即开发人员所编写代码的风格。

```
$(document).ready(
				function() {
					//alert("hello  jQuery!");
					$(".level1 > a").click(function() {
						//导航栏效果
						$(this).addClass("current").next().show().parent().siblings().children("a").removeClass("current").next().hide();
						return false;
					});
				});

<div class="box">
			<ul class="menu">
				<li class="level1">
					<a href="#none">衬衫</a>
					<ul class="level2">
						<li><a href="#none">短袖衬衫</a></li>
						<li><a href="#none">长袖衬衫</a></li>
						<li><a href="#none">短袖T恤</a></li>
						<li><a href="#none">长袖T恤</a></li>
					</ul>
				</li>
				<li class="level1">
					<a href="#none">卫衣</a>
					<ul class="level2">
						<li><a href="#none">开襟卫衣</a></li>
						<li><a href="#none">套头卫衣</a></li>
						<li><a href="#none">运动卫衣</a></li>
						<li><a href="#none">童装卫衣</a></li>
					</ul>
				</li>
				<li class="level1">
					<a href="#none">裤子</a>
					<ul class="level2">
						<li><a href="#none">短裤</a></li>
						<li><a href="#none">休闲裤</a></li>
						<li><a href="#none">牛仔裤</a></li>
						<li><a href="#none">免烫卡其裤</a></li>
					</ul>
				</li>
			</ul>
		</div>
```

![image-20210201141720855](动态界面设计与开发（jQuery）.assets/image-20210201141720855.png)

## 2. jQuery对象和DOM对象

### 2.1 jQuery对象

​		jQuery对象是通过jQuery包装DOM对象后产生的对象。jQuery对象是jQuery独有的。如果一个对象是jQuery对象，那么就可以使用jQuery语法：

```
$("#foo").html();   //获取id为foo的元素内的html代码。html()是jQuery里的方法。
```

### 2.2 jQuery对象和DOM对象转换

#### 2.2.1  jQuery转成DOM对象

- jQuery是一个类似数组的对象，可以通过[index]的方法得到相应的DOM对象。

```
var  cr = $("#cr");   //jQuery对象
var  sr = cr[0];     //DOM对象
```

- 通过get(index)方法得到相应的DOM对象。


```
var  cr = $("#cr");   //jQuery对象
var  sr = cr.get(0);     //DOM对象
```

#### 2.2.2  DOM对象转成jQuery对象

- 对于一个DOM对象，只需要用$()把DOM对象包装起来，就可以获得一个jQuery对象。

```
var  cr = document.getElementById("cr");   //DOM对象
var sr = $(cr);             //jQuery对象
```

#### 2.2.3  案例

使用jQuery实现判断选项是否被选中。

```javascript
$(document).ready(
		function() {
			var cr = $("#cr");
			var sr = cr[0];
			cr.click(function(){
			if(sr.checked){
				alert("感谢你的支持，可以继续注册了");
			}else{
				alert("请勾选同意");
			}
		});
});
```

![image-20210202145528770](动态界面设计与开发（jQuery）.assets/image-20210202145528770.png)

## 3. jQuery选择器

​		jQuery选择器完全继承了CSS的风格。使用jQuery选择器能够非常便捷和快速找出特定的DOM元素，然后为它们添加相应的行为。

![jQuery选择器分类示意图](https://img-blog.csdnimg.cn/20190221233918488.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY3NTQ0Nw==,size_16,color_FFFFFF,t_70)

### 3.1 基本选择器

​		jQuery选择器中使用最多的选择器，它由元素id、class、元素名、多个元素符组成。功能表如下：

![基本选择器](https://img-blog.csdnimg.cn/20190221234300822.jpg)

案例：将下面的代码添加样式，实现如图所示的效果，应用基础选择器：

```html
	<div id="two" class="one">
		id为two，class为one的div
		<div class="mini" title="other">
			class为mini,title为other
		</div>
		<div class="mini" title="test">
			class为mini,title为test
		</div>
	</div>
	<div id="three" class="one">
		<div class="mini">
			class为mini
		</div>
		<div class="mini">
			class为mini
		</div>
		<div class="mini">
			class为mini
		</div>
		<div class="mini">
		</div>
	</div>
	<div class="one"></div>
	<div class="one" style="display: none;"></div>
```
![](动态界面设计与开发（jQuery）.assets/image-20210202164359606.png)

### 3.2  层次选择器

​		通过DOM元素间的层次关系来获取元素，主要层次关系包括**父子、后代、相邻、兄弟**关系。功能表如下：

![层次选择器](https://img-blog.csdnimg.cn/2019022123470728.jpg)

案例1：改变<body>内所有<div>的背景颜色

```javascript
$("body  div").css("background-color","#bbffaa");
```

案例2：改变<body>内子<div>的背景颜色

```javascript
$("body>div").css("background-color","#bbffaa");
```

案例3：改变class为one的下一个<div>同辈元素的背景颜色

```javascript
$(".one+div").css("background-color","#bbffaa");
```

案例4：改变id为two的元素后面的所有<div>同辈元素的背景颜色

```javascript
$("#two~div").css("background-color","#bbffaa");
```

### 3.3 过滤选择器

#### 3.3.1 简单过滤选择器

​		过滤选择器是根据某类过滤规则进行元素的匹配，书写时都**以(:)开头**；简单过滤是使用最广泛的一种。功能表如下：

![简单过滤选择器](https://img-blog.csdnimg.cn/20190222202920465.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY3NTQ0Nw==,size_16,color_FFFFFF,t_70)

案例1：改变第一个div的背景颜色

```javascript
$("div:first").css("background-color","#bbffaa");
```

案例2：改变最后一个div的背景颜色

```javascript
$("div:last").css("background-color","#bbffaa");
```

案例3：改变class不为one的<div>元素的背景颜色

```javascript
$("div:not(.one)").css("background-color","#bbffaa");
```

案例4：改变索引值为偶数的<div>元素的背景颜色

```javascript
$("div:even").css("background-color","#bbffaa");
```

案例5：改变索引值等于3的<div>元素的背景颜色

```javascript
$("div:eq(3)").css("background-color","#bbffaa");
```



#### 3.3.2 内容过滤选择器

​		根据元素中的**文字内容**或所包含的**子元素特征**获取元素，其文字内容可以模糊或绝对匹配进行元素定位。功能表如下：

![内容过滤选择器](https://img-blog.csdnimg.cn/2019022220352632.jpg)

案例1：改变含有文本"di"的<div>元素的背景颜色

```javascript
$("div:contains(di)").css("background-color","#bbffaa");
```

案例2：改变不包含子元素的<div>空元素的背景颜色

```javascript
$("div:empty").css("background-color","#bbffaa");
```

案例3：改变含有class为mini的<div>元素的背景颜色

```javascript
$("div:has(.mini)").css("background-color","#bbffaa");
```

案例4：改变含有子元素的<div>元素的背景颜色

```javascript
$("div:parent").css("background-color","#bbffaa");
```



#### 3.3.3 可见性过滤选择器

根据元素**是否可见**的特征来获取元素。功能表如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190222210111582.jpg)

案例1：改变所有课件的<div>元素的背景颜色

```javascript
$("div:visible").css("background-color","#bb6500");
```

案例2：显示隐藏的div

```javascript
$("div:hidden").show(3000);
```



#### 3.3.5 属性过滤选择器

​		属性过滤选择器根据元素的某个属性获取元素，如ID号或匹配属性值的内容，并以"[“号开始，以”]"号结束。功能表如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190222210740990.jpg)

案例1：改变含有属性title的<div>元素的背景颜色

```javascript
$("div[title]").css("background-color","#bb6500");
```

案例2：改变属性title值等于"test"的<div>元素的背景颜色

```javascript
$("div[title=test]").css("background-color","#bb6500");
```

案例3：改变属性title值不等于"test"的<div>元素的背景颜色

```javascript
$("div[title!=test]").css("background-color","#bb6500");
```



#### 3.3.6  子元素过滤选择器

获取所有父元素中指定的某个元素，功能表如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190222211255428.jpg)

案例1：改变每个class为one的<div>父元素下的第二个子元素的背景颜色

```javascript
$("div.one:nth-child(2)").css("background-color","#bb6500");
```



### 3.4  表单选择器

​		为了方便用户能够更加灵活地操作表单，jQuery中专门引入了表单选择器。

![image-20210202170500628](动态界面设计与开发（jQuery）.assets/image-20210202170500628.png)

```html
<form id="fm">
			<input type="button" value="Button" /><br />
			<input type="checkbox" name="c" />1
			<input type="checkbox" name="c" />2
			<input type="checkbox" name="c" />3<br />
			<input type="file" /><br />
			<input type="hidden" /><div style="display: none;">test</div><br />
			<input type="image" src="cake.jpg" /><br />
			<input type="password" /><br />
			<input type="radio" name="a" />1
			<input type="radio" name="a" />2<br />
			<input type="reset" /><br />
			<input type="submit" /><br />
			<input type="text"/><br />
			<select>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select><br />
			<textarea></textarea><br />
			<button>Button</button>
		</form>
```

![image-20210202171528981](动态界面设计与开发（jQuery）.assets/image-20210202171528981.png)

案例1：获取表单内表单元素的个数

```javascript
$("#fm:input").length;
```

案例2：获取表单中单行文本框的个数

```javascript
$("#fm:text").length;
```

案例3：获取表单中密码框的个数

```javascript
$("#fm:password").length;
```

## 4.综合案例

案例1：给网页中所有的p元素添加onclick事件。

```javascript
$(document).ready(function() {
	var items = document.getElementsByTagName("p");
	for (var i = 0; i < items.length; i++) {
		items[i].onclick = function(){
			alert($(this).text());
		}
	}
});
```

![image-20210202151014787](动态界面设计与开发（jQuery）.assets/image-20210202151014787.png)



案例2：表格实现隔行变色。

```javascript
//表格实现隔行变色。
var trs = document.getElementsByTagName("tr");
	for (var i = 0; i < trs.length; i++) {
		if(i%2==0){
			trs[i].style.backgroundColor="#EE9A00";
		}else{										                 trs[i].style.backgroundColor="#CDC8B1";
		}
}
```

![image-20210202152033042](动态界面设计与开发（jQuery）.assets/image-20210202152033042.png)



案例3：对多选框进行操作，输出选中的多选框个数。

```javascript
function showChecked(){
	var arr = new Array();
	var checks = document.getElementsByName("check");
	for (var i = 0; i < checks.length; i++) {
		if(checks[i].checked){
			arr.push(checks[i].value);
		}
	}
	alert(arr.length);
}
```

![image-20210202152854958](动态界面设计与开发（jQuery）.assets/image-20210202152854958.png)



# 第二章 jQuery中的DOM操作

## 1. 查找节点

### 1.1 查找元素节点

```javascript
获取ul中第二个li的内容
var $li = $("ul li:eq(1);
var li_text = $li.text();
alert(li_text);
```

### 1.2 查找属性节点

```javascript
获取p元素中title属性的值
var $para = $("p");
var p_txt = $para.attr("title");
alert(p_txt);
```

## 2. 创建节点

### 2.1 创建元素节点

```javascript
创建2个<li>元素节点，并把它们作为<ul>元素节点的子节点
var $li_1 = $("<li></li>");
var $li_2 = $("<li></li>");
$("ul").append($li_1);
$("ul").append($li_2);
```

### 2.2 创建文本节点

```javascript
为新建的2个<li>节点新增内容
var $li_1 = $("<li>猴头菇饼干</li>");
var $li_2 = $("<li>猕猴桃</li>");
$("ul").append($li_1);
$("ul").append($li_2);
```

### 2.3 创建属性节点

```JavaScript
为新建的2个<li>节点新增属性title
var $li_1 = $("<li title='猴头菇饼干'>猴头菇饼干</li>");
var $li_2 = $("<li title='猕猴桃'>猕猴桃</li>");
$("ul").append($li_1);
$("ul").append($li_2);
```

### 2.4 插入节点

| 方法           | 描述                                                         | 示例                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| append()       | 向每个匹配的元素内部追加内容                                 | HTML代码：<p>我想说：</p>jQuery代码：$("p").append("<b>你好</b>")结果：<p>我想说：<b>你好</b></p> |
| appendTo()     | 将所有匹配的元素追加到指定的元素中。实际上，使用该方法是颠倒了常规的$(A).append(B)的操作，即不是将B追加到A中，而是将A追加到B中 | HTML代码：<p>我想说：</p>jQuery代码：$("<b>你好</b>").appendTo("p")结果：<p>我想说：<b>你好</b></p> |
| prepend()      | 向每个匹配的元素内部前置内容                                 | HTML代码：<p>我想说：</p>jQuery代码：$("p").prepend("<b>你好</b>")结果：<p><b>你好</b>我想说：</p> |
| prependTo()    | 将所有匹配的元素前置到指定的元素中。实际上，使用该方法是颠倒了常规的$(A).prepend(B)的操作，即不是将B前置到A中，而是将A前置到B中 | HTML代码：<p>我想说：</p>jQuery代码：$("<b>你好</b>").prependTo("p")结果：<p><b>你好</b>我想说：</p> |
| after()        | 在每个匹配的元素之后插入内容                                 | HTML代码：<p>我想说：</p>jQuery代码：$("p").after("<b>你好</b>")结果：<p>我想说：</p><b>你好</b> |
| insertAfter()  | 将所有匹配的元素插入到指定元素的后面。实际上，使用该方法是颠倒了常规的$(A).after(B)的操作，即不是将B插入到A后面，而是将A插入到B后面 | HTML代码：<p>我想说：</p>jQuery代码：$("<b>你好</b>").insertAfter("p")结果：<p>我想说：</p><b>你好</b> |
| before()       | 在每个匹配的元素之前插入内容                                 | HTML代码：<p>我想说：</p>jQuery代码：$("p").before("<b>你好</b>")结果：<b>你好</b><p>我想说：</p> |
| insertBefore() | 将所有匹配的元素插入到指定的元素的前面。实际上，使用该方法是颠倒了常规的$(A).before(B)的操作，即不是将B插入到A前面，而是将A插入到B前面 | HTML代码：<p>我想说：</p>jQuery代码：$("<b>你好</b>").insertBefore("p")结果：<b>你好</b><p>我想说：</p> |

案例1：将下面的代码补充完整

```javascript
var $li_1 = $("<li title='猴头菇饼干'>猴头菇饼干</li>");
var $li_2 = $("<li title='猕猴桃'>猕猴桃</li>");
var $li_3 = $("<li title='其他'>其他</li>");
var $parent = $("ul");
var $two_li = $("ul li:eq(1)");//获取第二个li元素节点
//使用append()将创建的第一个<li>元素添加到<ul>中

//使用prepend()将创建的第二个<li>元素添加到<ul>中

//使用insertAfter()将创建的第三个<li>元素添加到<ul>中

```

### 2.5 删除节点

1、remove（）：删除所有匹配的节点，删除后，还可以继续使用。（比如把删除的再添加进来）

2、detach（）：删除整个节点。保留元素的绑定事件、附加的数据

3、empty（）：并不是删除节点，而是清空节点内容，也就是清空元素中的所有后代节点。



## 3. 属性操作

在jQuery中使用attr()方法获取和设置元素属性，removeAttr()方法来删除元素属性。

### 3.1 获取和设置属性

jQuery中的attr()方法既能实现设置元素属性的值，也能获取元素属性的值。

案例1：实现获取<p>元素的属性title的值

```javascript
var $para = $("p");
var  p_txt = $para.attr("title");
```

案例2：实现设置<p>元素的属性title的值

```javascript
$para.attr("title","new title");
```

案例3：实现同时为<p>设置多个属性的值

```javascript
$para.attr({"title":"infos","name":"titles"});
```



### 3.2 删除属性

某些情况下需要删除文档中某个元素的特定属性，可以使用removeAttr()方法来完成。

案例1：删除<p>元素的title属性

```javascript
$("p").removeAttr("title");
```



## 4. 样式操作

### 4.1 追加样式

jQuery专门的addClass()方法来实现样式追加。

案例1：给<p>元素追加样式

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>jQuery样式操作</title>
		<style>
			.one{
				font-weight: bold;
				color: red;
			}
			/*追加的样式*/
			.two{
				font-size: 40px;
				background-color: yellow;
                color: blueviolet;
			}
		</style>
	</head>
	<body>
		<p class="one">使用样式</p>
	</body>
</html>
<script>
		$("p").addClass("two");
</script>
```

此时<p>元素同时拥有两个class的值，相当于样式合并，样式相同时会覆盖。

### 4.2 移除样式

使用removeClass()方法实现对class属性值的删除 。

案例1：删除<p>元素class属性值的two

```javascript
$("p").removeClass("two");
```

案例2：移除<p>元素所有class

```javascript
$("p").removeClass();
```

### 4.3 切换样式

使用toggleClass()方法执行交替样式操作

案例1：点击按钮实现切换<p>元素样式

```html
<p class="one">使用样式</p>
<button id="togBtn" onclick="togle()">切换样式</button>
function togle(){
	$("#togBtn").toggle(function(){
		$("p").toggleClass("one");
	},function(){
		$("p").toggleClass("two");
	});
}
```

### 4.4  判断是否包含某个样式

使用hasClass()方法实现判断。

案例1：判断<p>元素是否包含one样式

```javascript
$("p").hasClass("one");
```

## 5. 文本值操作

### 5.1 html()方法

使用html()方法既可以实现设置元素的html代码，也可以实现获取元素的html代码。

案例1：获取<p>元素包含的html代码

```html
<p class="one">
	使用样式
	<span>实现指定效果</span>
</p>
var p_html = $("p").html();
alert(p_html);
```

![image-20210203103618043](动态界面设计与开发（jQuery）.assets/image-20210203103618043.png)

案例2：设置<p>元素的html

```javascript
$("p").html("<strong>jQuery学习网站</strong>");
```

### 5.2  text()方法

​		使用text()方法既可以实现设置元素包含的内容，也可以实现获取元素包含的内容，用法同html()。

### 5.3 val()方法

使用val()方法用来设置和获取元素的值，元素可以是文本框、下拉框、单选框、复选框。

案例1：当用户点击登录时，获取用户填入表单的所有内容

![image-20210203104632187](动态界面设计与开发（jQuery）.assets/image-20210203104632187.png)

```javascript
function login(){
			var email = $("input[type=email]").val();
			var radios = $("input[type=radio]").val();
			var password = $("input[type=password]").val();
			var checkboxs = $("input[type=checkbox]").val();
			var textarea = $("textarea").val();
			var seles = $("select").val();
			console.log(email);
			console.log(radios);
			console.log(password);
			console.log(checkboxs);
			console.log(textarea);
			console.log(seles);
}
```

## 6. 节点遍历

### 6.1 children()方法

用于获得匹配元素的子元素集合。

### 6.2 next()方法

用于获得匹配元素后面紧邻的同辈元素。

### 6.3 prev()方法

用于获取匹配元素前面紧邻的同辈元素。

### 6.4 siblings()方法

用于获取匹配元素前后所有的同辈元素。

### 6.5 parent()方法

用于获取匹配元素的父级元素。



# 第三章 jQuery中的效果和对应方法

## 1. jQuery事件

### 1.1 加载DOM

```javascript
$(document).ready(function(){});
简写：
$().ready(function(){});
$(function(){});
```

## 2.  jQuery 效果- 隐藏和显示

​		通过使用 hide() 和 show() 方法来隐藏和显示 HTML 元素，使用 toggle() 方法来切换 hide() 和 show() 方法。

案例1：点击按钮实现<p>元素的隐藏

```javascript
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
});
```

![image-20210203142403733](动态界面设计与开发（jQuery）.assets/image-20210203142403733.png)

案例2：点击按钮实现<p>元素的显示

```javascript
$(document).ready(function(){
  $("#show").click(function(){
    $("p").show();
  });
});
```

![image-20210203142401185](动态界面设计与开发（jQuery）.assets/image-20210203142401185.png)

案例3：实现<p>元素隐藏和显示的切换

```javascript
$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
});
```

![image-20210203142414414](动态界面设计与开发（jQuery）.assets/image-20210203142414414.png)

## 3. jQuery 效果 - 淡入淡出

jQuery 拥有下面四种 fade 方法：

- fadeIn() 用于淡入已隐藏的元素；
- fadeOut() 用于淡出可见元素；
- fadeToggle() 可以在 fadeIn() 与 fadeOut() 方法之间进行切换；
- fadeTo() 允许渐变为给定的不透明度（值介于 0 与 1 之间）。

#### 3.1  fadeIn() 方法

语法：

```javascript
$(selector).fadeIn(speed,callback);
```

- 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

- 可选的 callback 参数是 fading 完成后所执行的函数名称。

案例1：带有不同参数的 fadeIn() 方法

```javascript
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```

#### 3.2 fadeOut() 方法

语法：

```
$(selector).fadeOut(speed,callback);
```

案例1：带有不同参数的 fadeOut() 方法

```javascript
$("button").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});
```

#### 3.3 fadeToggle() 方法

语法：

```
$(selector).fadeToggle(speed,callback);
```

案例1：带有不同参数的 fadeToggle() 方法

```javascript
$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
```

#### 3.4 fadeTo() 方法

语法：

```
$(selector).fadeTo(speed,opacity,callback);
```

案例1：带有不同参数的 fadeTo() 方法

```javascript
$("button").click(function(){
  $("#div1").fadeTo("slow",0.15);
  $("#div2").fadeTo("slow",0.4);
  $("#div3").fadeTo("slow",0.7);
});
```

## 4. jQuery 效果 - 滑动

jQuery 拥有以下滑动方法：

- slideDown()
- slideUp()
- slideToggle()

### 4.1 slideDown() 方法

**语法:**

```
$(selector).slideDown(speed,callback);
```

- 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

- 可选的 callback 参数是滑动完成后所执行的函数名称。

```javascript
$("#flip").click(function(){
  $("#panel").slideDown();
});
```

### 4.2 slideUp() 方法

语法：

```
$(selector).slideUp(speed,callback);
```

案例

```javascript
$("#flip").click(function(){
  $("#panel").slideUp();
});
```

### 4.3 slideToggle() 方法

语法：

```
$(selector).slideToggle(speed,callback);
```

案例：

```javascript
$("#flip").click(function(){
  $("#panel").slideToggle();
});
```

## 5. jQuery 效果- 动画

### 5.1 animate() 方法

语法：

```
$(selector).animate({params},speed,callback);
```

- 必需的 params 参数定义形成动画的 CSS 属性。

- 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

- 可选的 callback 参数是动画完成后所执行的函数名称。

案例1：点击按钮<div>元素向左平移200px

```
$("button").click(function(){
  $("div").animate({left:'200px'});
});
```

### 5.2 animate() 操作多个属性

- 用 animate() 方法来操作所有 CSS 属性；
- 当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right。

案例1：点击按钮<div>元素向左平移200px，透明度变为0.5，宽高变为150px

```javascript
$("button").click(function(){
  $("div").animate({
    left:'200px',
    opacity:'0.5',
    height:'150px',
    width:'150px'
  });
});
```

### 5.3 animate() 使用相对值

可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=：

```javascript
$("button").click(function(){
  $("div").animate({
    left:'200px',
    height:'+=150px',
    width:'+=150px'
  });
});
```

### 5.4 animate() 使用预定义的值

可以把属性的动画值设置为 "show"、"hide" 或 "toggle"：

```javascript
$("button").click(function(){
  $("div").animate({
    height:'toggle'
  });
});
```

### 5.5 animate() 使用队列功能

​		jQuery 提供针对动画的队列功能。编写多个 animate() 调用，jQuery 会创建包含这些方法调用的"内部"队列。然后逐一运行这些 animate 调用。

```javascript
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
```

### 5.6 停止动画

 stop() 方法用于停止动画或效果，语法：

```
$(selector).stop(stopAll,goToEnd);
```

- 可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
- 可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
- 默认地，stop() 会清除在被选元素上指定的当前动画。

案例：

```javascript
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
<button id="stop">停止滑动</button>
<div id="flip">点我向下滑动面板</div>
<div id="panel">Hello world!</div>
```



# 第四章 jQuery与Ajax应用

​		jQuery对Ajax进行了封装，在jQuery中$.ajax()方法属于最底层的方法，第2层是load()、$.get()、$.post()，第3层是$.getScript()和$.getJSON()。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

## 1. load()方法

### 1.1 载入HTML文档

load()方法是jQuery中最为简单和常用的Ajax方法，能够载入远程HTML代码并插入到DOM中，语法：

```
load(url[,data,callback]);
```

- 参数url表示请求HTML 页面的URL地址
- data参数表示发送到服务器的key/value数据
- callback参数表示请求完成时回调函数，无论请求成功或失败

案例1：点击按钮在id=resText的元素中显示test.html页面内容

```javascript
$(function(){
	$("#send").click(function(){
        $("#resText").load("test.html");
    });
});
```

### 1.2  筛选载入的HTML文档

通过为url参数指定选择符，来实现筛选。

案例2：在id=resText的元素中显示test.html页面中class=para的内容

```
$(function(){
	$("#send").click(function(){
        $("#resText").load("test.html .para");
    });
});
```

### 1.3 传递方式

​		load()方法的传递方式根据参数data来自动指定。如果没有参数传递，则采取GET方式传递，反之，则采取POST方式。

```javascript
$(function(){
	$("#send").click(function(){
       $("#resText").load("test.html",{name:"rain",age:22});
    });
});
```

### 1.4 回调参数

​		对于必须在加载完成后才能继续的操作，load()方法提供了回调函数callback，该函数有3个参数，分别表示请求返回的内容、请求状态和XMLHttpRequest对象。

```
$("#resText").load("test.html"function(responseText,textStatus,xhr){
	//textStatus包括success、error、timeout和notmodified四种
});
```

## 2. $.get()方法和$.post()方法

​		load()方法通常是从web服务器上获取静态的数据文件，并不能体现Ajax的全部价值，在项目中，需要传递一些参数给服务器中的页面，可以使用$.get()或者$.post()。

### 2.1 $.get()方法

$.get()方法使用GET方式来进行异步请求。语法：

```
$.get(url[,data][,callback][,type]);
```

- url表示请求的HTML页面url地址；
- data表示发送至服务器的key/value数据；
- callback表示载入成功时回调的函数；
- type表示服务器返回的内容格式，支持xml、html、script、json、text和_default。

```javascript
function check(){
			$.get("result.php",{
				datas:$("#datas").val()
			},function(data,textStatus){
				alert(data);
			});
}
```

### 2.2  $.post()方法

与$.get()方法的结构和使用方式都相同。



## 3. $.getJSON()方法

用于加载JSON文件。

案例1：加载JSON文件的内容，实现动态展示商品列表。

1、设计产品的json文件

设计手机包含的属性：编号、名称、描述、价格、首页展示的图片、颜色、版本

```json
products.json
{
	"products":[
		{"pclassify":"手机","pid":"1","pname":"Note 9 Pro 5G",
		"pinfos":"一亿像素夜景相机，120Hz六档变速高刷屏","price":"1599元起",
		"color":"妖月白+黑色+蓝色","version":"8G+128G#64G+256G",
		"pimg":"note9.jpg"},
		{"pclassify":"手机","pid":"2","pname":"Note 9",
		"pinfos":"天玑 800U处理器，5000mAh电池","price":"1299元起"},
		{"pclassify":"手机","pid":"3","pname":"Note 9 4G",
		"pinfos":"6000mAh长续航","price":"999元起"},
		{"pclassify":"手机","pid":"4","pname":"小米10至尊版",
		"pinfos":"120X 变焦/120W秒充/120Hz屏幕","price":"5299元起"},
		{"pclassify":"手机","pid":"5","pname":"Redmi K30S 至尊纪念版",
		"pinfos":"144Hz[7档]变速高刷屏","price":"2599元起"},
		{"pclassify":"手机","pid":"6","pname":"Redmi K30S 至尊版",
		"pinfos":"120Hz弹出全面屏，天玑1000+旗舰处理器","price":"1999元起"},
		{"pclassify":"手机","pid":"7","pname":"腾讯黑鲨3S",
		"pinfos":"骁龙865处理器，120Hz刷新率","price":"3999元起"},
		{"pclassify":"手机","pid":"8","pname":"红米9A",
		"pinfos":"5000mAh长循环大电量，6.53超大护眼屏幕","price":"599元起"}
]}
```

2、读取products.json文件中的产品，DOM将产品信息展示在home页面。



# 第五章 jQuery插件的使用和写法

​		插件也称为扩展，是一种遵循一定规范的应用程序接口编写出来的程序。jQuery易扩展性，吸引了来自全球的开发者共同编写jQuery的插件。

## 1. jQuery表单验证插件-validation

Validation特点：

- 内置验证规则：拥有必填、数字、E-Mail、URL和信用卡号码等19类内置验证规则。

- 自定义验证规则：可以很方便地自定义验证规则。

- 简单强大的验证信息提示：默认了验证信息提示，并提供自定义覆盖默认提示信息的功能。

- 实时验证：可以通过keyup或blur 事件触发验证，而不仅仅在表单提交的时候验证。

- 校验规则

| 序号 | 规则               | 描述                                                         |
| :--- | :----------------- | :----------------------------------------------------------- |
| 1    | required:true      | 必须输入的字段。                                             |
| 2    | remote:"check.php" | 使用 ajax 方法调用 check.php 验证输入值。                    |
| 3    | email:true         | 必须输入正确格式的电子邮件。                                 |
| 4    | url:true           | 必须输入正确格式的网址。                                     |
| 5    | date:true          | 必须输入正确格式的日期。日期校验 ie6 出错，慎用。            |
| 6    | dateISO:true       | 必须输入正确格式的日期（ISO），例如：2009-06-23，1998/01/22。只验证格式，不验证有效性。 |
| 7    | number:true        | 必须输入合法的数字（负数，小数）。                           |
| 8    | digits:true        | 必须输入整数。                                               |
| 9    | creditcard:        | 必须输入合法的信用卡号。                                     |
| 10   | equalTo:"#field"   | 输入值必须和 #field 相同。                                   |
| 11   | accept:            | 输入拥有合法后缀名的字符串（上传文件的后缀）。               |
| 12   | maxlength:5        | 输入长度最多是 5 的字符串（汉字算一个字符）。                |
| 13   | minlength:10       | 输入长度最小是 10 的字符串（汉字算一个字符）。               |
| 14   | rangelength:[5,10] | 输入长度必须介于 5 和 10 之间的字符串（汉字算一个字符）。    |
| 15   | range:[5,10]       | 输入值必须介于 5 和 10 之间。                                |
| 16   | max:5              | 输入值不能大于 5。                                           |
| 17   | min:10             | 输入值不能小于 10。                                          |

案例1：完成下面的验证

![image-20210204100732423](动态界面设计与开发（jQuery）.assets/image-20210204100732423.png)

- 姓名必填且长度大于2

- 邮箱必填且必须是合法邮箱

- 网址必须是合法的url地址
- 评论必填

```javascript
$("#fm").validate({
	rules:{
		username:{
			required:true,
			minlength:2
		},
		email:{
			required:true,
			email:true
		},
		url:"url",
		comment:"required"
	}
});
```

## 2. jQuery表单插件-form

jQuery form插件是一个优秀的Ajax表单插件，可以非常容易地、无侵入地升级HTML表单以支持Ajax。核心方法ajaxForm()和ajaxSubmit()。

```javascript
$("#fm").ajaxForm(function() {
	$("#output1").html("提交成功").show();
});
$("#fm").submit(function() {
	$(this).ajaxSubmit(function() {
		$("#output1").html("提交成功").show();
	});
	return false;//阻止表单的默认提交
});
```

ajaxForm()和ajaxSubmit()方法参数

```
var options = {
	target:"#output1",//把服务器返回的内容放入id=output1元素中
	beforeSubmit：showRequest,//提交前回调函数
	success:showResponse,//提交后回调函数
	url:url,//默认是form的action
	type:type,//默认是formde method（'get'或'post'）
	dataType:null，//接受服务器返回的类型，'xml'、'script'、'json'
	clearForm:true,//成功提交后，清除所有表单元素值
	resetForm:true,//成功提交后，重置所有表单元素值
	timeout:3000 //限制请求的时间，当请求大于3秒后，跳出请求
}
```



## 3. jQuery插件-Cookie

​		Cookie是网站设计者放置在客户端的小文本文件。Cookie能未用户提供很多便利，例如：购物网站存储用户曾经浏览过的产品列表，或者门户网站记录用户喜欢浏览哪类新闻等。在用户允许的情况下还可以存储用户的登录信息，使得用户在访问网站时不必每次都键入这些信息。

### 3.1 Cookie  API

- 写入Cookie

```
$.cookie('the_cookie','the_value');
//the_cookie为待写入的cookie名，the_value为待写入的值
```

- 读取Cookie

```
$.cookie('the_cookie');
//通过cookie名获取cookie的值
```

- 删除cookie

```
$.cookie('the_cookie',null);
//通过设置某个cookie名对应的值为null来实现删除cookie
```

- 其他参数

```
$.cookie('the_cookie','the_value',{
	expires:7,//cookie的有效期，单位是天
	path:'/',//cookie路径，默认是创建该cookie的页面路径
	domain:'jquery.com',//cookie的域名属性，默认是创建该cookie的页面域名
	source:true //如果设为true，那么此cookie的传输会要求一个安全协议，如HTTPS
});
```

案例1：当用户填写用户名后选择记住用户名后，再次打开浏览器访问该页面，自动填入用户名。

```javascript
var now = new Date();
		$("body").append("<p>"+now.toLocaleString()+"</p>");
		if($.cookie("username")!=null){
			$("#uname").val($.cookie("username"));
		}
		$("#check").click(function(){
			if(this.checked){
				//存储cookie
				$.cookie("username",$("#uname").val(),{path:'/',expires:2});
			}else{
				//删除cookie
				$.cookie("username",null);
			}
		});
```

![image-20210204114446318](动态界面设计与开发（jQuery）.assets/image-20210204114446318.png)

