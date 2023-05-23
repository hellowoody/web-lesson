const {resolve} = require("path")

module.exports = {
    mode:"development",
    // entry:"./src/index.js",
    entry:"./src/indexForESM.js",
    output:{
        filename:"built.js",
        path:resolve(__dirname,"output"),
        library:"$",
        // library:{
        //     type:"commonjs"
        // },
        library:{
            type:"module"
        },
        clean:true
    },
    experiments:{
        outputModule:true
    }
}
