const path = require("path")

module.exports = {
    entry:"./mysrc/index.js",
    mode:"development", // none | development | production
    output:{
        filename:"built.js",
        path:path.resolve(__dirname,"dev")
    }
}