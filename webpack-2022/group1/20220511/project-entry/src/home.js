function component(){
    const div = document.createElement("div")   // <div></div>

    div.innerHTML = "home component"

    return div
}

document.body.appendChild(component())              // <body><div><h1>hello project 01</h1></div></body>