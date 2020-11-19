# 基础概念

## 1.对比Commonjs，Amd,Es6，ts

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

## 2.闭包(Closure) 立即执行(IIFE-Immediately-invoked Function Expression) （面试）

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

   
## 3.构造器（Constructor）

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

## 4.__proto__

JavaScript 中的对象有一个内部属性，在语言规范中称为 __proto__，它只是一个其他对象的引用。几乎所有的对象在被创建时(new)，它的这个属性都被赋予了一个非null值。


## 5.prototype

所有的对象在被声明后，js引擎会赋予这个对象一个了非null的Prototype属性,而不是示例化（new）

```
function foo(){}
console.log(foo.prototype)
```


## 6.原型链（面试）

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

## 7.for loop 几种形式（面试）

for for-in for-of foreach对比效率
- for 最快
- for-in 最慢
- for-of 写的最舒服
- foreach 特定场景时只能用它,效率也可以。好处：省略下标，在链表状态下效率会高一点


## 9.哈希表，hashmap （面试）

hash（散列、杂凑）函数，是将任意长度的数据映射到有限长度的域上。直观解释起来，就是对一串数据m进行杂糅，输出另一段固定长度的数据h，作为这段数据的特征（指纹）。

哈希表是除了数组之外，最常见的数据结构，几乎所有的语言都会有数组和哈希表这两种集合元素，有的语言将数组实现成列表，有的语言将哈希表称作结构体或者字典，但是它们是两种设计集合元素的思路，数组用于表示元素的序列，而哈希表示的是键值对之间映射关系，只是不同语言的叫法和实现稍微有些不同。

ES6中的Map是新增的一种数据结构。它类似对象，但是对象的键只能是字符串，Map的键不限定是字符串，Map的键可以是一个
对象，可以是布尔值等。Map提供"值-值"的对应关系，是一种Hash结构，但实际上ES6又比传统Hash多了一些特性。

理想状态下的hash要求哈希函数输出范围大于输入范围，但是由于键的数量会远远大于映射的范围，所以在实际使用时，这个理想的结果是不可能实现的。
现实状态是，输入范围基本都大于输出范围。
解决方式：开放寻址法和拉链法（不过多介绍）
无论哪种方式，hash的性能都受装载因子影响
拿拉链法举例，装载因子越大，哈希的读写性能就越差，当哈希表的装载因子较大时就会触发哈希的扩容，创建更多的桶来存储哈希中的元素，保证性能不会出现严重的下降。如果有 1000 个桶的哈希表存储了 10000 个键值对，它的性能是保存 1000 个键值对的 1/10，但是仍然比在链表中直接读写好 1000 倍。

## 10.NaN !== NaN 为true (面试)

NaN 是一个非常特殊的值，它从来不会等于另一个 NaN 值（也就是，它从来不等于它自己）。实际上，它是唯一一个不具有反射性的值。所以，NaN !== NaN。


## 11.单例范式-Singleton

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

## 12.赋值，浅拷贝，深拷贝区别

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

## 13.js如何改变this指向-call apply bind用法

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

## 14.Event Loop

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


## 15.scrollTop

  - 有些情况下,“元素中内容”的高度会超过“元素本身”的高度, scrollTop指的是“元素中的内容”超出“元素上边界”的那部分的高度。
    一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。
  - 通过js代码来读取，写入scrollTop的值
    注意：scrollTop的使用方式是element.scrollTop，而不是element.style.scrollTop
  - scrollHeight
    - 元素滚动条内的内容高度。
    - scrollHeight同scrollTop属性一样，只有DOM元素才有，window/document没有。
    - 不同的是scrollHeight是只读，不可设置。
    - 此外还有scrollLeft，scrollWidth，道理是一样的。

## 16.发布-订阅范式

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

## 17.观察者范式

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

## 18.发布-订阅范式和观察者范式的区别

  - ![image](https://raw.githubusercontent.com/hellowoody/web-lesson/master/%E5%8E%9F%E5%9E%8B/subpubvsobserver.jpeg)

  - 发布订阅者模式与观察者模式类似，但是两者并不完全相同，发布订阅者模式与观察者相比多了一个中间层的调度中心，用来对发布者发布的信息进行处理再发布到订阅者

  - 在观察者模式中，观察者知道主题。 主题维护观察者的记录。 而在发布者－订阅者中，发布者和订阅者不需要彼此了解。 他们只是在消息队列或代理的帮助下进行通信。

  - 在发布者－订阅者模式中，组件与观察者模式相对松散耦合。

  - 观察者模式主要是同步实现的，即事件发生时，主题会调用其所有观察者的适当方法。 发布者-订阅者模式主要是异步实现的（使用消息队列）。

  - 观察者模式需要在单个应用程序地址空间中实现。 另一方面，发布者-订阅者模式更多地是跨应用程序模式。

## 19.时间复杂度

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
    