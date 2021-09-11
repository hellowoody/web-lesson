<!-- sfc 单页面组件 -->
<script setup>
// @ -> vue3-exercise/src/
// import Vue3Grammer from "@/components/exercise/Vue3Grammer.vue";
// import Count00 from "@/components/exercise/Count00.vue";
// import Count01 from "@/components/exercise/Count01.vue";
// import Count02 from "@/components/exercise/Count02.vue";
// import Count03 from "@/components/exercise/Count03.vue";

// 当你用es6将useRouter,useRoute导入进来后,建议马上运行这两个函数，并赋值给连个对象
import {useRouter,useRoute} from "vue-router";

const router = useRouter();  // 做跳转用的
const route = useRoute();    // 获取参数
  // console.log("router:",router)
  // console.log("route:",route)

const back = () => {
  // 如何通过js代码的方式进行路由跳转
  // const router = useRouter()   // 不建议在函数里面执行
  // router.back();
  router.go(-1);
}

</script>

<template>
  <a-button @click="back">返回</a-button>
  <hr>
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

