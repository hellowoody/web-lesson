/*

    1.两个数组拼接一起用哪个方法

        [1,2]  ["a","b"]   [1,2,a,b]
          a       b


        a.concat(b)  [1,2,a,b]

        a.push(b)    [1,2,["a","b"]]
        a.push(...b) 
        a.push(b[0],b[1],b[2]) 

        Array.prototype.concat([1,2],["a","b"])

        Array.call().concat([1,2],["a","b"])
       

    2."此地别燕丹"如何截取“燕丹”，用3种方法

        const arr = Array.from("此地别燕丹")    
                                0 1 23 4

        arr.slice(3,5)  // [3,5） 3,4
        arr.slice(3)
        arr.slice(-2)

        "此地别燕丹".substring(3) 

        "此地别燕丹".substr(3,2)


    3.[0, 1, 10, 2, 3, 5, 7, 9] 降序排序


        const arr = [0, 1, 10, 2, 3, 5, 7, 9]
        
        arr.sort(function(p1,p2){
            if(p1 < p2){
                return 1
            }else if(p1 > p2){
                return -1
            }else{
                return 0
            }
        })

        console.log("arr:",arr)

*/ 
