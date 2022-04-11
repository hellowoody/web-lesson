console.log("加载a.js")
exports.count = 0
exports.msg = "初始化"

exports.add = who => {
    exports.count = 100
    console.log(`${who}修改了count，现在count为${exports.count}`)
}
console.log("加载完毕a.js")