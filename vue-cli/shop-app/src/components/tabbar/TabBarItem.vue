<template>
    <div class="tab-bar-item">
        <div style="font-size:19px;margin-bottom:6px;" class="iconfont icon-home"></div>
        <div style="font-size:14px">首页</div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
}
</script>

<style scoped>
.tab-bar-item {
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>