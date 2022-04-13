let {count} = require("./a");
require("./b")

count++

console.log("index文件中的count:",count)

let {count:new_count} = require("./a");

console.log("index文件中的new_count:",new_count)