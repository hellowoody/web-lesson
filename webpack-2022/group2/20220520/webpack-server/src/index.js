import "@/css/common.css"
import data from "@/data/stu.csv"

// Map
const arr = data.split("\n")
// const arr_new = arr.map(item => {
//     return item.split(",")
// })
// const map = new Map(arr_new)

const map = new Map(arr.map(item => item.split(",")))
console.log(map)

for(const m of map){
    const div = document.createElement("div")
    div.innerHTML = `姓名111:${m[0]};成绩:${m[1]}`
    document.body.appendChild(div)
}

if(import.meta.webpackHot){
        console.log("=========")
        import.meta.webpackHot.accept(() => {
            console.log("成功开始 hmr")
        })
}

