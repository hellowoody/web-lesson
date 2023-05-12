const { resolve } = require("path")

module.exports = {
    // A
    // entry:"src/index.js",
    // B (推荐)
    // entry:resolve(__dirname,"src","index.js"),
    entry:resolve(__dirname,"src/index.js"),
    // C
    // context:resolve(__dirname,"my"),
    // entry:"./mod.js",

    mode:"development"
}