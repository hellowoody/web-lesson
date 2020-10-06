<template>
  <div class="root">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"HScroll"
}
</script>

<style scoped>
.root {
    margin-top:18px;
    display:flex;
    overflow-x: auto;
}

/* 隐藏滚动进度条 */
::-webkit-scrollbar {
    display: none;
}
</style>