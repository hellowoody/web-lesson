['1', '2', '3'].map((item,index,arr) => {
    console.log(`item:${item} index:${index} arr:${arr}`)
})

console.log("==========================")


const myfunc = (item,index,arr) => {
    console.log(`item:${item} index:${index} arr:${arr}`)
}
['1', '2', '3'].map(myfunc)

console.log("==========================")


// ['1', '2', '3'].map(parseInt)

// parseInt("1",0) // 1
// parseInt("2",1) // NaN not a number
// parseInt("3",2) // NaN

console.log("==========================")

let a = {n:1}
let b = 1000

let aa = a
let bb = b

b = 2000

a.n = 1000
aa.n = -1000

a = {x:3.14}
aa.n = 500

console.log(`b:${b},bb:${bb}`)  // 2000 1000
console.log(`a:`,a,`aa:`,aa)  // {x:3.14} {n:500}

console.log("======================")

// var a = {n: 1};

//  var b = a;
//  a.x = a = {n: 2};

//  console.log("a:",a)

//  console.log("b:",b)

/*

随机生成一个长度为 10 的整数类型的数组，
例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
将其排列成一个新数组，要求新数组形式如下(凡是连续数字分为一组)，
例如 [[2, 3, 4, 5], [10, 11], [20]]。

*/

function createRandomArr(){
    let count = 10
    const res = []
    // [-20,20]
    // Math.floor(Math.random()*m+n)
    // [n,m+n) [-20,40+(-20))
    while(count > 0){
        res.push(Math.floor(Math.random()*(40)-20))
        count--
    }
    return res
}

const arr = createRandomArr()
console.log(arr)
