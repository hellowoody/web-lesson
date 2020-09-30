let arr = [31,5,12,22,1,7,9]

/*
冒泡排序的核心：跟我紧挨着的后面那个元素比较大小
*/

for (let j = arr.length ;j > 1  ; j--) {
    for (let i = 0 ; i< j -1 ;i++) {
        if (arr[i] > arr[i+1]) {
            let tmp = arr[i+1]
            arr[i+1] = arr[i]
            arr[i] = tmp
        }
    }
}


console.log(arr)