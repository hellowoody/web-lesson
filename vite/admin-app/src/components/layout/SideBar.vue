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
    border-right: 1px solid #eaecef;
    box-sizing: border-box;
    overflow-y:auto;
    /* background-color: #fff; */
}
</style>