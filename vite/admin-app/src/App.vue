<template>
  <layout>
    <template v-slot:TopBar>
      <div>top bar</div>
    </template>
  </layout>
</template>

<script>
import Layout from '/@/components/layout/Layout.vue';
import "/@/assets/css/common.css"

export default {
  name: 'App',
  components:{
    Layout
  },

}
</script>

<style scoped>

</style>