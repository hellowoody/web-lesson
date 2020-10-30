<template>
  <layout>
    <template v-slot:TopBar>
      <top-bar>
        <Header></Header>
      </top-bar>
    </template>
    <template v-slot:SideBar>
      <div style="flex:1;background-color:red;">边栏</div>
    </template>
    <template v-slot:Page>
      <div style="flex:3">具体的页面内容</div>
    <template>
  </layout>
</template>

<script>
import Layout from '/@/components/layout/Layout.vue';
import TopBar from '/@/components/layout/TopBar.vue';
import Header from '/@/components/Header.vue';
import "/@/assets/css/common.css"

export default {
  name: 'App',
  components:{
    Layout,
    TopBar,
    Header
  },

}
</script>

<style scoped>
</style>