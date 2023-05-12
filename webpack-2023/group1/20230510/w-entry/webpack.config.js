const { join,resolve } = require("path")

// console.log("join",join("src","index.js"))
// console.log("join",join(__dirname,"src","index.js"))

// console.log("resolve",resolve(__dirname,"src","index.js"))

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