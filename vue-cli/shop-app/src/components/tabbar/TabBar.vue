<template>
    <div class="tab-bar tab-bar-extend">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar',
}
</script>

<style scoped>
.tab-bar {
  height:58px;
  background-color: #fff;
  position: fixed;
  bottom:0px;
  left:0px;
  right:0px;
  box-shadow: 0px 0px 8px #E3E3E3;
}

.tab-bar-extend {
    display: flex;
    align-items: center;
}


</style>