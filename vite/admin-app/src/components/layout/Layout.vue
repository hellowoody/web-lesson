<template>
  <div class="Layout">
    <slot name="TopBar"></slot>
    <div class="Content">
      <slot name="SideBar"></slot>
      <slot name="Content"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name:"Layout"
}
</script>

<style scoped>
.Layout {
  display: flex;
  min-height: 100vh;
  flex: 1;
  flex-direction: column;
}

.Content {
  display: flex;
  flex:1;
}

</style>