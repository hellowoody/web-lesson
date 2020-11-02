<template>
  <div class="root">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"SideBar"
}
</script>

<style scoped>
.root {
    width:300px;
    padding:24px;
    border-right: 1px solid #eaecef;
    box-sizing: border-box;
    overflow-y:auto;
}
</style>