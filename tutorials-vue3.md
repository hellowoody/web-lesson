# Vue3.0

## vite

- 安装

    ```
    $ npm init vite-app <project-name>
    $ cd <project-name>
    $ npm install
    $ npm run dev
    ```

- 入口文件

    - 初始化app

        vue3中初始化app时，不再是用new修饰/实例化Vue对象，而是通过createApp方法进行初始化。

        ```
        import {createApp} from 'vue'

        createApp([vue组件])
        ```

    - 挂载dom节点

        vue3中的mount挂载节点，是通过调用mount方法，找到项目根目录下的index.html文件中id为“app”的div标签，执行innerHtml方法，进行挂载，或是称为追加。注意vue2中的挂载是“替换”。

        ```
        import {createApp} from 'vue'
        import App from './App.vue'

        createApp(App).mount('#app')
        ```
