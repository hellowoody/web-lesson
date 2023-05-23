window.add = () => {
    const p = document.createElement("p")
    p.innerText = "段落1234"
    document.body.appendChild(p)
}

// esm
// if(import.meta.webpackHot) import.meta.webpackHot.accept()
