<template>
  <div id="app">
    <tab-bar>
        <tab-bar-item name="首页">
          <div slot="icon">
            <div class="iconfont icon-home" :style="{fontSize:'19px'}"></div>
          </div>
        </tab-bar-item>
        <tab-bar-item name="产品">
          <div slot="icon">
            <div class="iconfont icon-product" :style="{fontSize:'19px'}"></div>
          </div>
        </tab-bar-item>
        <tab-bar-item name="订单"/>
        <tab-bar-item name="我的"/>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar.vue'
import TabBarItem from '@/components/tabbar/TabBarItem.vue'

export default {
  name:"app",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "./assets/css/commom.css";
@import "./assets/icon/iconfont.css";


</style>
