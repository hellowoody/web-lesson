<script setup>
import VuexComp from "./components/VuexComp.vue"
import PiniaComp from "./components/PiniaComp.vue"
</script>

<template>
  <h1>全局状态管理</h1>
  <div style="display:flex;justify-content: space-between;">
    <vuex-comp />
    <pinia-comp />
  </div>
</template>

