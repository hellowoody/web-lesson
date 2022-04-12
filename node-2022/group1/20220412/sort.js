/*
    随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
    将其排列成一个新数组，要求新数组形式如下(凡是连续数字分为一组)，
    例如 [[2, 3, 4, 5], [10, 11], [20]]。
*/

const randomArr = createRandomArray(20,-15,15);
console.log(randomArr)
const res = sort(randomArr)
console.log("最终结果:",res)

function sort(arr){
    // 1.声明结果数组
    const resArr = []
    // 2.将原数组进行生序排列
    arr = arr.sort((a,b) => a-b)
    console.log("升序:",arr)
    /*
        [5,7,9,10,11,13]
        resArr = [[5],[7],[9,10,11],[13]]
        loop 1 v:5 :resArr.pop() > undefined > push([5])
        loop 2 v:7 :resArr.pop() > [5] > [5].pop() > 5 > 7-5 !==1 > push([5]) push([7])
        loop 3 v:9 :resArr.pop() > [7] > [7].pop() > 7 > 9-7 !==1 > push([7]) push([9])
        loop 4 v:10:resArr.pop() > [9] > [9].pop() > 9 > 10-9 ===1 > [9,10] push([9,10])
        loop 5 v:11:resArr.pop() > [9,10] > [9,10].pop() > 10 > 11-10 ===1 > [9,10,11] push([9,10,11])
        loop 6 v:13:resArr.pop() > [9,10,11] > [9,10,11].pop() > 11 > 13-11 !==1 > push([9,10,11]) push([13])
    */
    // 3.连续的数值分组
    arr.forEach((v) => {
        const lastArr = resArr.pop()
        if(!lastArr){
            // 只有第一次遍历时才进入
            resArr.push([v])
        }else{
            const lastVal = lastArr.pop();
            switch (v-lastVal) {
                case 0:
                    // 前后两个值相等
                    lastArr.push(lastVal)
                    resArr.push(lastArr)
                    break;
                case 1:
                    // 前后两个值连续的
                    lastArr.push(lastVal)
                    lastArr.push(v)
                    resArr.push(lastArr)
                    break;
                default:
                    // 不连续
                    lastArr.push(lastVal)
                    resArr.push(lastArr)
                    resArr.push([v])
                    break;
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
