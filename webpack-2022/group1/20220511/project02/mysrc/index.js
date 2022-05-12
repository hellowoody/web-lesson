// const _ = require("lodash")

function component(){
    const div = document.createElement("div")   // <div></div>

    // div.innerHTML = _.join(["<h1>","hello","project","03","</h1>"]," ")
    div.innerHTML = ["<h1>","hello","project","03","</h1>"].join(" ")

    return div
}

document.body.appendChild(component())              // <body><div><h1>hello project 01</h1></div></body>