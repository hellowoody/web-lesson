/*

    1. ["a","b","!","A",";"] 判断数组中是否含有大写字母

        // reduce *2

        const arr = ["a","b","!","A",";"]
        arr.some(function(v){
            return v >= "A" && v <= "Z"
        })

        const arr = ["a","b","!","A",";"]
        arr.every(function(v){
            return v < "A" && v > "Z"
        })


    2. 
    [
        {name:"张三"，class:"一班",scor:90},
        {name:"张一"，class:"二班",scor:89},
        {name:"张二"，class:"二班",scor:80},
        {name:"张四"，class:"二班",scor:78},
        {name:"张五"，class:"一班",scor:75},
        {name:"张六"，class:"一班",scor:82},
    ]

    筛选出两个班中成绩在80分以上的的人员名单(包含80分) 
*/

const arr = [
    {name:"张三",class:"一班",score:90},
    {name:"张一",class:"二班",score:89},
    {name:"张二",class:"二班",score:80},
    {name:"张四",class:"二班",score:78},
    {name:"张五",class:"一班",score:75},
    {name:"张六",class:"一班",score:82},
]

const res = arr.reduce(function(acc,item){
    if(acc[item.class]){
        if(item.score >= 80){
            acc[item.class].push(item.name)
        }
    }else{
        acc[item.class] = item.score >= 80 ? [item.name] : []
    }
    return acc
},{})

console.log(res)