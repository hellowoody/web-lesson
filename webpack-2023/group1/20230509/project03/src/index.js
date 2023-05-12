const _ = require("lodash")

function component(){
    const div = document.createElement("div")

    div.innerHTML = _.join([
        "<h1>",
        "hello",
        "project",
        "03",
        "</h1>"
    ]," ")

    return div
}


document.body.appendChild(component())

