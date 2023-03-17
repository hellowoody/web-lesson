/*
    1. [1,-1,-3,30,0,10,3.14] 如何得到只有正整数的数组

        const arr = [1,-1,-3,30,0,10,3.14]

        arr.filter(function(v){
            return v >= 0 && parseInt(v,10) === v 
        })

    2. ["h","e","l","L","O"] 如何将数组每个元素变成大写的元素

        const arr = ["h","e","l","L","O"]

        const arr_new = arr.map(function(v){
            return v.toUpperCase()
        })

        const arr = ["h","e","l","L","O"]
        arr.forEach(function(v,i){
            arr[i] = v.toUpperCase()
        })
        console.log(arr)


    3. [1,2,3] 遍历数组的有几种方式

        for-loop  for(let i = 0;i < arr.length;i++)    
        
        forEach()
        for-of

        map()
        while

*/ 