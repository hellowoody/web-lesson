<template>
  <div class="root">
    <div style="font-weight:bold;">后台管理系统</div>
    <a-dropdown>
      <a class="ant-dropdown-link more" @click="e => e.preventDefault()"> 更多 <DownOutlined /> </a>
      <template v-slot:overlay>
        <a-menu style="width:90px;">
          <a-menu-item>
            <div class="menu-item"><span class="iconfont icon-caidaniconwodehui"></span> {{name}}</div>
          </a-menu-item>
          <a-menu-item>
            <div class="menu-item"><span class="iconfont icon-setting"></span> 设置</div>
          </a-menu-item>
          <a-menu-item @click="logout">
            <div class="menu-item"><span class="iconfont icon-log-out"></span> 登出</div>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { DownOutlined } from '@ant-design/icons-vue';
import { useGoto } from '/@/components/hooks/RouterHook';
import { getCacheVal } from '/@/kits/LocalStore'
export default {
    name:"Header",
    components:{
      DownOutlined
    },
    setup(){
      const { logout } = useGoto()
      const name = getCacheVal("username")
      return {
        logout,
        name
      }
    }
}
</script>

<style scoped>
.root {
  padding-left:24px;
  padding-right:24px;
  display:flex;
  width: 100%;
  justify-content: space-between;
}

.more {
  font-size:13px;
}
.menu-item {
  display:flex;
  justify-content: space-between;
  padding-left:3px;
  padding-right:3px;
}
</style>