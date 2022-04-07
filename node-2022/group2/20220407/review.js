/*
    1.commonjs 可以解决循环依赖(依赖地狱)，但是解决不完美
     （不报错，但是程序运行的结果受require加载的顺序影响）
    
    2.require("相对路径")               加载文件
      require.resolve("相对路径")       得出该文件的绝对路径，不加载文件
      require.cache                    包含已经加载过的文件对象
    
    3.增加语法

      const obj = {
          a:1,
          b:2
      }

      obj.a    // 1
      obj["a"] // 1
      const key = "a"
      obj[key] // 1

*/
const c = 3
const obj = {
    a:1,
    b:2,
    c
}

console.log(obj.a)    // 1
console.log(obj["a"]) // 1
const key = "a"
console.log(obj[key]) // 1

const new_obj = obj
console.log(new_obj.a,new_obj.b)
const {a,b,c:c_val} = obj
console.log(a,b,c_val)