function comp (){
    const h1 = document.createElement("h1")
    h1.innerText = "about component"
    return h1
}


document.body.appendChild(comp())