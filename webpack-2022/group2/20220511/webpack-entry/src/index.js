function comp (){
    const h1 = document.createElement("h1")
    h1.innerText = "index component"
    return h1
}


document.body.appendChild(comp())