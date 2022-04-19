
function component(){
    const el = document.createElement("div");

    el.innerHTML = "about component"

    return el
}

document.body.appendChild(component())
