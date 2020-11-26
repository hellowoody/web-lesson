<template>
  <top-bar @focusHandle="goSearch">
    <template v-slot:right>
        <div class="iconfont icon-search" @click="goSearch" ></div>
    </template>
  </top-bar>
  <h1>let's do it</h1>
</template>

<script>
import TopBar from '/@/components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  },
  methods:{
    goSearch(){
      this.$router.push("/search")
    }
  }
}
</script>

<style>

</style>
