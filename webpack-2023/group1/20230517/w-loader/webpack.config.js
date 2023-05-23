const {resolve} = require("path")

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"utils.js",
        path:resolve(__dirname,"output")
    },
    module:{
        rules:[
            {
                // test 正则 include 包含 exclude 除此之外
                // test:/\.css$/,
                include:resolve(__dirname,"src/css"),
                use:[
                    "style-loader",
                    {
                        loader:"css-loader",
                    }
                ]
            }
        ]
    }
}