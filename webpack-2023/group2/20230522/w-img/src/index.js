import "@/css/index.css";
import txt from "@/data/novel.txt"
import stu_raw from "@/data/stu.csv"

console.log(txt)
console.log(stu_raw)


const stu_arr = stu_raw.split("\r\n")
const stu_data = []

for(const one of stu_arr){
    stu_data.push(one.split(","))
}

console.log(stu_data)
console.table(stu_data)

const table_str = `
<table border=1>
    <thead>
        <tr>
            <td>name</td>
            <td>class</td>
            <td>score</td>
        </tr>
    </thead>
    <tbody>
        ${stu_data.map(p => `<tr>
            ${p.map(r => `
                <td>${r}</td>
            `).join("")}
        </tr>`).join("")}
    </tbody>
</table>
`

document.body.innerHTML = `<h1>hello webpack img </h1>` + table_str + document.body.innerHTML 

// const h1 = document.createElement("h1")

// h1.innerText = "hello webpack img"

// document.body.appendChild(h1)

// document.body.insertBefore(h1,document.body.firstElementChild)

