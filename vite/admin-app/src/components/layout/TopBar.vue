<template>
  <div class="root">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"TopBar"
}
</script>

<style scoped>
.root {
    display:flex;
    height:60px;
    font-size:16px;
    background-color: #fff;
    box-shadow: 0px 1px 8px #e3e3e3;
    align-items: center;
}
</style>