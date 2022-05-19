const {resolve} = require("path")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"main.[chunkhash:6].js",
        path:resolve(__dirname,"dist"),
        clean:true
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"src")
        },
        extensions:[".js",".json",".css"]
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}