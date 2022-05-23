import "@/css/common.css"
import data_txt from "@/data/readme.txt"
import data_csv from "@/data/stu.csv"
import data_sql from "@/data/query.sql"
// import {Student} from "@/component/Student.js"
import {Student} from "@/component/StuClass.js"

console.log("txt:",data_txt)
console.log("sql:",data_sql)
console.log("csv:",data_csv)

const arr = data_csv.split("\n")
const stus = []

for(const item of arr){
    const item_arr = item.split(",")
    const stu = new Student(item_arr[0],item_arr[1])
    stus.push(stu)
}

console.log(stus)

for(const stu of stus){
    const div = document.createElement("div")
    div.innerHTML = `姓名:${stu.name}，成绩:${stu.score}`
    document.body.appendChild(div)
}

function comp(){
    const p = document.createElement("p")
    p.innerHTML = "hello plugin"
    return p
}

document.body.appendChild(comp())

console.log(1000)