
function component(){
    const el = document.createElement("div");

    el.innerHTML = "home component"

    return el
}

document.body.appendChild(component())
