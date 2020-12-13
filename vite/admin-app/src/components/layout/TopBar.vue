<template>
  <div class="root" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TopBar",
  props:{
  }
}
</script>

<style scoped>
.root {
  display:flex;
  align-items: center;
  box-shadow:0 1px 8px #f0f1f2;
  background-color: #fff;
  height:60px;
  font-size:16px;
}
</style>