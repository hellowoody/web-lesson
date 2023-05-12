function component(){
    const div = document.createElement("div")

    div.innerHTML = _.join([
        "<h1>",
        "hello",
        "project",
        "02",
        "</h1>"
    ]," ")

    return div
}


document.body.appendChild(component())