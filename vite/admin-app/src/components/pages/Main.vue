<template>
  <Layout>
    <template v-slot:TopBar >
      <top-bar>
        <Header />
      </top-bar>
    </template>
    <template v-slot:SideBar >
      <side-bar class="side-bar">
        <nav-bar />
      </side-bar>
    </template>
    <template v-slot:Content >
      <content>
        <router-view></router-view>
      </content>
    </template>
  </Layout>
</template>

<script>
import {ref} from 'vue'
import Layout from '/@/components/layout/Layout.vue'
import TopBar from '/@/components/layout/TopBar.vue'
import SideBar from '/@/components/layout/SideBar.vue'
import Content from '/@/components/layout/Content.vue'
import Header from '/@/components/Header.vue'
import NavBar from '/@/components/NavBar.vue'
import {useCheckLogin} from '/@/components/hooks/CheckHook'

export default {
  name: 'Main',
  components:{
    Layout,
    TopBar,
    SideBar,
    Content,
    Header,
    NavBar
  },
  setup(){
    useCheckLogin()
  }
}
</script>

<style scoped>
.side-bar{
  padding:unset;
  border:unset;
  background-color:#fff;
}
</style>
