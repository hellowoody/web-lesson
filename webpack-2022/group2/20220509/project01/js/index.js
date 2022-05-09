// 通过js动态增加标签

const div = document.createElement("div")

div.innerHTML = "<h1>hello webpack</h1>"

document.body.appendChild(div)