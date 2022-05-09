// 通过js动态增加标签

function component(){
    const div = document.createElement("div")

    div.innerHTML = _.join(["<h1>","hello","webpack","project02","</h1>"]," ")

    return div
}

document.body.appendChild(component())