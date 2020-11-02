<template>
  <div class="root">
      <div>后台管理系统</div>
      <!-- <div style="font-size:12px;">你好,张三 登出</div> -->
      <a-dropdown>
        <a class="ant-dropdown-link more" @click="e => e.preventDefault()"> 更多 <DownOutlined /> </a>
        <template v-slot:overlay>
          <a-menu style="width:90px;">
            <a-menu-item>
              <div>张三</div>
            </a-menu-item>
            <a-menu-item>
              <div>设置</div>
            </a-menu-item>
            <a-menu-item>
              <div>登出</div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
  </div>
</template>

<script>

import { DownOutlined } from '@ant-design/icons-vue';

export default {
  name:"Header",
  components:{
    DownOutlined,
  }
}
</script>

<style scoped>
.root {
    display: flex;
    padding-left:24px;
    padding-right:24px;
    width:100%;
    justify-content: space-between;
}

.more {
  font-size:13px;
}
</style>