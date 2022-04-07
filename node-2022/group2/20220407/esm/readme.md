1.ESM跟commonjs都是nodejs平台中内置的管理模块
2.commonjs是默认的，而ESM不是，如果你想使用ESM，需要修改package.json中的type属性
3.json对象，如果key不加引号，我们把它看成js的对象
           如果key加双引号，我们把它看成JSON格式文件
4.除了改type属性之外，也可以改后缀名为mjs，但这种我们开发时不太推荐。
5.ESM在书写中更加严格，严格带来的是解决问题的全面和强大
6.ESM和commonjs不能共存
7.ESM中导入文件必须加后缀
8.ESM和commonjs的另一个重要的区别是，ESM导出的内容是不可变的（会把let声明的变量 导出后变成 const）
           