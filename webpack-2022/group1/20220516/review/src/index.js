// 推荐使用ESM
// ESM 有一个独有的功能 “tree shaking”
// ESM 可以静态加载(默认) 也可以动态加载  所以支持tree shaking
// commonJS 动态加载

import {name} from "./m.js"

console.log("src index.js",name)