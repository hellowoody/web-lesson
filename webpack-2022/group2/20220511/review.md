# 回顾知识点

- webpack webpack-cli

- devDependencies

    ```
    npm i --save-dev webpack
    npm i -D webpack
    ```

- path.resolve() 和 __dirname

- npx 为了方便运行nodejs第三方模块可执行文件

    ```
    npx webpack
    ```

    > 补充：在命令行中需要写npx webpack，在package.json中直接写webpack就可以

- mode: none | development | production

- webpack 通过命令传参数的形式自定义配置

    ```
    npx webpack --mode=development --entry=./mysrc/index.js
    ```

- webpack的默认配置文件名字 webpack.config.js

    ```
    npx webpack
    npx webpack --config=webpack.config.js
    // 也可以自定义配置文件的名字
    npx webpack --config=自定义的名字.js
    ```