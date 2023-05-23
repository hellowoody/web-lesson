/*


    1.loader 的作用什么

        loader 将非js文件“翻译”成js代码
        webpack只能处理js代码

    2.如何用webpack处理css文件

        1.npm i -D css-loader style-loader

        2.webpack.config.js

        module.exports = {
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

*/