const {writeFile} = require("fs");

const str = `aaaaaa
bbbbbb
cccccc
`

writeFile("./target.txt",str,{flag:"w"},e => e ? console.error(e) : console.log("success!"))
