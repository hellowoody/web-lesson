# 基础 Lesson / 基础 教程

## 1.mvvm和mvc

简单的说 mvc跟所谓的“前端”并没有什么关系  
由于mvc一般是以服务端(server)角度出发,所以这里view，其实是模板，如jsp，asp等  
但是这种设计，有一点弊端就是后台和前端耦合性太强。所以才会有mvvm的出现  

![image](http://woodyhello.com/assets/imgs/lesson/vue/mvc.png)

![image](http://woodyhello.com/assets/imgs/lesson/vue/mvvm.png)

## 2.兼容性网站地址

- url

```
https://caniuse.com/
```

## 3.web component

- Alex Russell在2011年的Fronteers大会上首次提出Web组件。
- vue 是2014提出第一版，但是我们实际使用最多的还是2.0版本，大概是2016年
- 对比可以发现vue有一些web component的影子,看代码例子
```
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>web component test</title>
    </head>
    <body>
        <user-card></user-card>
        <template id="userCardTemplate">
            <img src="https://semantic-ui.com/images/avatar2/large/kristy.png">
            <div>
                <p>User name</p>
            </div>
        </template>
        <script>
            console.log(200)
            class UserCard extends HTMLElement {
                constructor(){
                    super()
                    let templateEle = document.getElementById("userCardTemplate")
                    let content = templateEle.content.cloneNode(true)
                    this.appendChild(content)
                }
            }
            window.customElements.define('user-card',UserCard)
        </script>
    </body>
</html>
```

还可以使用module模块引用，(引用时顺序问题需要注意)

```
<script type="module" src="./index.js"></script>
```

- vue 参考web-component的痕迹(api网站vm.$slots,https://cn.vuejs.org/v2/api/#vm-slots)

vue普通写法
```
<template>
  <div>
    <h1 v-if="level == 1">
      <slot></slot>
    </h1>
    <h2 v-if="level == 2">
      <slot></slot>
    </h2>
    <h3 v-if="level == 3">
      <slot></slot>
    </h3>
    <h4 v-if="level == 4">
      <slot></slot>
    </h4>
    <h5 v-if="level == 5">
      <slot></slot>
    </h5>
    <h6 v-if="level == 6">
      <slot></slot>
    </h6>
  </div>
</template>
<script>
  export default {
    props: {
      level: {
        require: true,
        type: Number,
      }
    }
  };
</script>
```
vue render写法
```
<script>
  export default {
    props: {
      level: {
        require: true,
        type: Number,
      }
    },
    render(createElement) {
      return createElement('h' + this.level, this.$slots.default);
    }
  };
</script>
```
createElement 第一个参数是必填的，可以是String | Object | Function
createElement 第二个参数是选填的，一个与模板中属性对应的数据对象 常用的有class | style | attrs | domProps | on
createElement 第三个参数是选填的，代表子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，正常来讲接收的是一个字符串或者一个数组，一般数组用的是比较多的

- vue 组件

```

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"></meta>
		<meta content="width=device-width,initial-scale=1" name="viewport">
		<title>vue</title>
		<script src="vue.js"></script>
		<style>
			[v-cloak] {
				display:none
			}
		</style>
	</head>
	<body>
		<div id="app" v-cloak>	
			<count></count>
			<count></count>
		</div>
		<template id="count-comp">
			<div>
				<h2>{{count}}</h2>
				<button @click="increment">+</button>
				<button @click="decrement">-</button>
				<hello></hello>
			</div>
		</template>
		<template id="hello-comp">
			<div>
				<h2>你好</h2>
				<div>{{content}}</div>
			</div>
		</template>
	</body>
</html>
<script>

//全局组件
Vue.component("hello",{
	template:"#hello-comp",
	data:function(){
		return {
			content:"我是全局组件的内容"
		}
	}
    // render(h){
	// 	return h('div',null,[
	// 		h('h2',"你好"),
	// 		h('div',this.content)
	// 	])
	// }
})

const app = new Vue({
	el:"#app",
	//局部组件
	components:{
		"count":{
			template:"#count-comp",
			data(){
				return {
					count:0
				}
			},
			methods:{
				increment(){
					this.count++
				},
				decrement(){
					this.count--
				}
			}
		}
	}
})
</script>

```

## 4.对比Commonjs，Amd,Es6，ts

为什么现在会有这么多模块化和模块化规范？
最早，我们写js是这样的
缺点：命名容易冲突，因为都是全局的Global
     除了函数有作用域，其他场景都没有块状作用域，不安全
```
var message = 100
function foo(){
    console.log(message)
}

function bar(){

}
message=200
foo()
```
简单的解决方式，是用namespace
缺点：还是没有块状作用域，不安全,容易被覆盖重写
```

var app = {
    message:100,
    foo:function(){
        console.log(message)
    },
    bar:function(){}
}

app.message = 200
app.foo()
```
解决方案，就是“耳熟能详”的匿名闭包中IIFE模式,最具代表的jquery
缺点：因为IIFE模式导致一个js文件就是一个模块，所以真实项目中就会引用“很多”<script>标签
     在引用很多的<script>标签中，顺序(设计依赖关系)和升级问题
```
var app = (function(){
    var message = 100 //私有
    var foo = function(){
        console.log(message)
    }
    return {
        foo:foo
    }
  //  window.$ = {foo} //模仿jquery写法
})()
app.message = 200
app.foo()
```
- Commonjs
    导入导出
    导入：
    ```
    require('xx/xx')
    ```
    导出：
    ```
    module.exports = xxx
    exports.x = xxx
    ```
    注意上面两种方式其实都是exports = {} ，只不过module.exports是整个替换，而exports.x是部分赋值
    缺点：版本问题，性能问题，以及大势所趋

- AMD
    代表作：angluarjs(1.0^)
    其实amd是old school的，明显能从iife模式和web-component种看出写法的相似性
    ```
    define(function(){
        return 模块
    })
    
    define(['module1','module2'],function(m1,m2){
        return 模块
    })
    
    require(['module1','module2'],function(m1,m2){
        
    })
    ```
    优点：异步依赖加载（解决了IIEF模式下的问题）
    缺点：工作量大，后期维护让人头痛，推出最早，所以历史问题很多
    
- ES
    | 版本   | 描述   | 
    | ------ | ------ | 
    | ES1, ES2, ES3, ES4 | 大家都认为ES6 和 ES2015 是同一个东西. |
    | ES5-2009 |  |
    | ES6 / ES2015 - 2015 | 起先被推广的名字是ES6。然而组委会要求ECMAScript必须做到 |
    | ES2016 (ES7) - 2016 | 每年做一次更新。由此，这个版本被更名为ES 2015，且每年都 |
    | ES2017 (ES8) - 2017 | 需要更新，并命名为当前年的后缀。|

## 5.闭包(Closure) 立即执行(IIFE-Immediately-invoked Function Expression) （面试）

- 只有func有块级作用域，例如if for是没有块级作用域
- 在es5 或是说 es6之前，大家使用闭包来避免只有func有块级作用域的带来的bug
- es6 之后 也可以使用 const let 解决，这样比起闭包简单，也易于理解
- 闭包和IIFE 容易被混淆，IIFE核心是闭包，一般我们说的闭包其实是IIFE

```
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
```
例子
```

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"></meta>
		<meta content="width=device-width,initial-scale=1" name="viewport">
		<title>闭包</title>
	</head>
	<body>
		<button>按钮1</button>
		<button>按钮2</button>
		<button>按钮3</button>
	</body>
</html>
<script>
    //闭包
    // function C() {
    //     var count = 0 ;
    // }
    // console.log(count)

    // function C(){
    //     var count = 0
    //     return {
    //         count
    //     }
    // }
    // var Cc = C()
    // console.log(Cc.count)

    // function C() {
    //     var count = 0 ;
    //     var res = function (){
    //         count++
    //         console.log(count)
    //     }
    //     return res
    // }
    // var Cc = C()
    // Cc()
    // Cc()

    //块级作用域
    // es5里 js里只有函数有块级作用域
    // if (1==1) {
    //     var test01_var = 10
    // }
    // console.log(test01_var)
    // function test01(){
    //     var test01_var = 10
    // }
    // console.log(test01_var)

    //进阶
    // var btns = document.getElementsByTagName("button")
    // for(var i = 0 ; i < btns.length ; i++){
    //     btns[i].addEventListener('click',function(){
    //         console.log("这是第",i,"按钮");
    //     })
    // }

    // for(let i = 0 ; i < btns.length ; i++){
    //     btns[i].addEventListener('click',function(){
    //         console.log("这是第",i,"按钮");
    //     })
    // }

    // for(var i = 0 ; i < btns.length ; i++){
    //     (function(i){
    //         btns[i].addEventListener('click',function(){
    //             console.log("这是第",i,"按钮");
    //         })
    //     })(i)
    // }

    // for(let i = 0 ; i < btns.length ; i++){
    //     (function(i){
    //         btns[i].addEventListener('click',function(){
    //             console.log("这是第",i,"按钮");
    //         })
    //     })(i)
    // }

</script>

```

## 6.属性访问，“键（key）”访问

    ```
    var myObject = {
        a: 2
    };

    myObject.a;		// 2

    myObject["a"];	// 2
    ```
    
   为了访问 myObject 在 位置 a 的值，我们需要使用 . 或 [ ] 操作符。.a 语法通常称为“属性（property）”访问，而 ["a"] 语法通常称为“键（key）”访问。在现实中，它们俩都访问相同的位置，
   而且会拿出相同的值2，所以这些术语可以互换使用。
    
   两种语法的主要区别在于，. 操作符后面需要一个 标识符（Identifier） 兼容的属性名，而 [".."] 语法基本可以接收任何兼容 UTF-8/unicode 的字符串作为属性名。
   举个例子，为了引用一个名为“Super-Fun!”的属性，你不得不使用 ["Super-Fun!"] 语法访问，因为 Super-Fun! 不是一个合法的 Identifier 属性名。
   而且，由于 [".."] 语法使用字符串的 值 来指定位置，这意味着程序可以动态地组建字符串的值。比如：
   ```
    var wantA = true;
    var myObject = {
        a: 2
    };

    var idx;

    if (wantA) {
        idx = "a";
    }

    // 稍后

    console.log( myObject[idx] ); // 2
   ```

## 7.计算型属性名(ES6)

   如果你需要将一个计算表达式作为一个键名称，那么刚刚描述的 myObject[..] 属性访问语法是十分有用的，比如 myObject[prefix + name]。但是当使用字面对象语法声明对象时则没有什么帮助。
   ES6 加入了计算型属性名，在一个字面对象声明的键名称位置，你可以指定一个表达式，用 [ ] 括起来：
   ```
   var prefix = "foo";

    var myObject = {
        [prefix + "bar"]: "hello",
        [prefix + "baz"]: "world"
    };

    myObject["foobar"]; // hello
    myObject["foobaz"]; // world
    
   ```
   计算型属性名的最常见用法，可能是用于 ES6 的 Symbol。
   ```
   let data = {
        a:1,
        b:2
    }

    const setValByKeyFromData = function(key,val){
        data = {
        ...data,
        [key]:val
        }
    }
    console.log(data)
    setValByKeyFromData('a',10)
    console.log(data)
   ```
   
## 8.构造器（Constructor）

类的实例由类的一种特殊方法构建，这个方法的名称通常与类名相同，称为 “构造器（constructor）”。这个方法的具体工作，就是初始化实例所需的所有信息（状态）。
在 JavaScrip t中，更合适的说法是，“构造器”是在前面 用 new 关键字调用的任何函数。
```
//es5 语法
"use strict";
var Polygon = /** @class */ (function () {
    function Polygon() {
        this.name = 'Polygon';
    }
    return Polygon;
}());
var poly1 = new Polygon();
console.log(poly1.name);

//es6 语法
class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}
const poly1 = new Polygon();

console.log(poly1.name);
// console.log(poly1.__proto__)
// console.log(poly1.__proto__.constructor)
```

## 9.__proto__

JavaScript 中的对象有一个内部属性，在语言规范中称为 __proto__，它只是一个其他对象的引用。几乎所有的对象在被创建时(new)，它的这个属性都被赋予了一个非null值。


## 10.prototype

所有的对象在被声明后，js引擎会赋予这个对象一个了非null的Prototype属性,而不是示例化（new）

```
function foo(){}
console.log(foo.prototype)
```


## 11.原型链（面试）

```
//构造函数
function Foo(){}
//这时Foo会有一个属性prototype,这个属性指向Foo的原型对象
//同时这个原型对象的construtor 指向Foo也就是构造函数

//实例化构造函数
let foo = new Foo()
//foo会有个属性__proto__，这个属性指向Foo的原型对象
//同时Foo原型对象的construtor 就是Foo的构造函数
```

![image](https://raw.githubusercontent.com/hellowoody/web-lesson/master/%E5%8E%9F%E5%9E%8B/%E5%8E%9F%E5%9E%8B%E9%93%BE.png)

## 12.for loop 几种形式（面试）

for for-in for-of foreach对比效率
- for 最快
- for-in 最慢
- for-of 写的最舒服
- foreach 特定场景时只能用它,效率也可以。好处：省略下标，在链表状态下效率会高一点

## 13.渐进式使用 为了了解原理和面试

简单尝试渐进性的使用方式，目的是了解vue的原理和面试的知识储备

```

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"></meta>
		<meta content="width=device-width,initial-scale=1" name="viewport">
		<title>vue</title>
		<script src="https://cdn.jsdelivr.net/npm/vue"></script>
		<style>
			[v-cloak] {
				display:none;
			}
		</style>
	</head>
	<body>
		<div id="app" v-cloak>
            {{ message }}
        </div>
	</body>
</html>
<script>
	let App
	setTimeout(() => {
		App = new Vue({
			el:"#app",
			data:{
				message:"hello woody"
			}
		});
	}, 1000);
</script>

```

## 14.npx使用,不需要全局装vue,但初学者不建议

## 15.hook和callback区别

- 首先,都可以简单理解为是回调函数callback
- 其次,callback可以理解为在调用之后执行，hook可以理解为在调用之前执行

![image](https://cn.vuejs.org/images/lifecycle.png)

## 16.vue 生命周期

- 最好理解的场景是列表页面，根据生命周期在dom渲染完成后再去请求http api，不然会出现元素undefined错误，因为http是异步请求，有可能在dom还未渲染时，数据已经返回
- 在vue里生命周期暴露出来的方法如(beforeCreate created beforeMount mounted beforeupdate updated beforedestroy destroyed),这里在术语上是hook钩子函数，其实可以简单理解为callback回调函数

## 17.哈希表，hashmap （面试）

hash（散列、杂凑）函数，是将任意长度的数据映射到有限长度的域上。直观解释起来，就是对一串数据m进行杂糅，输出另一段固定长度的数据h，作为这段数据的特征（指纹）。

哈希表是除了数组之外，最常见的数据结构，几乎所有的语言都会有数组和哈希表这两种集合元素，有的语言将数组实现成列表，有的语言将哈希表称作结构体或者字典，但是它们是两种设计集合元素的思路，数组用于表示元素的序列，而哈希表示的是键值对之间映射关系，只是不同语言的叫法和实现稍微有些不同。

ES6中的Map是新增的一种数据结构。它类似对象，但是对象的键只能是字符串，Map的键不限定是字符串，Map的键可以是一个
对象，可以是布尔值等。Map提供"值-值"的对应关系，是一种Hash结构，但实际上ES6又比传统Hash多了一些特性。

理想状态下的hash要求哈希函数输出范围大于输入范围，但是由于键的数量会远远大于映射的范围，所以在实际使用时，这个理想的结果是不可能实现的。
现实状态是，输入范围基本都大于输出范围。
解决方式：开放寻址法和拉链法（不过多介绍）
无论哪种方式，hash的性能都受装载因子影响
拿拉链法举例，装载因子越大，哈希的读写性能就越差，当哈希表的装载因子较大时就会触发哈希的扩容，创建更多的桶来存储哈希中的元素，保证性能不会出现严重的下降。如果有 1000 个桶的哈希表存储了 10000 个键值对，它的性能是保存 1000 个键值对的 1/10，但是仍然比在链表中直接读写好 1000 倍。

## 18.NaN !== NaN 为true (面试)

NaN 是一个非常特殊的值，它从来不会等于另一个 NaN 值（也就是，它从来不等于它自己）。实际上，它是唯一一个不具有反射性的值。所以，NaN !== NaN。

## 19.IP地址

- ip地址分类

IP地址一共分为5类，即A～E，它们分类的依据是其net-id所占的字节长度以及网络号前几位。

  - A类地址:网络号占1个字节。网络号的第一位固定为0。（127.0.0.1就是A类地址）
  - B类地址：网络号占2个字节。网络号的前两位固定为10。
  - C类地址：网络号占3个字节。网络号的前三位固定位110。
  - D类地址：前四位是1110，用于多播(multicast)，即一对多通信。
  - E类地址：前四位是1111，保留为以后使用。
  - 其中，ABC三类地址为单播地址（unicast),用于一对一通信，是最常用的。

- 127.0.0.1的简单介绍

  - 127.0.0.1是内部主机回环地址(loopback),永远都不能出现在主机外部的网络中。

  - 它代表设备的本地虚拟接口，所以默认被看作是永远不会宕掉的接口。

  - 127.0.0.1属于{127,}集合中的一个，而所有网络号为127的地址都被称之为回环地址，所以回环地址！=127.0.0.1,它们是包含关系，即回环地址包含127.0.0.1。 回环地址：所有发往该类地址的数据包都应该被loop back。
  
  - 就拿pc来说，pc的网卡就相当于路由器的一个接口。如一台pc网卡上设置的地址为220.172.115.100，网卡连接正常时，协议状态up，在dos命令行状态下输入ipconfig便可看到该网卡上的IP地址。
  此时在主机上ping其网卡地址的过程如下：主机发送一个icmp包，目的地址为220.172.115.100，请求对方回答；主机根据默认环回主机路由发现数据包目的地址的下一跳指向其loopback接口（主机事先并不知道该地址就在其网卡上），于是将数据包发往其loopback接口（即直接发往cpu）；之后主机收到源IP为220.172.115.100的ping包，于是对该数据包进行回答，回应包亦根据环回路由原路返回。从该过程可看出，该数据包的始发点和被接收点都在同一个接口（即主机本身的loopback接口），寻址过程为一个环回过程，因此该接口称之为“环回接口”。
  当网卡连接断开时，协议down下，用ipconfig便发现“media disconnected”等提示，无IP地址显示。ping 220.172.115.100便出现“destination unreachable”等提示（由于网卡协议没起来，主机没能发现相应路由，无法做出转发决定，从而提示路由不可达）。但此时ping 127.0.0.0/8网段的IP均能ping通，因为一般pc默认把127.0.0.0/8网段IP作为loopback地址，当主机发现该数据包的目的地址为其自身的环回地址时，便将该数据包直接送往其cpu。
  由此可看出ping通环回地址并不表示就能ping通网卡地址，因此不要拿ping 127.0.0.1来检测网卡的好坏，这样做是行不通的。

- ::1 是什么？

  127.0.0.1是ipv4的地址，也是回环地址(loopback)
  IPV6的地址类型可分为三大类：
    - 单播地址
    - 组播地址
    - 任意播地址
  那么IPV6的本地回环属于单播地址，形式是0:0:0:0:0:0:0:1,一般简写成::1
  同IPV4中127.0.0.1地址的含义一样，表示节点自已.

- 0.0.0.0 是什么？127.0.0.1和0.0.0.0地址的区别是什么？

  - 共同点
    - 都属于特殊地址。
    - 都属于A类地址。
    - 都是IPV4地址。

  - 0.0.0.0 
    - 在服务器中，0.0.0.0指的是本机上的所有IPV4地址，如果一个主机有两个IP地址，192.168.1.1 和 10.1.2.1，并且该主机上的一个服务监听的地址是0.0.0.0,那么通过两个ip地址都能够访问该服务。
    - 在路由中，0.0.0.0表示的是默认路由，即当路由表中没有找到完全匹配的路由的时候所对应的路由。

- localhost 是什么？

  相比127.0.0.1，localhost具有更多的意义。localhost是个域名，而不是一个ip地址。之所以我们经常把localhost与127.0.0.1认为是同一个是因为我们使用的大多数电脑上都讲localhost指向了127.0.0.1这个地址。
  在linux系统/ets/hosts文件中；或者在window系统C盘WINDOWS/system32/hosts文件中，都会有如下内容：
  ```
  127.0.0.1   localhost  //这行是肯定有的

  ::1         localhost
  ::1     ip6-localhost ip6-loopback
  ```
## 20.Promise

Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值.
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由JavaScript引擎提供，不用自己部署。
  resolve作用是将Promise对象状态由“未完成”变为“成功”，也就是Pending -> Fulfilled，在异步操作成功时调用，并将异步操作的结果作为参数传递出去；而reject函数则是将Promise对象状态由“未完成”变为“失败”，也就是Pending -> Rejected，在异步操作失败时调用，并将异步操作的结果作为参数传递出去。

```
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
```

![image](https://mdn.mozillademos.org/files/8633/promises.png)

一个 Promise有以下几种状态: 
- pending: 初始状态，既不是成功，也不是失败状态。
- fulfilled: 意味着操作成功完成。
- rejected: 意味着操作失败。

pending 状态的 Promise 对象可能会变为fulfilled 状态并传递一个值给相应的状态处理方法，也可能变为失败状态（rejected）并传递失败信息。当其中任一种情况出现时，Promise 对象的 then 方法绑定的处理方法（handlers ）就会被调用（then方法包含两个参数：onfulfilled 和 onrejected，它们都是 Function 类型。当Promise状态为fulfilled时，调用 then 的 onfulfilled 方法，当Promise状态为rejected时，调用 then 的 onrejected 方法， 所以在异步操作的完成和绑定处理方法之间不存在竞争）。

因为 Promise.prototype.then 和  Promise.prototype.catch 方法返回promise 对象， 所以它们可以被链式调用。
then()方法用于指定当前实例状态发生改变时的回调函数。它返回一个新的Promise实例。
```
Promise.prototype.then(onFulfilled, onRejected);
```

## 21.递归算法

- 递归两个要素
  - 递归边界
  - 递归的逻辑——递归"公式"

- fibonacci斐波纳切数列求和  F(0)=F(1)=1,F(n)=F(n-1)+F(n-2)

```
function fibonacci(n) {
  if (n===0 || n===1){
    return n
  }
  return fibonacci(n-1)+fibonacci(n-2)
}
```

- 阶乘 F(n) = n*F(n-1) | F(0) = 1

```
function f(n){
  if(n<1){
    return 1
  }else{
    return n * f(n-1)
  }
}
```

- 数组求和 F(a1,a2,a3,a4,a5,...) = a1 + F(a2,a3,a4,a5,...)

```
function sum(arr){
  if(arr.length == 0){
    return 0
  }else if(arr.length == 1){
    return arr[0]
  }else{
    return arr[0] + sum(arr.slice(1))
  }
}
```

## 22.http post 4种提交方式

- application/x-www-form-urlencoded
  这应该是最常见的 POST 提交数据的方式了。浏览器的原生 <form> 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。
- multipart/form-data
  一个常见的 POST 数据提交的方式。我们使用表单上传文件时，必须让 <form> 表单的 enctype 等于 multipart/form-data。
- application/json
  application/json 这个 Content-Type 作为响应头大家肯定不陌生。实际上，现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串。
- text/plain or text/xml

## 23.区分简单请求

- 某些请求不会触发 CORS 预检请求，这样的请求被称为简单请求，若请求满足所有下述条件，则该请求可以被视为简单请求.

- 使用下列方法之一
  - GET
  - HEAD
  - POST

- Fetch 规范定义了对 CORS 安全的首部字段集合,不得人为设置该集合之外的其他首部字段，该集合为
  - ACCEPT（用于告知客户端可以处理的内容类型）
  - Accept-Language（用于告知客户端可以处理的自然语言）
  - Content-Language（用于说明访问者希望采用的语言或语言组合）
  - Content-Type (请求体的类型说明，并且该字段有额外限制）
  - DPR（用于告知客户端当前设备的像素比率）
  - Save-Data
  - Viewport-Width
  - Width

- Content-Type 的值被限定为以下三种之一
  - text/plain（普通文本）
  - multipart/form-data
  - application/x-www-form-urlencoded

- 满足上述条件的都被视为简单请求

## 24.单例范式-Singleton

  在面向对象语言中，调用一个类的方法之前，必须先将这个类实例化，才能调用类方法。

  单例模式能使得我们不需要每次都需要实例化一次，因为我们使用的对象都是同一个对象。

  单例模式：只允许实例化一次的对象类。

  -简单模式
  
  ```
  let Singleton = function(name){
      this.name = name
      this.instance = null
  }

  Singleton.getInstance = (name)=>{
      if (this.instance) {
          return this.instance
      }else{
          this.instance = new Singleton(name)
          return this.instance
      }
  }

  let i1 = Singleton.getInstance("张三")
  let i2 = Singleton.getInstance("李四")

  console.log("i1 getInstance : ",i1.name)
  console.log("i2 getInstance : ",i2.name)
  console.log(i1 === i2)
  ```

  - 常规模式

  ```
  let SessionSingleton = (()=>{
      let instance = null
      return function(name){
          if (instance) {
              return instance
          }else{
              this.name = name
              instance = this
              return instance
          }  
      }
  })()

  let ss1 = new SessionSingleton("zhangsan")
  let ss2 = new SessionSingleton("lisi")

  console.log(ss1 === ss2)
  console.log(ss1.name)
  console.log(ss2.name)
  ```

## 25.赋值，浅拷贝，深拷贝区别

  - 对象类型

    简单的认为js中对象可以分为基本对象，引用对象（js中在不同纬度上说，对象类型有“很多种”）
    基本类型指的是string，number，boolean等类似的类型，基本类型可以将赋值和拷贝的认为是一种操作，同时基本类型没有浅拷贝和深拷贝的区别。
    那么下面我们所说的赋值，浅拷贝和深拷贝都是针对的引用类型（如object，array等）

  - 赋值
  
    如果一个对象是引用对象，那么它的赋值，可以理解为他的值为指针，指向某一块内存地址。把它赋值给另一个变量b,则b的值也指向同一块内存地址。所以无论修改其中哪一个变量的属性，另一个变量的值也会更改。

    ```
    let a = {
        age:10
    }

    console.log(a.age) // 10

    let b = a

    b.age = 20

    console.log(a.age) // 20
    console.log(b.age) // 20
    ```

  - 拷贝

    首先要理解赋值和拷贝语意的不同，拷贝可以理解为电影或mp3之类的拷贝，也就是说当一部电影从电脑中拷贝到外置硬盘中时，之后无论在外置硬盘中是修改还是删除，都不会影响电脑中的电影文件，这种操作才叫拷贝。
    所以上述赋值的例子，明显不符合拷贝的要求。那么如何编写js代码，能使刚才的代码例子变为拷贝呢？

    ```
    let a = {
        age : 10
    }

    let b = {}  //声明一个空对象
    b["age"] = a["age"] //然后将a中的属性赋值给b

    console.log(b) //10

    b.age = 200
    a.age = 30
    console.log("a:",a) //30
    console.log("b:",b) //200
    ```

    刚刚的代码例子中，b["age"] = a["age"]是将a中的属性赋值给b，因为age是基本类型number类型，所以赋值和拷贝一样。

    当一个对象是一个object类型，并且这个对象中有引用类型的属性，那么它就是涉及到浅拷贝和深拷贝的概念了。

  - 浅拷贝

    浅拷贝一般有两种方法

    - 循环方法

      ```
      let a = {
          name:"hello",
          age:10,
          friends:[
              "zhang",
              "li",
              "wang"
          ]
      }

      let b = {}


      for(let key in a) {
          b[key] = a[key]
      }

      console.log(b)
      b.name= "你好"
      b.age = 100

      b.friends[1] = "zhao"
      console.log(a)
      ```

    - object.assign

      ```
      let a = {
          name:"hello",
          age:10,
          friends:[
              "zhang",
              "li",
              "wang"
          ]
      }

      Object.assign(b,a)
      b.name= "你好"
      b.age = 100
      b.friends[1] = "zhao"

      console.log(a)
      console.log(b)
      ```

  - 深拷贝

    JS的原生不支持深拷贝

    深拷贝可以简单认为就是用递归的方法进行浅拷贝。

    除了递归的方法之外，可以用JSON.parse(JSON.stringify())进行深拷贝

    ```
    let obj = {         
        reg : /^asd$/,
        fun: function(){},
        syb:Symbol('foo'),
        asd:'asd'
    }; 
    let cp = JSON.parse(JSON.stringify(obj));
    console.log(cp);
    ```

## 26.js如何改变this指向-call apply bind用法

  - 在ES5语法中，如何判断this的指向问题

    在ES5中，始终坚持一个原理："this永远指向最后调用它的那个对象！"

    看一下下面的例子

    ```
    let name = "外面的名字"

    var obj = {
        name:"里面的名字",
        fn:function(){
            console.log(this.name)
        },
    }

    obj.fn()  // 打印 里面的名字

    ```

    ```
    let name = "外面的名字"

    var obj = {
        fn:function(){
            console.log(this.name)
        },
    }

    obj.fn()  // 打印 undefined

    ```

    ```
    let name = "外面的名字"

    var obj = {
        name:"里面的名字",
        fn:function(){
            console.log(this.name)
        },
    }

    var a = obj.fn
    a.fn()  // 打印 外面的名字

    ```

    ```
    let name = "外面的名字"

    function f1(){
        var name = "里面的名字"
        innerFn()
        function innerFn(){
            console.log(this.name)
        }
    }
    
    f1()  // 外面的名字
    ```

  - 在ES5语法中,js可以使用call，apply，bind改变this的指向。

    看一下下面这个例子

    ```
    let name = "外面的名字"

    var obj = {
        name:"里面的名字",
        fn:function(){
            console.log(this.name)
        },
    }

    var obj2 = {
        name:"new name"
    }

    obj.fn.call(ob2)      //打印 new name
    obj.fn.apply(obj2)    //打印 new name
    obj.fn.bind(obj2)()   //打印 new name
    ```
  
  - call apply bind 如何传参

    ```
    var name = "外面的名字"

    var obj = {
        name:"里面的名字",
        fn:function(a,b){
            console.log(a,b,"<=>",this.name)
        },
    }

    var obj2 = {
        name:"new name"
    }

    obj.fn.call(ob2,1,2)      //打印 1 2 <=> new name
    obj.fn.apply(obj2,[3,4])    //打印 3 4 <=> new name
    obj.fn.bind(obj2)(5,6)   //打印 5 6 <=> new name

    ```
  
  - ES5，ES6(箭头函数)语法混合（面试）

    ```

    let fn1 = {
        name:"fn1 name",
        print:function (){
            return ()=>console.log(this.name)
        }
    }

    let fn2 = {
        name: "fn2 name"
    }

    fn1.print()() //  fn1 name

    fn1.print().apply(fn2) // fn1 name  因为call apply bind 对箭头函数无效！

    fn1.print.apply(fn2)() //  fn2 name

    ```

## 27.Event Loop

  - 单线程

    JavaScript语言的一大特点就是单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？
    所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

  - 任务队列

    单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

    如果排队是因为计算量大，CPU忙不过来，倒也算了，但是很多时候CPU是闲着的，因为IO设备（输入输出设备）很慢（比如Ajax操作从网络读取数据），不得不等着结果出来，再往下执行。

    JavaScript语言的设计者意识到，这时主线程完全可以不管IO设备，挂起处于等待中的任务，先运行排在后面的任务。等到IO设备返回了结果，再回过头，把挂起的任务继续执行下去。

    于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

    具体来说，异步执行的运行机制如下。（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）

  - 事件和回调函数

    "任务队列"是一个事件的队列（也可以理解成消息的队列），IO设备完成一项任务，就在"任务队列"中添加一个事件，表示相关的异步任务可以进入"执行栈"了。主线程读取"任务队列"，就是读取里面有哪些事件。

    "任务队列"中的事件，除了IO设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入"任务队列"，等待主线程读取。

    所谓"回调函数"（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。

    "任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，"任务队列"上第一位的事件就自动进入主线程。但是，由于存在后文提到的"定时器"功能，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。

  - Event Loop

    主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。

    ![image](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png)

    上图中，主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在"任务队列"中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。

    执行栈中的代码（同步任务），总是在读取"任务队列"（异步任务）之前执行。请看下面这个例子。

    ```
    var req = new XMLHttpRequest();
    req.open('GET', url);    
    req.onload = function (){};    
    req.onerror = function (){};    
    req.send();
    ```

    上面代码中的req.send方法是Ajax操作向服务器发送数据，它是一个异步任务，意味着只有当前脚本的所有代码执行完，系统才会去读取"任务队列"。所以，它与下面的写法等价。

    ```
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onload = function (){};    
    req.onerror = function (){};   
    ```

    也就是说，指定回调函数的部分（onload和onerror），在send()方法的前面或后面无关紧要，因为它们属于执行栈的一部分，系统总是执行完它们，才会去读取"任务队列"。

  - 定时器

    除了放置异步任务的事件，"任务队列"还可以放置定时事件，即指定某些代码在多少时间之后执行。这叫做"定时器"（timer）功能，也就是定时执行的代码。

    定时器功能主要由setTimeout()和setInterval()这两个函数来完成，它们的内部运行机制完全一样，区别在于前者指定的代码是一次性执行，后者则为反复执行。以下主要讨论setTimeout()。

    setTimeout()接受两个参数，第一个是回调函数，第二个是推迟执行的毫秒数。

    ```
    console.log(1);
    setTimeout(function(){console.log(2);},1000);
    console.log(3);
    ```

    上面代码的执行结果是1，3，2，因为setTimeout()将第二行推迟到1000毫秒之后执行。

    如果将setTimeout()的第二个参数设为0，就表示当前代码执行完（执行栈清空）以后，立即执行（0毫秒间隔）指定的回调函数。

    ```
    setTimeout(function(){console.log(1);}, 0);
    console.log(2);
    ```

  - Node.js的Event Loop

    除了setTimeout和setInterval这两个方法，Node.js还提供了另外两个与"任务队列"有关的方法：process.nextTick和setImmediate。它们可以帮助我们加深对"任务队列"的理解。

    process.nextTick方法可以在当前"执行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。setImmediate方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次Event Loop时执行，这与setTimeout(fn, 0)很像。请看下面的例子
    
    ```
    process.nextTick(function A() {
      console.log(1);
      process.nextTick(function B(){console.log(2);});
    });

    setTimeout(function timeout() {
      console.log('TIMEOUT FIRED');
    }, 0)
    // 1
    // 2
    // TIMEOUT FIRED
    ```

    上面代码中，由于process.nextTick方法指定的回调函数，总是在当前"执行栈"的尾部触发，所以不仅函数A比setTimeout指定的回调函数timeout先执行，而且函数B也比timeout先执行。这说明，如果有多个process.nextTick语句（不管它们是否嵌套），将全部在当前"执行栈"执行。

    现在，再看setImmediate。

    ```
    setImmediate(function A() {
      console.log(1);
      setImmediate(function B(){console.log(2);});
    });

    setTimeout(function timeout() {
      console.log('TIMEOUT FIRED');
    }, 0);
    ```

    上面代码中，setImmediate与setTimeout(fn,0)各自添加了一个回调函数A和timeout，都是在下一次Event Loop触发。那么，哪个回调函数先执行呢？答案是不确定。运行结果可能是1--TIMEOUT FIRED--2，也可能是TIMEOUT FIRED--1--2。

    令人困惑的是，Node.js文档中称，setImmediate指定的回调函数，总是排在setTimeout前面。实际上，这种情况只发生在递归调用的时候。

    ```
    setImmediate(function (){
      setImmediate(function A() {
        console.log(1);
        setImmediate(function B(){console.log(2);});
      });

      setTimeout(function timeout() {
        console.log('TIMEOUT FIRED');
      }, 0);
    });
    // 1
    // TIMEOUT FIRED
    // 2
    ```

    上面代码中，setImmediate和setTimeout被封装在一个setImmediate里面，它的运行结果总是1--TIMEOUT FIRED--2，这时函数A一定在timeout前面触发。至于2排在TIMEOUT FIRED的后面（即函数B在timeout后面触发），是因为setImmediate总是将事件注册到下一轮Event Loop，所以函数A和timeout是在同一轮Loop执行，而函数B在下一轮Loop执行。

    我们由此得到了process.nextTick和setImmediate的一个重要区别：多个process.nextTick语句总是在当前"执行栈"一次执行完，多个setImmediate可能则需要多次loop才能执行完。事实上，这正是Node.js 10.0版添加setImmediate方法的原因，否则像下面这样的递归调用process.nextTick，将会没完没了，主线程根本不会去读取"事件队列"！

    ```
    process.nextTick(function foo() {
      process.nextTick(foo);
    });
    ```

    事实上，现在要是你写出递归的process.nextTick，Node.js会抛出一个警告，要求你改成setImmediate。

    另外，由于process.nextTick指定的回调函数是在本次"事件循环"触发，而setImmediate指定的是在下次"事件循环"触发，所以很显然，前者总是比后者发生得早，而且执行效率也高（因为不用检查"任务队列"）。

## 28.冒泡算法-bubble sort

  ```
  let arr = [31,5,12,22,1,7,9]

  /*
  冒泡排序的核心：跟我紧挨着的后面那个元素比较大小
  */

  for (let j = arr.length ;j > 1  ; j--) {
      for (let i = 0 ; i< j -1 ;i++) {
          if (arr[i] > arr[i+1]) {
              let tmp = arr[i+1]
              arr[i+1] = arr[i]
              arr[i] = tmp
          }
      }
  }


  console.log(arr)
  ```

## 29.二叉树算法-binary tree

  ```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"></meta>
      <meta content="width=device-width,initial-scale=1" name="viewport">
      <title>二叉树排序和查找</title>
    </head>
    <body>
          <button onclick="setup()">开始构造二叉树</button>
          <button onclick="sort()">排序</button>
          <br>
          <input id="inputid" value=""/><button onclick="search()">查找目标值</button>

      </body>
  </html>

  <script>
  // tree
  // node
  // 10 5 20 100 1 2 6
  // 1 2 5 6 10 20 100

  let t

  function Tree(n){
      this.root = n
      this.sortArr = []
  }

  Tree.prototype.Add = function(v){
      let n = new Node(v)
      if (this.root == null){
          this.root = n
      }else{
          this.root.Add(n)
      }
  }

  Tree.prototype.Search = function(target){
      let res = this.root.Search(target)
      if (res != ""){
          return "found target : "+res
      }else{
          return "not found "
      }
      
  }

  Tree.prototype.Sort = function(){
      this.root.Sort(this)
  }

  function Node(n){
      this.val = n
      this.left = null
      this.right = null   
  }

  Node.prototype.Add = function(n){
      if(this.val > n.val){
          if (this.left != null){
              this.left.Add(n)
          }else{
              this.left = n
          }
      }
      if(this.val < n.val){
          if (this.right != null){
                  this.right.Add(n)
          }else{
              this.right = n
          }
      }
  }

  Node.prototype.Sort = function(tt){
      
      if(this.left != null) {
          this.left.Sort(tt)
      }
      // console.log(this.val)
      tt.sortArr.push(this.val)
          if(this.right != null){
          this.right.Sort(tt)
      }

  }

  // 二分法
  Node.prototype.Search = function(target){
      let res
      if(this.val < target){
          if (this.right != null){
              return this.right.Search(target)
          }else{
              return ""
          }
      }
      if(this.val === target){
          res = this.val
      }
      if(this.val > target){
          if (this.left != null){
              return  this.left.Search(target)
          }else{
              return ""
          }
      }
      return res
  }

  function setup(){
      t = new Tree()
      for(let i = 0 ; i< 10 ;i++){
          let r = Math.floor(Math.random() * 100);
          console.log(r)
          t.Add(r)
      }
      console.log(t)
  }

  function sort(){
      t.Sort()
      console.log(t.sortArr)
  }

  function search(){
      let target = document.getElementById("inputid").value
      // console.log(target)
      let res = t.Search(parseInt(target))
      // let res = t.Search(target)
      console.log(res)
  }

  </script>
  ```

## 30.scrollTop

  - 有些情况下,“元素中内容”的高度会超过“元素本身”的高度, scrollTop指的是“元素中的内容”超出“元素上边界”的那部分的高度。
    一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。
  - 通过js代码来读取，写入scrollTop的值
    注意：scrollTop的使用方式是element.scrollTop，而不是element.style.scrollTop
  - scrollHeight
    - 元素滚动条内的内容高度。
    - scrollHeight同scrollTop属性一样，只有DOM元素才有，window/document没有。
    - 不同的是scrollHeight是只读，不可设置。
    - 此外还有scrollLeft，scrollWidth，道理是一样的。

## 31.Proxy

  - 定义
    Proxy 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）
  - 语法
    ```
    /*
    参数：
    target  : 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
    handler : 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
    */
    const p = new Proxy(target, handler)
    ```
  - 使用proxy可以自定义set，get方法

    ```
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"></meta>
        <meta content="width=device-width,initial-scale=1" name="viewport">
        <title>proxy 代理demo</title>
      </head>
      <body>
            <input id="inputid" ><button onclick="p()">将左侧的内容用proxy代理</button>
            <br/>
            <button onclick="get()">获取被代理的值</button>
            <br/>
            <input id="newval" ><button onclick="set()">将左侧的内容设置为新值</button>
      </body>
    </html>
    <script>
    function proxyObj(target){
        return new Proxy(target,{
            get(obj,prop){
                console.log(obj,prop) //每次获取属性 进行一次打印
                return obj[prop]
            },
            set(obj, prop, value){
                console.log("this is set method")
                // console.log(obj,prop,value)
                obj[prop] = value
                return
            },
        })
    }
    let obj = {}
    let obj_proxy
    function p(){
        obj.value = document.getElementById("inputid").value  // 注意proxy 只能代理object类型
        obj_proxy = proxyObj(obj)
        console.log("代理成功")
    }

    function get(){
        console.log(obj_proxy.value)
    }

    function set(){
        obj_proxy.value = document.getElementById("newval").value
    }

    </script>
    ```
    
  - 使用proxy实现双向绑定

    ```
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"></meta>
        <meta content="width=device-width,initial-scale=1" name="viewport">
        <title>proxy 双向绑定</title>
      </head>
      <body>
            <input id="inputid" oninput="onHandle(this)">
            <br/>
            <div id="showdiv"></div>
      </body>
    </html>
    <script>
    function proxyObj(target){
        return new Proxy(target,{
            get(obj,prop){
                return obj[prop]
            },
            set(obj, prop, value){
                obj[prop] = value
                document.getElementById("showdiv").innerText = obj[prop] 
                return
            },
        })
    }

    let obj = {
        value:"hello world"
    }

    let obj_proxy = proxyObj(obj)

    ;(function(){
        document.getElementById("showdiv").innerText = obj_proxy.value
    })()

    function onHandle(e){
        obj_proxy.value = e.value
    }

    </script>
    ```

## 32.发布-订阅范式

  - 范式定义

    发布-订阅是一种消息范式，包含消息的发送者（称为发布者）和接收者（称为订阅者），以及处理消息的调度器
    发布者不会将消息直接发送给特定订阅者。而是由消息调度器处理发送，调度器将消息分为不同的类别进行发送。
    同样的，订阅者可以表达对一个或多个类别的兴趣，只接收感兴趣的消息。

  - 简单实现

    ![image](https://raw.githubusercontent.com/hellowoody/web-lesson/master/%E5%8E%9F%E5%9E%8B/pub-sub1.png)

    ```
    /*
    发布订阅模式 简单场景
    模仿js中listener 事件监听
    */

    function myEvent(){
        const cache = {}

        const on = (name,callback)=>{
            cache[name] = callback
        }

        const trigger = (name)=> {
            cache[name]()
        }

        return {
            on,
            trigger
        }
    }

    let e = myEvent()

    e.on("clickEvent",()=>console.log("点击事件被触发"))

    e.trigger("clickEvent")
    ```
  
  - 复杂实现
  
    ![image](https://raw.githubusercontent.com/hellowoody/web-lesson/master/%E5%8E%9F%E5%9E%8B/pub-sub3.png)

    ```
    /*
        订阅-发布模式
    */


    function pubSub(){
        const subscribers = {}  //调用中心

        const subscribe = (eventName,callback)=>{
            if(!Array.isArray(subscribers[eventName])) {
                subscribers[eventName] = []
            }
            subscribers[eventName].push(callback)
        }

        const publish = (eventName,data) => {
            if(!Array.isArray(subscribers[eventName])) return

            subscribers[eventName].forEach((fn)=>{
                fn(data)
            })
        }

        return {
            subscribe,
            publish
        }
    }

    function zhang(msg){
      console.log("老张! "+msg) 
    }

    function li(msg){
      console.log("老李! "+msg) 
    }

    const ps = pubSub()

    ps.subscribe("new-paper",zhang)
    ps.subscribe("new-paper",li)
    ps.subscribe("tv-show",zhang)

    ps.publish("new-paper","报纸来了")
    ps.publish("tv-show","节目开始了")

    ```

  - 拟真现实场景实现

    ![image](https://github.com/hellowoody/web-lesson/blob/master/%E5%8E%9F%E5%9E%8B/pub-sub2.png?raw=true)

    ```
    /*
        订阅-发布模式
    */

    function dispatcher(){
        const subscribers = {}  //调用中心

        const subscribe = (eventName,name)=>{
            if(!Array.isArray(subscribers[eventName])) {
                subscribers[eventName] = []
            }
            subscribers[eventName].push(name)
        }

        const publish = (eventName,callback) => {
            if(!Array.isArray(subscribers[eventName])) return

            subscribers[eventName].forEach((item)=>{
                callback(item)
            })
        }

        return {
            subscribe,
            publish
        }
    }

    function publisher(name,d){
        this.name = name
        this.dispatcher = d

        const publish = (eventName,callback)=>{
            this.dispatcher.publish(eventName,callback)
        }

        return {
            publish
        }
    }

    function subscriber(name,d){
        this.name = name
        this.dispatcher = d
        const subscribe = (eventName)=>{
            this.dispatcher.subscribe(eventName,name)
        }
        return {
            subscribe
        }
    }

    let d = new dispatcher()

    let sub1 = new subscriber("老张",d)
    let sub2 = new subscriber("老王",d)

    sub1.subscribe("新闻")
    sub1.subscribe("足球")
    sub1.subscribe("电影")
    sub2.subscribe("电影")

    let pub1 = new publisher("发布者1",d)
    let pub2 = new publisher("发布者2",d)

    pub1.publish("新闻",(name)=>console.log(name+"!,"+"天津新闻"))
    pub1.publish("足球",(name)=>console.log(name+"!,"+"C罗感染"))
    pub1.publish("电影",(name)=>console.log(name+"!,"+"春节档信息"))
    pub2.publish("电影",(name)=>console.log(name+"!,"+"周末影讯"))
    ```

## 33.观察者范式

  - 定义

    观察者模式是一种软件设计模式，在该模式中，称为主题的对象会维护其依赖项的列表（称为观察者），并通常通过调用其方法之一来自动通知状态更改。

  - 代码实现

    ![image](https://raw.githubusercontent.com/hellowoody/web-lesson/master/%E5%8E%9F%E5%9E%8B/observer.png)

    ```
    /*
        观察者范式 
        观察者（observer） - 主题（subject）
    */

    //观察者
    function Observer(name){
        this.name = name  //观察者名称
    }

    //注意prototype 的方法不能是arrow function 也就是箭头函数，因为箭头函数不绑定this
    Observer.prototype.update = function(obj) {
        console.log("观察者："+this.name + ",发现订阅的内容（subject）更新："+obj)   
    }

    //主题

    function Subject(){
        this.observers = []
    }

    Subject.prototype.add = function(observer){
        this.observers.push(observer)
    }

    Subject.prototype.remove = function(observer){
        this.observers = this.observers.filter(item=>item.name != observer.name)
    }

    Subject.prototype.notify = function(data){
        this.observers.forEach(observer=>{
            observer.update(data)
        })
    }

    let ob1 = new Observer("张先生")
    let ob2 = new Observer("李先生")
    let ob3 = new Observer("赵先生")

    let subject = new Subject()

    subject.add(ob1)
    subject.add(ob2)
    subject.add(ob3)

    subject.notify("新节目")

    ```

## 34.发布-订阅范式和观察者范式的区别

  - ![image](https://raw.githubusercontent.com/hellowoody/web-lesson/master/%E5%8E%9F%E5%9E%8B/subpubvsobserver.jpeg)

  - 发布订阅者模式与观察者模式类似，但是两者并不完全相同，发布订阅者模式与观察者相比多了一个中间层的调度中心，用来对发布者发布的信息进行处理再发布到订阅者

  - 在观察者模式中，观察者知道主题。 主题维护观察者的记录。 而在发布者－订阅者中，发布者和订阅者不需要彼此了解。 他们只是在消息队列或代理的帮助下进行通信。

  - 在发布者－订阅者模式中，组件与观察者模式相对松散耦合。

  - 观察者模式主要是同步实现的，即事件发生时，主题会调用其所有观察者的适当方法。 发布者-订阅者模式主要是异步实现的（使用消息队列）。

  - 观察者模式需要在单个应用程序地址空间中实现。 另一方面，发布者-订阅者模式更多地是跨应用程序模式。

## 35.时间复杂度

  - 复杂度一般用大写O去表示
  
  - O(1)
    
    ```
    function fn(){
    	const a = 1
	const b = 2
	return a + b
    }
    ```
    
  - O(n)
  
    ```
    function fn(n){
    	const a = 1
	for(let i=0;i<n;i++){
            a += i
	}
	return a
    }
    ```
    
  - O(logn) 
    
    ```
    function fn(){
    	const a = 1
	for(let i=1 ; i<n ;i++){
	    i = i*2
	    a += i
	}
	return a
    }
    ```
    
  - O(m+n)
  
   ```
   function fn(n,m){
    	const a = 1
	for(let i=0;i<n;i++){
            a += i
	}
	for(let j=0;i<m;j++){
            a += j
	}
	return a
    }
   ```
   
  - O(n2)
   
   ```
   function fn(n){
    	const a = 1
	for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
	        a += i+j
	    }
	}
	return a
    }
   ```
    
