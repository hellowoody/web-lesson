<template>
  <div class="root">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"Content",
}
</script>

<style scoped>
.root {
  width: 100%;
  padding:24px;
}
</style>