import "@/css/common.css"
import data from "@/data/stu.csv"

class Person {
    constructor(name,score){
        this.name = name
        this.score = score
    }
}

// function Person2(name,score){
//     this.name = name
//     this.score = score
// }

const arr = data.split("\n")
const person_arr = []
for(const item of arr){
    const arr2 = item.split(",")
    const person = new Person(arr2[0],arr2[1])
    person_arr.push(person)
}
console.log(person_arr)

// document.body.innerHTML = "<h1>hello webpack dev server !!!</h1>"

for(const p of person_arr){
    const div = document.createElement("div")
    div.innerHTML = `姓名:${p.name};成绩:${p.score}`
    document.body.appendChild(div)
}

