# Vue Lesson / Vue 教程

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

## 3.vue 生命周期

- 最好理解的场景是列表页面，根据生命周期在dom渲染完成后再去请求http api，不然会出现元素undefined错误，因为http是异步请求，有可能在dom还未渲染时，数据已经返回
- 在vue里生命周期 其实就是回调函数

## 4.web component

- Alex Russell在2011年的Fronteers大会上首次提出Web组件。
- vue 是2014提出第一版，但是我们实际使用最多的还是2.0版本，大概是2016年
- 对比可以发现vue 有一些web component的影子,看代码例子
- vue api 网站 选项/dom  vm.$slots

## 5.闭包(Closure) 立即执行(IIFE)

- 只有func有块级作用域，例如if for是没有块级作用域
- 在es5 或是说 es6之前，大家使用闭包来避免只有func有块级作用域的带来的bug
- es6 之后 也可以使用 const let 解决，这样比起闭包简单，也易于理解
- 闭包和iief 容易被混淆，IIEF核心是闭包，一般我们说的闭包其实是IIFE

## 6.for loop 几种形式

for for-in for-of foreach对比效率
- for 最快
- for-in 最慢
- for-of 写的最舒服
- foreach 特定场景时只能用它,效率也可以

## 7.对比Commonjs，Amd,Es6，ts

- ES
    | 版本   | 描述   | 
    | ------ | ------ | 
    | ES1, ES2, ES3, ES4 | 大家都认为ES6 和 ES2015 是同一个东西. |
    | ES5-2009 |  |
    | ES6 / ES2015 - 2015 | 起先被推广的名字是ES6。然而组委会要求ECMAScript必须做到 |
    | ES2016 (ES7) - 2016 | 每年做一次更新。由此，这个版本被更名为ES 2015，且每年都 |
    | ES2017 (ES8) - 2017 | 需要更新，并命名为当前年的后缀。|
 
## 8.渐进式使用 为了了解原理和面试

简单尝试渐进性的使用方式，目的是了解vue的原理和面试的知识储备

## 9.npx 使用 不需要全局装vue 但初学者不建议

## 10.router histroy build 和 dev

- 不建议使用vue-router 的histroy-mode 形式，因为这种方式一般是为了后端渲染的，如果是nginx发布的话，需要单独配置
- histroy-mode模式 在dev开发时是没有问题的，但打包build之后问题就显现出来。

## 11.vscode插件

- vetur
- vue-peek

## 12.nodejs express 优势 为什么要学这个

- 因为js可以使用回调函数函数，这样的话，在只请求无需cpu（逻辑计算）的接口场景中，nodejs可以发挥巨大优势。可以接口“无限的”的请求。
- 那为什么传统后端语法没有这个优势呢，拿java，golang举例，一般情况是一个请求对应后台一个全生命周期，直到后台response后才算完成，为了解决并发问题会使用“信号量”，“load balancer负载均衡”解决，其实就是用队列和多线程解决，但是多线程会收到内存大小的限制

