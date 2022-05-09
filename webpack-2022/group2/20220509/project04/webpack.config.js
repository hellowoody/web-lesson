const path = require("path")

module.exports = {
    context:path.resolve(__dirname,"src"),
    entry:"./index.js",
    output:{
        filename:"built.js",
        path:path.resolve(__dirname,"build")
    },
    mode:"development"
}