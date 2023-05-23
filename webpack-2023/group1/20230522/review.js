/*
    webpack v5 中 处理图片时使用内置的loader，在配置时type分几种？

        4种

        asset/resource: 将src中的原图片生成到output的目录中，css文件引用地方也会跟着变
        asset/inline:   将src中的原图片转成base64编码格式的字符串，然后将字符串替换到css文件中
        asset:          兼容上面的resource和inline dataUrlCondition 属性中可以根据条件进行判断
        asset/source:   读取非js的文件中的内容，并将内容通过cjs或esm的方式导入到js文件中

*/