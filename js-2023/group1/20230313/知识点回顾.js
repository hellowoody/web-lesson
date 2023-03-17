/*

练习题
const str = "祖国真伟大"
如何通过数组的方法转成 "真伟大祖国"

提示：使用数组的push pop shift unshift方法

1.转数组
2.while pop 真伟大
3.for 真伟大toArray reversal unshift

1.转数组
2.while shift 祖国
3.push 

    push方法是往数组中加数据 [b,c,d] d
    pop方法是获取最后一次调用push方法的那个元素，同时把该元素从数组中删除
    unshift方法“插队”作用，将参数直接放在“队列”最靠近出口的位置

    shift方法是获取
                最后一次调用unshift方法的那个元素，同时把该元素从数组中删除
                如果没有调用过unshift
                那么最先调用push方法的那个元素，同时把该元素从数组中删除 
                
                
    创建数组

    const arr = [] 
    const arr = new Array()
    const arr = new Array(0,1,2)      // [0,1,2]
    const arr = new Array("hello")    // ["hello"]
    const arr = new Array(3)          // [empty*3]  
    arr.fill(0)                       // [0,0,0]

    case 只传一个参数:
            if type number
                [empty*3]
                fill()
            else
                [参数]
    case 不止一个参数
            [参数1,参数2,参数3...]

    const arr = new Array(0,1,2,"hello",true,false)
    
    const arr = Array.from("hello世界")
    const arr = Array.of(0,1,2,"hello",true,false)
    const arr = Array.of(0)         // [0]
    const arr = Array.of("hello")   // ["hello"]

*/ 

const str = "祖国真伟大"
const memory = []

const arr = Array.from(str)  // [真，伟，大]
let count = 2
while(count > 0 ){
    memory.push(arr.shift())  // memory [祖,国]
    count--
}

// while for-loop
const len = memory.length
for(let i = 0 ; i < len ; i++){
    arr.push(memory.shift())
}

console.log(arr.join(""))



