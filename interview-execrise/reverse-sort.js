/*
    翻转排序

*/ 

let str = "abcdefg";

// 方法一：
const arr = str.split("")
// console.log(arr)
arr.reverse()
// console.log(arr)
const res = arr.join("")
console.log("方法一结果：",res)

// 方法二(稍难，思考循环):

function reverseSort(target){
    if(typeof target !== "string"){
        return "参数类型错误"
    }
    if(target.length < 2){
        return target
    }
    const arr = target.split("")
    let leftCurse = 0
    let rightCurse = arr.length - 1
    while(leftCurse < rightCurse){
        // 调换位置
        const tmp = arr[leftCurse]; // 用tmp储存左游标的值
        arr[leftCurse] = arr[rightCurse]
        arr[rightCurse] = tmp
        leftCurse++
        rightCurse--
    }
    return arr.join("")
}

console.log("方法二结果：",reverseSort(str))
// console.log("方法二结果（根据用户传参）：",reverseSort(获取命令行中的参数))
console.log("方法二结果（根据用户传参）：",reverseSort(process.argv[2]))

// 方法三(中难，递归方式):
// 一个函数的函数体内，调用自己本身。
// 递归重要的注意事项：一定要有边界判断
function sort(arr){
    const tmp = arr[0]                              // 1.将第一个元素暂存起来
    arr[0] = arr[arr.length - 1]                    // 2.1 将最后一个元素覆盖到第一个索引上
    arr.pop()                                       // 2.2 将最后一个元素移除
    if(arr.length > 2){                             // 递归的边界
        const arr_rest = arr.splice(1,arr.length-1)
        arr = arr.concat(sort(arr_rest))            // 递归 自己调自己
    }           
    arr.push(tmp)                                   // last 将tmp push到原数组中
    return arr
}

function reverseSortByRecursion(target){
    if(typeof target !== "string"){
        return "参数类型错误"
    }
    if(target.length < 2){
        return target
    }
    const arr = target.split("");
    const res = sort(arr)
    return res.join("")
}

function reverseSortByRecursionLiu(target){
    if(typeof target !== "string"){
        return "参数类型错误"
    }
    if(target.length < 2){
        return target
    }
    return target.slice(target.length - 1) + reverseSortByRecursionLiu(target.slice(0,target.length - 1))
}

const array = []
for(let i = 1; i <= 3000 ; i++){
    array[i] = i
}
str = array.join("")
// console.log("str:",str)
let start = Date.now()
reverseSortByRecursion(str)
// console.log("方法三结果：",reverseSortByRecursion(str))
console.log("duration:",Date.now() - start)
console.log("方法三结果（根据用户传参）：",reverseSortByRecursion(process.argv[2]))
start = Date.now()
reverseSortByRecursionLiu(str)
// console.log("方法三结果Liu：",reverseSortByRecursionLiu(str))
console.log("duration Liu:",Date.now() - start)