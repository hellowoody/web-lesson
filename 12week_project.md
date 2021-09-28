# 实战项目

  - 软件环境

    > nodejs 14.17.6

    > npm 6.14.15

    > vite 2.5.2

    > vue 3.2.6

    > vue-router 4.0.11

    > vuex 4.0.2

    > ant-design-vue 2.2.7

    > vs-code 插件 vetur

    > 操作系统:macos 10.15.7  (win10 professnal sp2)

    > ... 如 graphql deno express 数据库等

  - 制作底部导航栏

    > 创建tabbar父组件，并根据原型图设置css样式 

    > 创建tabbar子组件TabBarItem,使用flex弹性布局特点使之均分，并用具名插槽的方式为图标留出占位符

    > 使用计算属性实现选项卡激活效果

    > 修改路由配置文件，优化为二级路由，让底部选项卡提高复用性

    > 因为底部选项卡中的所有页面都是一级页面，所以选项卡跳转时不应该用push，而是使用replace

  - 制作顶部导航栏

    > 创建TopBar组件

    > 使用具名插槽填充左中右三个位置

    > 中间的插槽用antd中的input组件实现，注意修改样式的作用域问题

    > 创建Search页面和SearchResult页面,并配置一级路由

    > 用iconfont的图标作为返回和搜索按钮，填充具名插槽中，并实现相应的跳转方法

    > 使用父传子的知识点,和定义参数Boolean类型的edit状态位，达到不同页面显示不同输入框状态的效果

    > 利用双向绑定，侦听，以及子调用父方法的知识点，将子组件获取的待查询的内容传到父组件中

    > 实现搜索入口页面带参数跳转到搜索结果页面，并在结果页面打印上一页面的搜索内容

    > 增加搜索入口页面为空校验，提示信息使用antd中的message方法，message这里用的provide/inject方式

    > 实现搜索结果页面的顶部导航栏，基本和搜索入口页面一致

    > 针对localstorage的setItem和getItem进行封装，创建kits/LocalStorageKit.ts文件

    > 对历史搜索记录进行去重，反转(不一定是真正的反转，可以是插入时从前面插入新值)的优化

    > 利用css样式将最新搜索区域的样式实现

    > 实现最新搜索“卡片”的页面跳转和移除本地缓存建值对的公用方法

    > 搜索结果页面将上一页的搜索内容显示在本页面的搜索框中

    > 搜索结果页面点击右上角搜索按钮时，能获取最新搜索内容

    > 实现搜索结果页面的标题和列表，列表用到了antd中的List组件

  - 页面跳转的过渡效果

    > 找到在哪增加代码，是在App.vue中，注意并不是因为他是组件的入口，而是因为他是一级路由的占位符页面

    > 使用watch侦听useRoute中route.path

    > 查看vue3.2官方文档，理解css class命名规则

    > 查看vue-router官方文档，查看如何在router-view基础上增加transition的语法形式

    > 利用css中animation，transform的知识，编写从右向左的动画效果

    > 修改所有组件，让tempalte中的标签都有一个根结点

    > 过渡方向

      fold-left ： 往下一个页面跳转 （新页面的到来 enter ； 当前页面的离开 leave）
      fold-right : 回到上一个页面   (老页面的回归 enter ；当前页面的离开 leave）

    > 使用全局状态控制页面跳转的方向，这里我们使用modules的形式创建pageDireaction.js,声明状态以及方法

      direction:""   //  “” ｜ forward | backward
      forward:   跳转到下一个页面，从一级页面向二级页面跳,可以理解为打仗作战时前进
      backward： 返回上一个页面