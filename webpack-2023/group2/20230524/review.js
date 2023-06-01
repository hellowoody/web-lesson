/*
    1.devServer中的static 如何理解

        static 指向的内存中的“虚拟路径”

    2.devServer中的hot 是什么

        热替换 hmr

        src中js
            每个js文件下方，import.meta.webpackHot.accept()

            只在入口js文件下方
            import.meta.webpackHot.accept()
            import.meta.webpackHot.accept("XXX.js路径")

        src中非js文件

            loader"翻译"时会在相应的文件最后加上 import.meta.webpackHot.accept()


    3.devServer中的liveReload  是什么

        热部署 liveReload

        src中的文件被改变，就会重新打包并更新web服务

*/

