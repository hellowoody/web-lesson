/*
    随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
    将其排列成一个新数组，要求新数组形式如下(凡是连续数字分为一组)，
    例如 [[2, 3, 4, 5], [10, 11], [20]]。
*/

const randomArr = createRandomArray(10,5,15);
console.log(randomArr)
const res = sort(randomArr)
console.log("最终结果:",res)

function sort(arr){
    // 1.声明结果数组
    const resArr = []
    // 2.将原数组进行生序排列
    arr = arr.sort((a,b) => a-b)
    console.log("升序:",arr)
    // [[5]]
    // a pop() [5].pop() 5 b 7-5 !== 1 是否连续  c push([5]) push([7])
    // [[5],[7]]
    // a pop() [7].pop() 7 b 9-7 !== 1 是否连续  c push([7]) push([9])
    // [[5],[7],[9,10,11],[13]]
    // 3.连续的数值分组
    arr.forEach((v,i) => {
        // console.log(`索引：${i},值:${v}`)
        const lastArr = resArr.pop() || []
        if(lastArr.length === 0){
            resArr.push([v])
        }else{
            const lastVal = lastArr.pop()
            if(lastVal != null && (v - lastVal === 1 || v - lastVal === 0 )){ 
                lastArr.push(lastVal)
                lastArr.push(v)
                resArr.push(lastArr)
            }else{
                lastArr.push(lastVal)
                resArr.push(lastArr)
                resArr.push([v])
            }
        }
    })
    return resArr
}

function createRandomArray(len,startNum,endNum){
    // Math.random()      [0，1）
    // Math.random()*n+m  [m,m+n) 
    // Math.floor(Math.random()*n+m) 
    // [-10,10)
    // m:-10 n:20
    const arr = [] , m = startNum, n = endNum - startNum;
    for(let i = 0 ; i < len ; i++){
        // console.log(Math.floor(Math.random()*n+m))
        arr.push(Math.floor(Math.random()*n+m))
    }
    return arr
}
