# commonJS 对比 ESM

    1.commonJS语法
        require("相对路径")                导入   因为commonJS是动态加载，所以require可以使用在文件的任何一行
        module.exports                   导出   module.exports.xxx = xxx,module.exports = xxx 都支持
        exports（推荐）                   导出  只能这样导出 exports.xxx = xxx 

        require.resolve("相对路径")       得出该文件的绝对路径，不加载文件
        require.cache                    包含已经加载过的文件对象（只要一个文件被require，那么就会存到cache中，并且不会再次加载）

    2.ESM中的语法
        import            导入/加载 因为ESM是静态加载，所以必须写在文件的最上方/一开始的位置
        export            命名导出  在一个文件中可以使用多次 import {x,x} from xxx
        export default    默认导出  在一个文件中最多使用一次 import xxx from xxx
                                                        import xxx,{x,x} from xxx

    3.如何切换两种模块管理模式
        a:修改package.json配置文件中的type， 一般type不用写，因为type默认值就是type：“commonjs”
            如果想切换ESM，那么需要将type:"module"
        b:除了改type属性之外，也可以改后缀名为mjs，但这种我们开发时不太推荐。

        commonJS和ESM都是nodejs内置的模块管理，而commonJS是默认的，如果想切换ESM，可以按照上面两种方式操作
        还有需要注意，ESM和commonjs不能共存

    4.区别

        a:ESM在书写中更加严格，严格带来的是解决问题的全面和强大
            比方，import导入需要写在文件一开始
                 ESM中导入文件必须加后缀名

        b:ESM 导入/导出的内容是只读的，如果你想修改的话，只能在声明的文件中修改;
                                   如果修改成功，那么其他引入该内容的文件中的值也相应的修改.  

        c:commonJS 导入/导出的内容不是原内容而是原内容的副本，
                                   也就是说我们可以在require导入后，自由的修改变量，不用担心会影响到别的文件。

        d:ESM 导入是静态（先分析项目中所有的import，然后再按顺序执行import的文件，最后再执行入口文件）  

        e:commonJS 导入是动态的，最好理解动态就是之前讲的“依赖地狱”

            commonjs 可以解决循环依赖(依赖地狱)，但是解决不完美（不报错，但是程序运行的结果受require加载的顺序影响）


      