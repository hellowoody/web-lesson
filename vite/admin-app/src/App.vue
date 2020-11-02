<template>
  <layout>
    <template v-slot:TopBar>
      <top-bar>
        <Header />
      </top-bar>
    </template>
    <template v-slot:SideBar>
      <side-bar>
        <nav-bar />
      </side-bar>
    </template>
    <template v-slot:Page>
      <div>具体的页面内容</div>
    </template>
  </layout>
</template>

<script>
import Layout from '/@/components/layout/Layout.vue';
import TopBar from '/@/components/layout/TopBar.vue';
import SideBar from '/@/components/layout/SideBar.vue';
import Header from '/@/components/Header.vue';
import NavBar from '/@/components/NavBar.vue';
import "/@/assets/css/common.css"

export default {
  name: 'App',
  components:{
    Layout,
    TopBar,
    SideBar,
    Header,
    NavBar,
  },

}
</script>

<style scoped>
</style>