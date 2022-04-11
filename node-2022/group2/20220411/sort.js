/*
    随机生成一个长度为 10 的整数类型的数组，
    例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
    将其排列成一个新数组，要求新数组形式如下(凡是连续数字分为一组)，
    例如 [[2, 3, 4, 5], [10, 11], [20]]。
*/

const arrRandom = createRandomArr(10,5,15)
console.log("原始数组:",arrRandom)
const res = sort(arrRandom)
console.log("最终结果:",res)

/*
    例子的原数组
    [2, 10, 3, 4, 5, 11, 10, 11, 20]
    例子的结果
    [[2, 3, 4, 5], [10, 11], [20]]
    // 1.新数组外面一个数组
    // 2.外数组的元素都是一个个小数组
    // 3.重复的元素删掉
    // 4.新数组是排好序的
    // 5.内数组之所以“分堆儿”，是因为它们是连续的，相邻两个数相差为1
*/
function sort(arr){
    const resArr = []
    // [3,1,2]
    // b:1 f:3  -1  [1,3,2]
    // b:2 f:1   1  [1,3,2]
    // b:2 f:3  -1  [1,2,3]
    // b:2 f:1   1  [1,2,3]
    arr = arr.sort((backend,frontend) => backend - frontend)
    console.log("排序:",arr)
    /*
        [5,7,9,10,11,13]
        resArr = [[5],[7],[9,10,11],[13]]
        loop 1: push([5]) > [[5]]
        loop 2: resArr.pop() > [5] > [5].pop() > 7-5 !== 1 > push([5]) push([7])
        loop 3: resArr.pop() > [7] > [7].pop() > 9-7 !== 1 > push([7]) push([9])
        loop 4: resArr.pop() > [9] > [9].pop() > 10-9 === 1 > [9,10] , push([9,10])
        loop 5: resArr.pop() > [9,10] > [9,10].pop() > 11-10 === 1 > [9,10,11] , push([9,10,11])
        loop 6: resArr.pop() > [9,10,11] > [9,10,11].pop() > 13-11 !== 1 > push([9,10,11]) push([13])
    */ 
    arr.forEach( v => {
        const outter_pop = resArr.pop()
        if(!outter_pop){
            // 第一次遍历
            resArr.push([v])
        }else{
            const inner_pop = outter_pop.pop()
            switch (v - inner_pop) {
                case 0:
                    // 相等
                    outter_pop.push(inner_pop)
                    resArr.push(outter_pop)
                    break;
                case 1:
                    // 连续
                    outter_pop.push(inner_pop)
                    outter_pop.push(v)
                    resArr.push(outter_pop)
                    break;
                default:
                    // 不连续
                    outter_pop.push(inner_pop)
                    resArr.push(outter_pop)
                    resArr.push([v])
                    break;
            }
        }
    })

    return resArr
}

// 用函数声明的方式声明函数，那么这个函数会被“提升”
// 用函数表达式声明时，则不会提升
function createRandomArr(count,startNum,endNum){
    // Math.random()  [0,1)
    // Math.random()*m [0,m)
    // Math.random()*m+n [n,m+n)      小数
    // Math.floor(Math.random()*m+n)  整数 
    // [n,m+n) [-20,20) [-20,40+(-20))
    const res = [] , n = startNum , m = endNum - startNum;
    while(count > 0){
        res.push(Math.floor(Math.random()*m+n))
        count--
    }
    return res
}