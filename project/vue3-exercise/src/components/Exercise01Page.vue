<!-- sfc 单页面组件 -->
<script setup>
// @ -> vue3-exercise/src/
// import Vue3Grammer from "@/components/exercise/Vue3Grammer.vue";
// import Count00 from "@/components/exercise/Count00.vue";
// import Count01 from "@/components/exercise/Count01.vue";
// import Count02 from "@/components/exercise/Count02.vue";
// import Count03 from "@/components/exercise/Count03.vue";

</script>

<template>
  <count-03 />
  <hr>
  <count-02 />
  <hr>
  <count-01 />
  <hr>
  <count-00 />
  <hr>
  <vue-3-grammer />
</template>

<script>
export default {
  mounted(){
    console.log("3.2中 sfc 一个页面可以同时写4种标签")
  }
}
</script>

<style></style>

