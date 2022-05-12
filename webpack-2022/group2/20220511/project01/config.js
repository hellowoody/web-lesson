const path = require("path")

module.exports = {
    entry:"./mysrc/index.js",
    output:{
        filename:"built.js",
        path:path.resolve(__dirname,"prod")
    },
    mode:"development"
}