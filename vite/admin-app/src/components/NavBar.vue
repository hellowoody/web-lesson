<template>
  <a-menu
      id="menu-list"
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
    >
      <a-menu-item key="home" @click="handleClick('/main/home')">
        <span class="menu-icon iconfont icon-home"/>
        <span>首页</span>
      </a-menu-item>
      <a-sub-menu v-for="item in menus" :key="item.key" @titleClick="titleClick">
        <template v-slot:title>
          <span><span class="menu-icon" :class="item.icon" /><span>{{item.name}}</span></span>
        </template>
        <a-menu-item v-for="t in item.menus" :key="t.key" @click="handleClick(t.path)">{{t.name}}</a-menu-item>
      </a-sub-menu>
  </a-menu>
</template>

<script>
import { ref,toRaw } from 'vue';
import { useGoto } from '/@/components/hooks/RouterHook.ts'
import { useRoute } from 'vue-router'
export default {
    name:"NavBar",
    setup(){
      const menus = [
        {
          key:"good",
          name:"商品管理",
          icon:"iconfont icon-orderselect",
          menus:[
            {
              key:"goodmanagment",
              name:"商品列表",
              path:"/main/goodmanagment"
            },
            {
              key:"goodstore",
              name:"商品库存",
              path:"/main/goodmanagment"
            }
          ]
        },
      ]
      const route = useRoute()
      let openKey = ""

      for(let t1 of menus){
        for(let t2 of t1.menus){
          if(t2.key === route.name){
            openKey = t1.key
            break
          }
        }
      }
      const selectedKeys = ref([route.name])
      const openKeys = ref([openKey])
      const { goPath } = useGoto()

      const handleClick = (path)=>{
        goPath(path)
      }

      const titleClick = (e)=>{
        console.log('titleClick', e);
      }

      return {
        menus,
        selectedKeys,
        openKeys,
        handleClick,
        titleClick,
      }
    },
}
</script>

<style scoped>

.menu-icon {
  margin-right:8px;
}

</style>