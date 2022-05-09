// 通过js动态增加标签
const _ = require("lodash")

function component(){
    const div = document.createElement("div")

    div.innerHTML = _.join(["<h1>","hello","webpack","project03","</h1>"]," ")
    // div.innerHTML = ["<h1>","hello","webpack","project03","</h1>"].join(" ")

    return div
}

document.body.appendChild(component())