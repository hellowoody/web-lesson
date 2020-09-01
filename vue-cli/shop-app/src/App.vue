<template>
  <div id="app">
    <tab-bar>
        <tab-bar-item />
        <tab-bar-item/>
        <tab-bar-item/>
        <tab-bar-item/>
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
