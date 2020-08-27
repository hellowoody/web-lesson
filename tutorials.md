# 基础 Lesson / 基础 教程

## 1.mvvm和mvc

简单的说 mvc跟所谓的“前端”并没有什么关系  
由于mvc一般是以服务端(server)角度出发,所以这里view，其实是模板，如jsp，asp等  
但是这种设计，有一点弊端就是后台和前端耦合性太强。所以才会有mvvm的出现  

![image](https://woodyhello.com/assets/imgs/lesson/vue/mvc.png)

![image](https://woodyhello.com/assets/imgs/lesson/vue/mvvm.png)

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

## 4.对比Commonjs，Amd,Es6，ts

为什么现在会有这么多模块化和模块化规范？
最早，我们写js是这样的
缺点：命名容易冲突，因为都是全局的Global
     除了函数有作用域，其他场景都没有块状作用域，不安全
```
var message = 100
function foo(){
    console.log(messsage)
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

## 5.闭包(Closure) 立即执行(IIFE)

- 只有func有块级作用域，例如if for是没有块级作用域
- 在es5 或是说 es6之前，大家使用闭包来避免只有func有块级作用域的带来的bug
- es6 之后 也可以使用 const let 解决，这样比起闭包简单，也易于理解
- 闭包和iief 容易被混淆，IIEF核心是闭包，一般我们说的闭包其实是IIFE

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


## 11.原型链

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


## 12.for loop 几种形式

for for-in for-of foreach对比效率
- for 最快
- for-in 最慢
- for-of 写的最舒服
- foreach 特定场景时只能用它,效率也可以

## 13.渐进式使用 为了了解原理和面试

简单尝试渐进性的使用方式，目的是了解vue的原理和面试的知识储备

## 14.npx 使用 不需要全局装vue 但初学者不建议

## 15.vue 生命周期

- 最好理解的场景是列表页面，根据生命周期在dom渲染完成后再去请求http api，不然会出现元素undefined错误，因为http是异步请求，有可能在dom还未渲染时，数据已经返回
- 在vue里生命周期暴露出来的方法如(beforeCreate created beforeMount mounted beforeupdate updated beforedestroy destroyed),这里在术语上是hook钩子函数，其实可以简单理解为callback回调函数

## 16.router histroy build 和 dev

- 不建议使用vue-router 的histroy-mode 形式，因为这种方式一般是为了后端渲染的，如果是nginx发布的话，需要单独配置
- histroy-mode模式 在dev开发时是没有问题的，但打包build之后问题就显现出来。

## 17.vscode插件

- vetur
- vue-peek

## 18.nodejs express 优势 为什么要学这个

- 因为js可以使用回调函数函数，这样的话，在只请求无需cpu（逻辑计算）的接口场景中，nodejs可以发挥巨大优势。可以接口“无限的”的请求。
- 那为什么传统后端语法没有这个优势呢，拿java，golang举例，一般情况是一个请求对应后台一个全生命周期，直到后台response后才算完成，为了解决并发问题会使用“信号量”，“load balancer负载均衡”解决，其实就是用队列和多线程解决，但是多线程会收到内存大小的限制

