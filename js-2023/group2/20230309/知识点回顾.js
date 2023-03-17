/*

练习题
const str = "hell word"
如何通过数组的方法转成 "hello world"

提示：使用昨天所学数组的方法


第一步

str to array  
Array.from()

第二步

尾部d 移除   pop()
把l 放进     push("l")
把d 放进     push("d")

第三步

hell 全部移除  shift()
hello 加进来   unshift()

第四步

array to string


*/


/*
    push方法是往数组中加数据  [1,2] 在中括号中往右追加
    pop方法是获取最后一次调用push方法的那个元素，同时把该元素从数组中删除
    unshift方法“插队”作用，将参数直接放在“队列”最靠近出口的位置  [2] 在中括号中最左插入

    shift方法是获取
                最后一次调用unshift方法的那个元素，同时把该元素从数组中删除
                如果没有调用过unshift
                那么最先调用push方法的那个元素，同时把该元素从数组中删除     


    当数组只有一个元素是，pop(),shift()都可以取出改唯一的元素        
*/ 

const str = "hell word"
const arr = Array.from(str) 
console.log(arr)
console.log(arr.pop())
console.log(arr)
arr.push("l")
arr.push("d")
console.log(arr)

let step = 4
while(step > 0){
    arr.shift()
    step--
}
console.log(arr)

// hello
// o unshift()
for(const _ of Array.from("hello").reverse()){
    arr.unshift(_)
}

console.log(arr.join(""))

