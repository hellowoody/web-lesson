# 对象声明

  ```js
  const obj1 = {}

  const obj2 = new Object()
  ```

# 定义属性

 ```js
 obj1.name = '张三'
 
 // option parameter
 Object.defineProperty(obj1, 'name', {
     value: '王五',
     writable: true, // 可修改 默认值false
     enumerable: true, // 可枚举 默认值false
     configurable: true // 可配置 默认值false
 })
 ```

# 对象属性的crud


# 构造器 原型 实例 原型链

 - 动态的给一个原型增加属性和方法

 - "继承"inherited

 - 实例上的方法如何在原型链上“找”