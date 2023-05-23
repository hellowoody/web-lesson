import "@/css/index.css";
import txt from "@/data/1.txt"
import stu from "@/data/stu.csv"

console.log("txt:",txt)
console.log("txt:",stu)

const stu_arr = stu.split("\r\n")
const stu_data = []
for(const one of stu_arr){
    stu_data.push(one.split(","))
}

console.table(stu_data)

const table = document.createElement("table")
table.border=1
table.innerHTML = `
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
            `)}
        </tr>`)}
    </tbody>
`


document.body.innerHTML = `<h1>hello webpack img ${txt.substring(9,15)}</h1>` + table.outerHTML + document.body.innerHTML

// const h1 = document.createElement("h1")

// h1.innerText = "hello webpack img"

// document.body.appendChild(h1)

// document.body.insertBefore(h1,document.body.firstElementChild)

