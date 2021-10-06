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

    - 过渡方向
    
      > fold-left ： 往下一个页面跳转 （新页面的到来 enter ； 当前页面的离开 leave）

      > fold-right : 回到上一个页面   (老页面的回归 enter ；当前页面的离开 leave）

    - 使用全局状态控制页面跳转的方向，这里我们使用modules的形式创建pageDireaction.js,声明状态以及方法
       
      > direction:  "" | forward | backward

      > forward:   跳转到下一个页面，从一级页面向二级页面跳,可以理解为打仗作战时前进

      > backward： 返回上一个页面
    
  - 首页轮播图

    > 将antd-vue中的carousel导入到项目中，并按官网例子实现最基本的代码例子

    > 控制台如果报错“innerSliderUtils.js:387 Unable to preventDefault inside passive event listener invocation.”，可以暂时不去管他，这个错误是由于浏览器的更新安全机制passive导致的

    > 将图片引入到轮播图中

  - 横向滚动

    - 创建商品卡片组件ProductCard.vue

    - 使用css实现

      设置父元素的样式
      ```
      .product-list {
          display:flex;         /* 让子元素显示在一行 */
          overflow-x: auto;     /* !!! 横向的overflow设置为auto */
          margin-top:18px;
          padding:2px;
          box-sizing: border-box;
      }
      ```
      设置子元素样式
      ```
      .product-item {
          flex-shrink:0;        /* 保证子元素的长宽比例不改变 */
          margin-right:15px;
      }
      ```

    - 使用第三方库实现横向滚动-better-scroll

      - 安装

        官网地址: https://better-scroll.github.io/docs/zh-CN/guide/

        ```
        npm install @better-scroll/core --save
        ```

      - 使用之前需要修改两处之前的代码

        第一处：需要修改MyContent组件中样式，增加一个横向overflow的控制

        ```
        .my-content {
            padding:24px;
            box-sizing:border-box;
            overflow-x: hidden;       /* 这一行是新加的，作用时防止设置wrapper宽度超过屏幕宽度时，阻止横向滑动 */
            overflow-y: auto;         /* 强制让y轴方向的策略时auto自动，防止因为下面的注意事项导致y轴会根据x轴的策略变化而改变  */
        }
        ```

        > overflow注意事项：  
        >  https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow  
        >  设置一个轴为visible（默认值），同时设置另一个轴为不同的值，会导致设置visible的轴的行为会变成auto。   

        第二处：修改App.vue组件中，增加过渡效果时宽度的样式

        ```
        .fold-left-enter-active {
          position:fixed;
          height: 100vh;
          width: 100%;                 /* !!! 将100vh改为100%,注意这个页面中所有的宽度都需要这么修改，如果不设置会导致横向滑动失效   */
          animation-name: fold-left-in;
          animation-duration: 0.3s;
        }
        ```

        > 在better-scroll中不要使用相对单位，例如vh。  
        >  https://github.com/ustbhuangyi/better-scroll/issues/793  
        >  https://github.com/ustbhuangyi/better-scroll/issues/757  

      
      - better-scroll 在Vue3.2中使用方法

        - template 部分

          ```
          <div ref="wrapper" class="product-list-bs">
              <!-- 这里我们增加了一个<div ref="list"></div>标签，原因如下 -->
              <!-- 这里要注意的是，BetterScroll 默认处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。 -->
              <div ref="list" class="list">
                  <product-card v-for="(item,index) in products" :key="index" style="margin-right:15px;" :product="item"></product-card>
              </div>
          </div>
          ```

        - css 部分

          ```
          .product-list-bs {
              margin-top:18px;
              overflow: hidden;
              touch-action: none;
          }

          .list {
              display: flex;
          }
          ```

        - js 部分

          ```
          import {ref,onMounted,nextTick} from "vue"


          const wrapper = ref(null)
          const list = ref(null)
          let picScroll
          // 这里使用onMounted 是为了保证dom已经渲染完毕，好让我们调整ref=list 标签的宽度
          onMounted(() => {
                  const wrapper_div = wrapper.value // <div></div>
                  // console.log(wrapper_div)
                  const list_div = list.value // <div></div>
                  let itemWidth = 138
                  let margin = 15 ;
                  let width = (itemWidth + margin) * products.value.length;
                  // console.log(width)
                  list_div.style.width = width + "px"
                  //  nextTick保证ref=list dom的width更新完毕
                  nextTick(() => {
                      if (!picScroll) {
                          picScroll = new BScroll(wrapper_div, {
                              scrollX: true,
                              eventPassthrough: 'vertical' // 忽略竖直方向的滚动
                          })
                      } else {
                          picScroll.refresh()
                      }
                  })
          })
          ```

    - 总结对比

      > better-scroll实现的效果细节比自己用css实现的要好，比如回弹的效果

      > 自己实现代码简单，不需要修改之前的代码。使用第三方库的需要遵守其开发的约定，不符合其规定的需要对原有代码稍微调整

  - 下拉加载

    > ![image](http://woodyhello.com/assets/imgs/lesson/vue/mvc.png)