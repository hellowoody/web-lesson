<template>
  <div class="layout">
      <slot name="TopBar"></slot>
      <div class="content">
          <slot name="SideBar"></slot>
          <slot name="Page"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name:"Layout"
}
</script>

<style scoped>
.layout {
  display:flex;
  min-height: 100vh;
  flex-direction: column;
}

.content{
  display: flex;
  flex:1;
}


</style>