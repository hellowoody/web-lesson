1.ESM和commonJS都是nodejs平台的内置管理模块
2.commonJS的默认的，ESM需要修改相应的配置
3.ESM和commonJS在一个项目中无法共存，必须明确指定用哪个
4.如何在一个nodejs项目中，从commonJS模块管理切换到ESM模块
    a:修改package.json配置文件，将其中type:"module"（推荐）
    b:不需要修改任何配置，只需要将文件名改成".mjs"     (不推荐)
5.ESM的语法更加严格：
                    ESM引入相对路径时，必须加上文件后缀名。
                    如果要引入导出的文件，那么导出的文件必须有导出的语法
