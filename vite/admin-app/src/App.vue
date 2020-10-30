<template>
  <layout>
    <template v-slot:TopBar>
      <div style="height:100px;background-color:blue;">top bar</div>
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
import "/@/assets/css/common.css"

export default {
  name: 'App',
  components:{
    Layout
  },

}
</script>

<style scoped>
</style>