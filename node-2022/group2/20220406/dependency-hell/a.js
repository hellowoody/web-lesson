/*
    1.require 不必须写在第一行
    2.即出现exports 又出现了module.exports
*/
exports.loaded = false
const b = require("./b");
module.exports = {
    loaded : true,
    b
}
