# 教程 Lesson

## 1.为什么要学微信小程序

 - 前端工作的硬性指标(高薪资)

 - 如果有vue,react或angluar的开发经验,易于上手,为什么不学

 - 如果没有前端框架的学习经验，那么微信小程序本质是集多家之优点的一个框架，所以先学习它，也有助于之后快速上手别的框架

 - 市面上有很多第三方封装好的小程序框架例如uni-app,但是就目前观察，如果是大型项目性能会是瓶颈，肯定不如原生微信小程序实用

## 2.微信小程序

  - 网址

    https://mp.weixin.qq.com/

    https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN

  - 注册

    使用邮箱进行微信小程序的注册 (最简单的方式就是新注册一个邮箱，再用新邮箱号注册微信小程序)

  - 获取AppID(小程序ID)

    - 在左侧菜单中点击【设置】
    - 在【设置】页面中找到【帐号信息】
    - 在【帐号信息】中，找到AppID(小程序ID)

  - 开发编辑器IDE下载

    https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

  - 开发工具的详细说明

    https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html

  - 创建项目

    - 将AppId复制到创项目页面中,(也可以使用测试号，但有功能限制）

    - 后端服务选择【不使用云服务】

  - 项目目录

    - sitemap.json

      设置该小程序在微信内是否能被搜索，以及搜索时的关键字及内容

    - project.config.json

      类似vue项目中的webpack.config.js文件，用于打包的，一般不需修改

    - app.wxss

      全局样式，类似vue项目中src/assets/css/commom.css

      ```
      page {
        --themeColor:#9267FD;
        --themeFontColor:#363636;
      }
      ```

    - app.json (重要)

      - 小程序根目录下的 app.json 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。

      - 详细介绍网址

        https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html


      - 在app.json里创建新页面

        在pages属性数组中，添加新页面的路径及文件名称，ide会自动帮我创建一组文件.
        放在数组最上面的页面，就是微信小程序默认打开的页面。

      - 配置全局属性

        ```
        {
          "window":{
            "backgroundTextStyle":"light",
            "navigationBarBackgroundColor": "#9267FD",
            "navigationBarTitleText": "全局标题",
            "navigationBarTextStyle":"white"
          }
        }
        ```

    - utils文件夹

      工具类，一些公用的工具方法

    - pages文件夹

      页面文件夹，每个页面都是一组文件夹

      - *.wxss 样式文件

      - *.wxml (WeiXin Markup Language）是框架设计的一套标签语言，

        - text标签

          等同于html中span标签

        - view标签

          等同于html中div标签

      - *.js 脚本文件

        - data 双向绑定的变量

        - onLoad 生命周期函数--监听页面加载

        - onReady 生命周期函数--监听页面初次渲染完成

        - onShow 生命周期函数--监听页面显示

        - onHide 生命周期函数--监听页面隐藏

        - onUnload 生命周期函数--监听页面卸载

        - onPullDownRefresh 页面相关事件处理函数--监听用户下拉动作

        - onReachBottom 页面上拉触底事件的处理函数

        - onShareAppMessage 用户点击右上角分享

      - *.json 局部配置文件，功能和根目录下app.json类似

        ```
        {
          "navigationBarTitleText": "当前页面的标题"
        }
        ```    
  
  - es6 简单语法

    - 导出 
        - export
        - module.exports 
    
    - 导入 
        - import

            - 针对export导出的内容，导入的语法

                ```
                import { xxx } from "相对路径/文件名";
                ```
            
            - 针对module.exports导出的内容，导入的语法

                ```
                import xxx from "相对路径/文件名";
                ```

  - 输入框小例子

    - wxml文件

      ```
      <!--pages/demo/demo.wxml-->
      <view>
        <input class="input-class" model:value="{{inputVal}}" />
      </view>
      <text>{{inputVal}}</text>
      ```

    - wxss文件

      ```
      /* pages/demo/demo.wxss */

      .input-class {
        border: 1px solid #343434;
        width: 80%;
        margin:8px;
      }
      ```

    - js文件

      ```
      Page({
        data: {
          inputVal:""
        }
      })
      ```
  
  - 点击事件例子

    - wxml文件

      ```
      <!--pages/demo/demo.wxml-->
      <view style="display:flex;">
        <input class="input-class" model:value="{{inputVal}}" />
        <button bindtap="btnTap">按钮</button>
      </view>
      <text>{{inputVal}}</text>

      ```

    - wxss文件

      ```
      /* pages/demo/demo.wxss */

      .input-class {
        border: 1px solid #343434;
        width: 80%;
        margin:8px;
      }
      ```

    - js文件

      ```
      Page({
        data: {
          inputVal:""
        },
        btnTap(e){
          console.log(this.data.inputVal)
          console.log(e)
        }
      })
      ```

  - 修改变量例子

    - wxml文件

      ```
      <!--pages/demo/demo.wxml-->
      <view style="display:flex;">
        <input class="input-class" model:value="{{inputVal}}" />
        <button bindtap="btnTap">按钮</button>
      </view>
      <text>{{inputVal}}</text>

      ```

    - wxss文件

      ```
      /* pages/demo/demo.wxss */

      .input-class {
        border: 1px solid #343434;
        width: 80%;
        margin:8px;
      }
      ```

    - js文件

      ```
      Page({
        data: {
          inputVal:""
        },
        btnTap(e){
          this.setData({
            inputVal : 100
          })
        }
      })
      ```

    
  - 组件应用

    - 创建组件文件夹components

    - 在components文件夹中创建TopBar文件夹

    - 在TopBar文件夹中右键创建TopBar，编辑器会自动创建一组文件

    - 文件目录

      - wxml

        ```
        <view class="search-input">
          <navigator url="/pages/index/index">搜索</navigator>
        </view>
        ```

      - js

        ```
        Component({
          properties: {

          },

          data: {

          },

          methods: {

          }
        })
        ```

      - wxss

        ```
        .search-input {
          height:90rpx;
          padding:16rpx;
          background-color: var(--themeColor);
          box-sizing: border-box;
        }

        .search-input navigator {
          display:flex;
          justify-content:center;
          align-items: center;
          background-color: #fff;
          color:var(--themeFontColor);
          height:100%;
          border-radius: 8px;
        }
        ```

    - 调用组件

      - 修改调用页面的配置文件xxx.json

        ```
        {
          "usingComponents": {
            "TopBar":"../../components/TopBar/TopBar"
          },
          "navigationBarTitleText": "页面标题"
        }
        ```

      - 在wxml中调用

        ```
        <!--pages/demo/demo.wxml-->
        <TopBar></TopBar>
        <view style="display:flex;">
          <input class="input-class" model:value="{{inputVal}}" />
          <button bindtap="btnTap">按钮</button>
        </view>
        <text>{{inputVal}}</text>

        ```



## 3.跳转

  - navigator标签

    ```
     <navigator url="/pages/xxx/xxx" >
     </navigator>
    ```

  - wx.navigateTo

    ```
    wx.navigateTo({
      url: '../logs/logs'
    })
    ```
## 4.slot

    https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
