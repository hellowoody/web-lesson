/*

    1.webpack如何修改导出chunk文件名字

        module.exports = {
            output:{
                filename:"./target/built.js"
            }
        }

        - dist

            - target

                - built.js

    2.webpack如何修改导出chunk文件所属文件夹

        module.exports = {
            output:{
                filename:"built.js",
                path:path.resolve(__dirname,"build")
            }
        }

        - build

            - built.js

    3.loader | module 的作用什么

        webpack 只认 js 语法的文件
        loader 将类似css文件 翻译成 js 文件
            h1 {
                color:red;
            }
            
            const h1_arr = document.getElementsByTagName("h1")
            for(const h1 of h1_arr){
                h1.style = "color:red;"
                h1.setAttribute("style","color:red;")
            }
        
        
        

    4.如何用webpack处理css文件

        css-loader 
        style-loader

        注意：只需要安装，在配置文件中不需要require引用

        module.exports = {
            mode:"",
            entry:
            output:
            module:{
                rules:[
                    // css
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

function Foo(){

}

Foo.xxx = () => {}

new Foo()