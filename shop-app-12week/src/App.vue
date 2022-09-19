<script setup>
import { watch,ref } from "vue"
import { useRoute } from "vue-router"
import { useState } from "@/store/pageDirection"
// import { useStore } from "vuex"
// const store = useStore();

const transitionName = ref("") // fold-left or fold-right
const route = useRoute();
const state = useState();
// console.log(route)

watch(() => route.path,(curr,prev) => {
  // console.log("当前路径:",curr,"上一个路径:",prev)
  if(curr.indexOf("/main/") >= 0 && prev.indexOf("/main/") >= 0 ){
    // 在一级页面中跳转不同的选项卡
    transitionName.value = ""
  }else{
    if(state.direction === "forward") {
      transitionName.value = "fold-left"  // 前进 fold-left
    }else{
      transitionName.value = "fold-right" // 后退 fold-right
    }
    // if(store.state.pageDirection.direction === "forward") {
    //   transitionName.value = "fold-left"  // 前进 fold-left
    // }else{
    //   transitionName.value = "fold-right" // 后退 fold-right
    // }
  }
})
</script>

<template>
  <!-- router-view可以理解为页面的占位符 -->
  <router-view v-slot="{Component}">
    <!-- fold-left 进入下级页面 -->
    <!-- fold-right 返回 -->
    <!-- transitionName: fold-left or fold-right -->
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
@import "./assets/iconfont/iconfont.css";

body {
  margin:0px;
}

.fold-left-enter-active {
  position: fixed;
  height:100vh;
  width:100vw;
  animation-name: fold-left-in;
  animation-duration: 0.3s;
}

@keyframes fold-left-in {
  0% {
    transform: translate(100%,0);  /*此时新页面在屏幕的右侧*/ 
  }

  100% {
    transform: translate(0,0);     /*此时新页面在屏幕内*/ 
  }
}

.fold-right-enter-active {
  position: fixed;
  height:100vh;
  width:100vw;
  animation-name: fold-right-out;
  animation-duration: 0.3s;
}

@keyframes fold-right-out {
  0% {
    transform: translate(-100%,0);  /*此时新页面在屏幕的左侧*/ 
  }

  100% {
    transform: translate(0,0);     /*此时新页面在屏幕内*/ 
  }
}





</style>
